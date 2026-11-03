
document.addEventListener("DOMContentLoaded", () => {
        // Check whether the user is logged in
    const sessionUser = sessionStorage.getItem("storyspaceCurrentUser");
    const rememberedUser = localStorage.getItem("storyspaceRememberedUser");

    if (!sessionUser && !rememberedUser) {
        alert("Please login to write a story.");
        window.location.href = "login.html";
        return;
    }

    const storyForm = document.getElementById("storyForm");
    if (!storyForm) return;

    const titleInput = document.getElementById("storyTitle");
    const categoryInput = document.getElementById("storyCategory");
    const descriptionInput = document.getElementById("storyDescription");
    const coverInput = document.getElementById("storyCover");
    const contentInput = document.getElementById("storyContent");

    const wordCount = document.getElementById("wordCount");
    const writeMessage = document.getElementById("writeMessage");

    let coverImage = "";
    let editingStoryId = null;
    let originalCreatedAt = null;

    const params = new URLSearchParams(window.location.search);
    const editId = params.get("edit");

    function getStories(key) {
        try {
            return JSON.parse(localStorage.getItem(key)) || [];
        } catch {
            return [];
        }
    }

    function saveStories(key, stories) {
        localStorage.setItem(key, JSON.stringify(stories));
    }

    // ========================================
    // LOAD EXISTING DRAFT FOR EDITING
    // ========================================

    if (editId) {

        const drafts = getStories("storyspaceDrafts");

        const existingStory = drafts.find(
            story => String(story.id) === editId
        );

        if (existingStory) {

            editingStoryId = existingStory.id;
            originalCreatedAt = existingStory.createdAt;

            titleInput.value = existingStory.title || "";
            categoryInput.value = existingStory.category || "";
            descriptionInput.value = existingStory.description || "";
            contentInput.value = existingStory.content || "";

            coverImage = existingStory.cover || "";

            if (coverImage) {
                document.getElementById("previewImage").src = coverImage;
                document.getElementById("coverPreview")
                    .classList.remove("d-none");
            }

            updateWordCount();

            writeMessage.textContent = "You are editing your saved draft.";
            writeMessage.style.color = "green";

        } else {

            writeMessage.textContent = "Draft not found.";
            writeMessage.style.color = "red";

        }
    }

    // ========================================
    // WORD COUNTER
    // ========================================

    function updateWordCount() {

        const words = contentInput.value.trim()
            ? contentInput.value.trim().split(/\s+/).length
            : 0;

        wordCount.textContent = words;
    }

    contentInput.addEventListener("input", updateWordCount);

    // ========================================
    // COVER IMAGE PREVIEW
    // ========================================

    coverInput.addEventListener("change", () => {

        const file = coverInput.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image.");
            coverInput.value = "";
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("Please select an image smaller than 2 MB.");
            coverInput.value = "";
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {

            coverImage = event.target.result;

            document.getElementById("previewImage").src = coverImage;

            document.getElementById("coverPreview")
                .classList.remove("d-none");
        };

        reader.readAsDataURL(file);
    });

    // ========================================
    // GET STORY DATA
    // ========================================

    function getStoryData() {

        return {
            id: editingStoryId || Date.now().toString(),
            title: titleInput.value.trim(),
            category: categoryInput.value,
            description: descriptionInput.value.trim(),
            cover: coverImage,
            content: contentInput.value.trim(),
            status: "draft",
            createdAt: originalCreatedAt || new Date().toISOString()
        };
    }

    // ========================================
    // PREVIEW STORY
    // ========================================

    document.getElementById("previewStory")
        .addEventListener("click", () => {

            if (!storyForm.reportValidity()) return;

            const story = getStoryData();

            document.getElementById("modalTitle").textContent =
                story.title;

            document.getElementById("modalCategory").textContent =
                story.category.toUpperCase();

            document.getElementById("modalDescription").textContent =
                story.description;

            document.getElementById("modalContent").textContent =
                story.content;

            const modalCover = document.getElementById("modalCover");

            if (story.cover) {
                modalCover.src = story.cover;
                modalCover.classList.remove("d-none");
            } else {
                modalCover.classList.add("d-none");
            }

            const previewModal = new bootstrap.Modal(
                document.getElementById("previewModal")
            );

            previewModal.show();
        });

    // ========================================
    // SAVE OR UPDATE DRAFT
    // ========================================

    document.getElementById("saveDraft")
        .addEventListener("click", () => {

            if (!storyForm.reportValidity()) return;

            const story = getStoryData();
            story.status = "draft";

            const drafts = getStories("storyspaceDrafts");

            if (editingStoryId) {

                const index = drafts.findIndex(
                    item => String(item.id) === String(editingStoryId)
                );

                if (index !== -1) {
                    drafts[index] = story;
                } else {
                    drafts.push(story);
                }

            } else {
                drafts.push(story);
            }

            try {

                saveStories("storyspaceDrafts", drafts);

                writeMessage.textContent =
                    "Your draft has been saved successfully!";

                writeMessage.style.color = "green";

                editingStoryId = story.id;
                originalCreatedAt = story.createdAt;

            } catch (error) {

                writeMessage.textContent =
                    "Unable to save. Your browser storage may be full.";

                writeMessage.style.color = "red";
            }
        });

    // ========================================
    // PUBLISH STORY
    // ========================================

    storyForm.addEventListener("submit", (event) => {

        event.preventDefault();

        if (!storyForm.reportValidity()) return;

        const story = getStoryData();
        story.status = "published";

        const publishedStories = getStories("storyspacePublished");
        const drafts = getStories("storyspaceDrafts");

        try {

            const existingPublishedIndex = publishedStories.findIndex(
                item => String(item.id) === String(story.id)
            );

            if (existingPublishedIndex !== -1) {
                publishedStories[existingPublishedIndex] = story;
            } else {
                publishedStories.push(story);
            }

            // Remove the draft after publishing
            const updatedDrafts = drafts.filter(
                item => String(item.id) !== String(story.id)
            );

            saveStories("storyspacePublished", publishedStories);
            saveStories("storyspaceDrafts", updatedDrafts);

            writeMessage.textContent =
                "Your story has been published successfully!";

            writeMessage.style.color = "green";

            storyForm.reset();

            coverImage = "";
            editingStoryId = null;
            originalCreatedAt = null;

            wordCount.textContent = "0";

            document.getElementById("coverPreview")
                .classList.add("d-none");

        } catch (error) {

            writeMessage.textContent =
                "Unable to publish. Your browser storage may be full.";

            writeMessage.style.color = "red";
        }
    });

});
