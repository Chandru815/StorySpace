
// ========================================
// STORYSPACE - ARTICLE DETAILS
// ========================================

// Article data
const articles = {

    1: {
        title: "The Future of Technology and Innovation",
        category: "Technology",
        subtitle: "Exploring how technology is changing the way we learn, work and experience the world around us.",
        author: "Alex Morgan",
        authorRole: "Technology Writer",
        authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
        authorBio: "Technology enthusiast and writer sharing ideas about innovation, digital experiences and the future of technology.",
        date: "November 3, 2026",
        readTime: "5 min read",
        cover: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400",
        alt: "Modern technology workspace",
        intro: "Technology has become an essential part of our everyday lives. From the way we communicate to the way we work, innovation continues to reshape the world around us.",
        content: `
            <h2>The Changing World of Technology</h2>
            <p>Over the past few years, technology has developed at an incredible pace. Digital platforms, automation and artificial intelligence have transformed industries and created new opportunities for people around the world.</p>

            <p>Businesses are adopting modern tools to improve productivity, while individuals are using digital technologies to learn new skills and explore creative possibilities.</p>

            <h2>The Rise of Artificial Intelligence</h2>
            <p>Artificial intelligence is one of the most influential developments in modern technology. It helps computers analyze information, recognize patterns and assist people in solving complex problems.</p>

            <blockquote>"Innovation is not just about creating something new. It is about making something better."</blockquote>

            <p>AI-powered tools are being used in education, healthcare, software development and many other fields. These technologies can support human creativity and make everyday tasks more efficient.</p>

            <h2>Technology and the Future of Work</h2>
            <p>The workplace is changing as digital tools become more accessible. Remote collaboration, cloud computing and automation are allowing teams to work together in new ways.</p>

            <p>At the same time, continuous learning is becoming increasingly important. People who develop technical and problem-solving skills will be better prepared for future opportunities.</p>

            <h2>Final Thoughts</h2>
            <p>Technology will continue to evolve, bringing both opportunities and challenges. The important thing is to remain curious, keep learning and use innovation responsibly.</p>

            <p>The future is not simply something we wait for. It is something we create through the ideas and decisions we make today.</p>
        `,
        tags: ["Technology", "Innovation", "Artificial Intelligence"]
    },

    2: {
        title: "Finding Inspiration in New Places",
        category: "Travel",
        subtitle: "Discovering how new destinations, cultures and experiences can change our perspective.",
        author: "Sarah Wilson",
        authorRole: "Travel Writer",
        authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
        authorBio: "Travel enthusiast who enjoys discovering new destinations, cultures and unforgettable experiences.",
        date: "November 2, 2026",
        readTime: "4 min read",
        cover: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1400",
        alt: "Beautiful mountain landscape",
        intro: "Travelling introduces us to new places, people and experiences. Every journey gives us an opportunity to discover something different.",
        content: `
            <h2>Discovering New Destinations</h2>
            <p>Exploring new places helps us understand the world from different perspectives. Every destination has its own culture, traditions and natural beauty.</p>

            <p>Sometimes the most memorable experiences come from visiting places we never expected to discover.</p>

            <h2>Learning Through Travel</h2>
            <p>Travel is not only about visiting popular attractions. It is also about meeting people, learning local traditions and understanding different ways of life.</p>

            <blockquote>"The journey itself can teach us more than the destination."</blockquote>

            <h2>Making Every Journey Meaningful</h2>
            <p>Taking photographs, trying local food and exploring unfamiliar streets can create memories that stay with us for years.</p>

            <h2>Final Thoughts</h2>
            <p>Every journey offers something new. Stay curious, explore responsibly and enjoy the experiences that come along the way.</p>
        `,
        tags: ["Travel", "Inspiration", "Lifestyle"]
    },

    3: {
        title: "The Art of Building Better Habits",
        category: "Lifestyle",
        subtitle: "Small daily improvements can create meaningful changes in our lives.",
        author: "James Miller",
        authorRole: "Lifestyle Writer",
        authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
        authorBio: "Writer interested in personal growth, productivity and building positive everyday habits.",
        date: "November 1, 2026",
        readTime: "6 min read",
        cover: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1400",
        alt: "Writing in a notebook",
        intro: "Good habits play an important role in shaping our everyday lives. Small actions repeated consistently can lead to meaningful improvements.",
        content: `
            <h2>Start With Small Changes</h2>
            <p>Building better habits does not require changing everything at once. Start with small and manageable actions that fit into your daily routine.</p>

            <h2>Consistency Matters</h2>
            <p>Consistency is often more important than motivation. Repeating a simple activity every day helps turn it into a natural part of your lifestyle.</p>

            <blockquote>"Small steps every day lead to big changes over time."</blockquote>

            <h2>Track Your Progress</h2>
            <p>Writing down your daily progress can help you understand your improvements and identify areas where you need more attention.</p>

            <h2>Final Thoughts</h2>
            <p>Better habits are built through patience and practice. Focus on progress rather than perfection.</p>
        `,
        tags: ["Lifestyle", "Habits", "Personal Growth"]
    },

    4: {
        title: "Why Every Developer Should Keep Learning",
        category: "Programming",
        subtitle: "Technology changes quickly, and continuous learning helps developers grow with it.",
        author: "Alex Morgan",
        authorRole: "Software Developer",
        authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
        authorBio: "Software developer interested in programming, web technologies and sharing practical development knowledge.",
        date: "October 31, 2026",
        readTime: "5 min read",
        cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400",
        alt: "Developer working on a laptop",
        intro: "Software development is a field that constantly evolves. New tools, frameworks and programming practices appear regularly.",
        content: `
            <h2>Technology Never Stops Changing</h2>
            <p>Programming languages and development tools continue to improve. Developers who stay curious can adapt to these changes more confidently.</p>

            <h2>Learn by Building Projects</h2>
            <p>Reading documentation and watching tutorials are useful, but building real projects helps turn theoretical knowledge into practical skills.</p>

            <blockquote>"The best way to learn programming is to keep building."</blockquote>

            <h2>Explore New Technologies</h2>
            <p>Learning different technologies helps developers understand how software systems work and discover better ways to solve problems.</p>

            <h2>Final Thoughts</h2>
            <p>Continuous learning is an important part of becoming a better developer. Stay curious, practise regularly and never stop improving.</p>
        `,
        tags: ["Programming", "Development", "Learning"]
    },

    5: {
        title: "Building a Successful Creative Business",
        category: "Business",
        subtitle: "Turning creative ideas into meaningful projects through planning and consistency.",
        author: "Michael Scott",
        authorRole: "Business Writer",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
        authorBio: "Interested in entrepreneurship, creative thinking and sharing ideas about building successful projects.",
        date: "October 30, 2026",
        readTime: "7 min read",
        cover: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400",
        alt: "Modern business workspace",
        intro: "Every successful business starts with an idea. Turning that idea into reality requires planning, creativity and consistent effort.",
        content: `
            <h2>Start With a Clear Idea</h2>
            <p>A strong business begins with understanding a problem and identifying a useful solution. A clear idea provides direction for future decisions.</p>

            <h2>Understand Your Audience</h2>
            <p>Understanding customer needs helps businesses create products and services that provide real value.</p>

            <blockquote>"Great ideas become valuable when they solve real problems."</blockquote>

            <h2>Keep Improving</h2>
            <p>Feedback and experimentation help businesses discover what works and what needs improvement.</p>

            <h2>Final Thoughts</h2>
            <p>Building a successful business takes time. Focus on providing value, learning from challenges and improving consistently.</p>
        `,
        tags: ["Business", "Creativity", "Entrepreneurship"]
    },

    6: {
        title: "How Artificial Intelligence Is Changing Our World",
        category: "Technology",
        subtitle: "Understanding the growing role of artificial intelligence in everyday life.",
        author: "Emma Watson",
        authorRole: "Technology Writer",
        authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
        authorBio: "Technology writer exploring artificial intelligence, digital innovation and emerging technologies.",
        date: "October 29, 2026",
        readTime: "6 min read",
        cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400",
        alt: "Artificial intelligence concept",
        intro: "Artificial intelligence is becoming part of many everyday activities, changing how people work, communicate and solve problems.",
        content: `
            <h2>What Is Artificial Intelligence?</h2>
            <p>Artificial intelligence refers to computer systems designed to perform tasks that normally require human intelligence, such as recognizing patterns and understanding language.</p>

            <h2>AI in Everyday Life</h2>
            <p>AI technologies are used in search engines, recommendation systems, digital assistants and many other applications.</p>

            <blockquote>"Technology is most useful when it helps people do meaningful things."</blockquote>

            <h2>Opportunities and Challenges</h2>
            <p>AI can improve productivity and support innovation, but responsible development, privacy and accuracy remain important considerations.</p>

            <h2>Final Thoughts</h2>
            <p>Artificial intelligence will continue to develop. Understanding its capabilities and limitations will help us use it more effectively.</p>
        `,
        tags: ["Technology", "Artificial Intelligence", "Innovation"]
    }

};


// ========================================
// LOAD SELECTED ARTICLE
// ========================================

document.addEventListener("DOMContentLoaded", () => {
    // Run article-page functionality only on the Article Details page
    if (!document.getElementById("articleTitle")) {
        return;
    }
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("id") || "1";

    const article = articles[articleId];

    if (!article) {
        document.querySelector("main").innerHTML = `
            <div class="container text-center py-5">
                <h2>Article Not Found</h2>
                <p>The article you are looking for does not exist.</p>
                <a href="explore.html" class="btn btn-dark">
                    Back to Explore
                </a>
            </div>
        `;
        return;
    }

    // Update browser tab title
    document.title = `${article.title} | StorySpace`;

    // Update article heading
    document.getElementById("articleCategory").textContent =
        article.category.toUpperCase();

    document.getElementById("breadcrumbCategory").textContent =
        article.category;

    document.getElementById("articleTitle").textContent =
        article.title;

    document.getElementById("articleSubtitle").textContent =
        article.subtitle;

    // Update author information
    document.getElementById("articleAuthor").textContent =
        article.author;

    document.getElementById("authorRole").textContent =
        article.authorRole;

    document.getElementById("articleAuthorImage").src =
        article.authorImage;

    document.getElementById("articleAuthorImage").alt =
        `Author ${article.author}`;

    // Update date and reading time
    document.getElementById("articleDate").textContent =
        article.date;

   // ========================================
// ESTIMATED READING TIME
// ========================================

const articleText = article.content.replace(/<[^>]*>/g, " ");

const wordCount = articleText
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0).length;

const readingMinutes = Math.max(1, Math.ceil(wordCount / 200));

document.getElementById("articleReadTime").textContent =
    `${readingMinutes} min read`;

    // Update cover image
    document.getElementById("articleCover").src =
        article.cover;

    document.getElementById("articleCover").alt =
        article.alt;

    // Update article content
    document.getElementById("articleIntro").textContent =
        article.intro;

    document.getElementById("articleContent").innerHTML =
        `<p class="article-intro" id="articleIntro">${article.intro}</p>
         ${article.content}`;

    // Update author card
    document.getElementById("authorCardImage").src =
        article.authorImage;

    document.getElementById("authorCardImage").alt =
        article.author;

    document.getElementById("authorCardName").textContent =
        article.author;

    document.getElementById("authorBio").textContent =
        article.authorBio;

    // Update article tags
    const tagsContainer = document.getElementById("articleTags");

    tagsContainer.innerHTML = `
        <span>Topics:</span>
        ${article.tags.map(tag =>
            `<a href="explore.html">${tag}</a>`
        ).join("")}
    `;

// ========================================
// RELATED ARTICLES
// ========================================

const relatedContainer = document.getElementById("relatedArticles");

if (relatedContainer) {

    const relatedArticles = Object.entries(articles)
        .filter(([id, item]) =>
            id !== articleId && item.category === article.category
        )
        .slice(0, 3);

    relatedContainer.innerHTML = relatedArticles.map(([id, item]) => `
        <div class="col-md-6 col-lg-4">

            <a href="article.html?id=${id}" class="story-card-link">

                <article class="article-card">

                    <img
                        src="${item.cover}"
                        alt="${item.alt}">

                    <div class="article-card-content">

                        <span class="article-category">
                            ${item.category.toUpperCase()}
                        </span>

                        <h3>${item.title}</h3>

                        <p>By ${item.author} · ${item.readTime}</p>

                    </div>

                </article>

            </a>

        </div>
    `).join("");

}



    // ========================================
    // COPY ARTICLE LINK
    // ========================================

    const copyButton = document.getElementById("copyArticleLink");

    if (copyButton) {

        copyButton.addEventListener("click", async () => {

            try {
                await navigator.clipboard.writeText(
                    window.location.href
                );

                copyButton.innerHTML =
                    '<i class="bi bi-check2"></i>';

                copyButton.title = "Link copied!";

            } catch (error) {
                console.error("Unable to copy article link:", error);
                alert("Unable to copy the link. Please copy it from the address bar.");
            }

        });

    }
    // ========================================
// READING PROGRESS BAR
// ========================================

const progressBar = document.getElementById("readingProgress");

if (progressBar) {

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress =
            scrollHeight > 0
                ? (scrollTop / scrollHeight) * 100
                : 0;

        progressBar.style.width = `${progress}%`;

    });

}
// ========================================
// SHARE ARTICLE
// ========================================

const shareButton = document.getElementById("shareArticle");

if (shareButton) {

    shareButton.addEventListener("click", async () => {

        const shareData = {
            title: article.title,
            text: article.subtitle,
            url: window.location.href
        };

        if (navigator.share) {

            try {
                await navigator.share(shareData);
            } catch (error) {
                console.log("Sharing cancelled or failed:", error);
            }

        } else {

            try {
                await navigator.clipboard.writeText(window.location.href);

                alert("Article link copied! You can share it now.");

            } catch (error) {
                alert("Unable to share. Please copy the article URL manually.");
            }

        }

    });

}
// ========================================
// BOOKMARK ARTICLE
// ========================================

const bookmarkButton = document.getElementById("bookmarkArticle");

if (bookmarkButton) {

    // Get saved bookmarks from LocalStorage
    let bookmarks = JSON.parse(
        localStorage.getItem("storyspaceBookmarks")
    ) || [];

    // Check whether current article is bookmarked
    function updateBookmarkButton() {

    const isBookmarked = bookmarks.includes(articleId);

    if (isBookmarked) {

        bookmarkButton.innerHTML =
            '<i class="bi bi-bookmark-fill"></i>';

        bookmarkButton.title = "Remove Bookmark";

    } else {

        bookmarkButton.innerHTML =
            '<i class="bi bi-bookmark"></i>';

        bookmarkButton.title = "Bookmark Article";

    }
}

    updateBookmarkButton();

    // Add or remove bookmark
    bookmarkButton.addEventListener("click", () => {

        if (bookmarks.includes(articleId)) {

            bookmarks = bookmarks.filter(id => id !== articleId);

            // alert("Article removed from bookmarks!");

        } else {

            bookmarks.push(articleId);

            // alert("Article bookmarked successfully!");

        }

        // Save updated bookmarks
        localStorage.setItem(
            "storyspaceBookmarks",
            JSON.stringify(bookmarks)
        );

        updateBookmarkButton();

    });

}

});
