
document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const sortSelect = document.getElementById("sortSelect");
    const categoryFilters = document.getElementById("categoryFilters");
    const resultsCount = document.getElementById("resultsCount");
    const noResults = document.getElementById("noResults");
    const resetFilters = document.getElementById("resetFilters");
    const articleGrid = document.getElementById("articleGrid");

    // Stop if this is not the Explore page.
    if (!articleGrid) return;

    const articles = Array.from(
        articleGrid.querySelectorAll(".article-item")
    );

    let selectedCategory = "all";

    function filterArticles() {

        const searchTerm = searchInput.value.trim().toLowerCase();

        let visibleArticles = articles.filter(article => {

            const title = article.dataset.title.toLowerCase();
            const category = article.dataset.category;

            const matchesSearch =
                title.includes(searchTerm) ||
                category.toLowerCase().includes(searchTerm);

            const matchesCategory =
                selectedCategory === "all" ||
                category === selectedCategory;

            return matchesSearch && matchesCategory;
        });

        // Sorting
        const sortType = sortSelect.value;

        if (sortType === "latest") {
            visibleArticles.sort(
                (a, b) => Number(b.dataset.date) - Number(a.dataset.date)
            );
        }

        if (sortType === "popular") {
            visibleArticles.sort(
                (a, b) => Number(b.dataset.popularity) -
                          Number(a.dataset.popularity)
            );
        }

        if (sortType === "az") {
            visibleArticles.sort(
                (a, b) => a.dataset.title.localeCompare(b.dataset.title)
            );
        }

        // Hide all articles first.
        articles.forEach(article => {
            article.hidden = true;
        });

        // Display matching articles in sorted order.
        visibleArticles.forEach(article => {
            article.hidden = false;
            articleGrid.appendChild(article);
        });

        resultsCount.textContent =
            `Showing ${visibleArticles.length} of ${articles.length} stories`;

        noResults.hidden = visibleArticles.length !== 0;
    }


    // Category filtering
    categoryFilters.addEventListener("click", event => {

        const button = event.target.closest(".filter-btn");

        if (!button) return;

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        filterArticles();
    });


    // Search
    searchInput.addEventListener("input", filterArticles);

    searchButton.addEventListener("click", filterArticles);

    // Sorting
    sortSelect.addEventListener("change", filterArticles);


    // Reset filters
    resetFilters.addEventListener("click", () => {

        searchInput.value = "";
        selectedCategory = "all";
        sortSelect.value = "latest";

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.toggle(
                "active",
                btn.dataset.category === "all"
            );
        });

        filterArticles();
    });


    // Initial display
    filterArticles();

});
