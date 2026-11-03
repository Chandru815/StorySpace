
document.addEventListener("DOMContentLoaded", () => {

    // Check login
    const sessionUser = sessionStorage.getItem("storyspaceCurrentUser");
    const rememberedUser = localStorage.getItem("storyspaceRememberedUser");

    if (!sessionUser && !rememberedUser) {
        window.location.href = "login.html";
        return;
    }

    const storiesContainer = document.getElementById("myStoriesContainer");
    const storyCount = document.getElementById("storyCount");
    const emptyStories = document.getElementById("emptyStories");
    const tabs = document.querySelectorAll(".story-tab");

    let activeTab = "drafts";

    // Read LocalStorage data
    function getStories(storageKey) {
        try {
            return JSON.parse(localStorage.getItem(storageKey)) || [];
        } catch {
            return [];
        }
    }

    // Escape text before displaying it
    function escapeHTML(value) {
        return String(value || "").replace(/[&<>"']/g, character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[character]);
    }

    // Display stories
    function displayStories() {

        storiesContainer.innerHTML = "";

        let stories = [];
        let storageKey = "";

        if (activeTab === "drafts") {

            storageKey = "storyspaceDrafts";
            stories = getStories(storageKey);

        } else if (activeTab === "published") {

            storageKey = "storyspacePublished";
            stories = getStories(storageKey);

        } else if (activeTab === "saved") {

            const bookmarks = getStories("storyspaceBookmarks");

            // Get article details from article.js
            stories = bookmarks
    .map(id => {
        if (typeof articles === "undefined") return null;

        const article = articles[String(id)];

        if (!article) return null;

        return {
            ...article,
            id: String(id)
        };
    })
    .filter(Boolean);;
        }

        // Update story count
        storyCount.textContent =
            `${stories.length} ${stories.length === 1 ? "story" : "stories"}`;

        // Empty state
        if (stories.length === 0) {
            emptyStories.classList.remove("d-none");
            storiesContainer.classList.add("d-none");

            if (activeTab === "saved") {
                emptyStories.querySelector("h4").textContent =
                    "No saved stories yet";

                emptyStories.querySelector("p").textContent =
                    "Explore stories and bookmark your favourites.";
            } else {
                emptyStories.querySelector("h4").textContent =
                    "No stories here yet";

                emptyStories.querySelector("p").textContent =
                    "Start writing and your stories will appear here.";
            }

            return;
        }

        emptyStories.classList.add("d-none");
        storiesContainer.classList.remove("d-none");

        stories.forEach(story => {

            const storyCard = document.createElement("div");
            storyCard.className = "col-lg-4 col-md-6";

            const isSaved = activeTab === "saved";

            const image = story.cover ||
                "https://placehold.co/600x350?text=StorySpace";

            const title = escapeHTML(story.title);
            const description = escapeHTML(story.description);
            const category = escapeHTML(story.category);
            const storyId = encodeURIComponent(String(story.id));

            storyCard.innerHTML = `
                <div class="my-story-card">

                    <img
                        src="${image}"
                        alt="Story cover"
                    >

                    <div class="my-story-content">

                        <span class="story-status">
                            ${isSaved ? "Saved" :
                                activeTab === "drafts" ? "Draft" : "Published"}
                        </span>

                        <h5>${title}</h5>

                        <p>${description}</p>

                        <small>${category}</small>

                        <div class="story-card-actions">

                            ${activeTab === "drafts" ? `
                                <a href="write.html?edit=${storyId}"
                                   class="btn btn-success">
                                    Edit
                                </a>
                            ` : ""}

                            ${isSaved ? `
                                <a href="article.html?id=${storyId}"
                                   class="btn btn-success">
                                    Read Article
                                </a>
                            ` : ""}

                            <button
                                class="btn btn-outline-danger remove-story"
                                data-id="${storyId}">
                                ${isSaved ? "Remove Saved" : "Delete"}
                            </button>

                        </div>

                    </div>
                </div>
            `;

            storiesContainer.appendChild(storyCard);
        });

        // Remove or delete story
        document.querySelectorAll(".remove-story").forEach(button => {

            button.addEventListener("click", () => {

                const message = activeTab === "saved"
                    ? "Remove this article from Saved Stories?"
                    : "Are you sure you want to delete this story?";

                if (!confirm(message)) return;

                const id = button.dataset.id;
                if (activeTab === "saved") {

                    const bookmarks = getStories("storyspaceBookmarks");

                    const updatedBookmarks = bookmarks.filter(
                        item => String(item) !== id
                    );

                    localStorage.setItem(
                        "storyspaceBookmarks",
                        JSON.stringify(updatedBookmarks)
                    );

                } else {

                    const updatedStories = getStories(storageKey).filter(
                        story => String(story.id) !== id
                    );

                    localStorage.setItem(
                        storageKey,
                        JSON.stringify(updatedStories)
                    );
                }

                displayStories();
            });
        });
    }

    // Switch tabs
    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(item => item.classList.remove("active"));

            tab.classList.add("active");

            activeTab = tab.dataset.tab;

            displayStories();
        });
    });

    // Initial display
    displayStories();

});
