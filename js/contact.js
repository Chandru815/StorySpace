
// ========================================
// STORYSPACE - CONTACT FORM
// ========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        const response = document.getElementById("contactResponse");

        if (!name || !email || !subject || !message) {

            response.textContent = "Please fill in all fields.";
            response.style.color = "red";

            return;
        }

        response.textContent = "Thank you! Your message has been validated successfully.";
        response.style.color = "green";

        contactForm.reset();

    });

}
