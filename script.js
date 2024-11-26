// document.addEventListener("DOMContentLoaded", () => {
//     // GSAP animations
//     gsap.from("nav", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
//     gsap.from(".hero-content h1", { duration: 1.5, x: -100, opacity: 0, delay: 0.5 });
//     gsap.from(".hero-content p", { duration: 1.5, x: 100, opacity: 0, delay: 0.8 });
//     gsap.from(".button", { duration: 1, scale: 0, delay: 1.2 });

//     // Smooth Scroll
//     const links = document.querySelectorAll("nav a, .button");
//     links.forEach(link => {
//         link.addEventListener("click", e => {
//             e.preventDefault();
//             const targetId = link.getAttribute("href").substring(1);
//             const targetElement = document.getElementById(targetId);
//             window.scrollTo({
//                 top: targetElement.offsetTop - 50,
//                 behavior: "smooth"
//             });
//         });
//     });
// });

// // Smooth Scroll for Hire Me Button
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start',
//         });
//     });
// });

// Optional: JavaScript to handle showing the thank you message after form submission (if no page refresh)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // You could optionally use fetch here to send form data to a backend instead of a direct POST form submission
    var form = document.getElementById("contactForm");
    var formData = new FormData(form);

    fetch("contact.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Show the thank-you message after submission
        document.getElementById("contactForm").style.display = "none";  // Hide the form
        document.getElementById("thankYouMessage").style.display = "block";  // Show the thank you message
    })
    .catch(error => {
        console.log("Error:", error);
        alert("There was an issue sending your message. Please try again.");
    });
});

