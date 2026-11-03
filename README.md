StorySpace
Every Story Has a Place.

StorySpace is a responsive, frontend-only blog website where visitors
can explore sample articles, bookmark stories, and write and manage
their own stories in the browser.
Features
- Responsive homepage and Explore page
- Sample article details with related-story links
- Article search, category filtering, and sorting
- Bookmark articles and manage them in Saved Stories
- Register and log in with a browser-based demo account
- Write stories with a word counter and cover-image preview
- Preview stories before saving or publishing
- Save drafts, edit drafts, publish stories, and manage them in My
  Stories
- About and Contact pages
Built With
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- Browser LocalStorage and SessionStorage
Project Structure
StorySpace/
├── assets/
│   ├── images/
│   └── icons/
│       └── favicon.svg
├── css/
├── js/
├── pages/
├── index.html
└── README.md
The css, js, and pages folders contain the website stylesheets,
JavaScript files, and additional HTML pages.
Run Locally
1. Download or clone this repository.
2. Open the StorySpace folder in your code editor.
3. Open index.html in a browser, or use your editor's local
   development server.
4. Explore the pages using the navigation menu.
No backend server or database is required for this frontend demo.
Demo Data and Important Limitations
StorySpace is a frontend portfolio project. It does not currently use a
backend, database, or real multi-user account system.
- Accounts and passwords are stored in browser LocalStorage for
  demonstration only. Passwords are not securely hashed.
- Login checks are client-side and are not suitable for protecting
  sensitive information.
- Drafts, published stories, and bookmarks are stored in the current
  browser. They are not shared with other visitors and may be lost if
  browser storage is cleared.
- Publishing a story saves it in the browser; it does not make it
  publicly available to all visitors or automatically add it to the
  sample Explore articles.
- The Contact form validates the entered information in the browser.
  It does not send an email or store a message on a server.
Use only test information with this demo.
Deployment
This project can be hosted as a static website using GitHub Pages.
Because the site uses browser storage, each visitor's saved data remains
local to their own browser.
Project Purpose
StorySpace was created as a portfolio project to practise responsive web
design, HTML page structure, CSS styling, JavaScript DOM manipulation,
browser storage, and client-side interactions.
License
Add a license if you intend to distribute or reuse this project under
specific terms.