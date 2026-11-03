
// ========================================
// STORYSPACE - SAVED ARTICLES
// ========================================

document.addEventListener("DOMContentLoaded", () => {
    // ========================================
// CHECK LOGIN STATUS
// ========================================

const sessionUser = sessionStorage.getItem("storyspaceCurrentUser");

const rememberedUser = localStorage.getItem("storyspaceRememberedUser");

if (!sessionUser && !rememberedUser) {

    // alert("Please login to view your saved articles.");

    window.location.href = "login.html";

    return;
}

    const savedContainer = document.getElementById("savedArticles");
    const savedCount = document.getElementById("savedCount");
    const emptyState = document.getElementById("emptyState");

    // Get saved article IDs from LocalStorage
    function getBookmarks() {
        return JSON.parse(
            localStorage.getItem("storyspaceBookmarks")
        ) || [];
    }

    // Display saved articles
    function displaySavedArticles() {

        const bookmarks = getBookmarks();

        // Find the matching article details
        const savedArticles = bookmarks
            .map(id => ({
                id,
                article: articles[id]
            }))
            .filter(item => item.article);

        // Update saved article count
        savedCount.textContent =
            `${savedArticles.length} saved article${savedArticles.length !== 1 ? "s" : ""}`;

        // Show empty state if there are no bookmarks
        if (savedArticles.length === 0) {

            savedContainer.innerHTML = "";
            emptyState.classList.remove("d-none");

            return;
        }

        emptyState.classList.add("d-none");

        // Display article cards
        savedContainer.innerHTML = savedArticles.map(({ id, article }) => `

            <div class="col-md-6 col-lg-4">

                <article class="article-card">

                    <a href="article.html?id=${id}" class="story-card-link">

                        <img
                            src="${article.cover}"
                            alt="${article.alt}">

                        <div class="article-card-content">

                            <span class="article-category">
                                ${article.category.toUpperCase()}
                            </span>

                            <h3>${article.title}</h3>

                            <p>By ${article.author} · ${article.readTime}</p>

                        </div>

                    </a>

                    <div class="p-3 pt-0">

                        <button
                            class="btn btn-outline-danger btn-sm remove-bookmark"
                            data-id="${id}">

                            <i class="bi bi-bookmark-x"></i>
                            Remove

                        </button>

                    </div>

                </article>

            </div>

        `).join("");

    }

    // Remove a saved article
    savedContainer.addEventListener("click", (event) => {

        const removeButton = event.target.closest(".remove-bookmark");

        if (!removeButton) return;

        const articleId = removeButton.dataset.id;

        const updatedBookmarks = getBookmarks().filter(
            id => id !== articleId
        );

        localStorage.setItem(
            "storyspaceBookmarks",
            JSON.stringify(updatedBookmarks)
        );

        // Refresh the saved articles
        displaySavedArticles();

    });

    // Initial display
    displaySavedArticles();

});
