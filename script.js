// Updated script.ts
// Get the toggle button and the skills section
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Event listener to toggle the visibility of the skills section
toggleButton.addEventListener('click', function () {
    // Get the current computed display style of the section
    var currentDisplay = window.getComputedStyle(skillsSection).display;
    // Toggle between 'block' and 'none'
    if (currentDisplay === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
let currentTestimonial = 1;
let testimonialCount = 3;
let testimonialInterval = 5000; // Time between slides (5000 ms = 5 seconds)

// Function to show the specific testimonial
function showTestimonial(index) {
    // Get all testimonials and dots
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    // Hide all testimonials and remove active class from dots
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        dots[i].classList.remove('active');
    });

    // Show the selected testimonial and set the corresponding dot as active
    testimonials[index - 1].classList.add('active');
    dots[index - 1].classList.add('active');
}

// Automatically change testimonials after the set interval
function autoSlideTestimonials() {
    currentTestimonial++;

    if (currentTestimonial > testimonialCount) {
        currentTestimonial = 1;
    }

    showTestimonial(currentTestimonial);
}

// Initial display of the first testimonial
showTestimonial(currentTestimonial);

// Set the interval to auto-slide
setInterval(autoSlideTestimonials, testimonialInterval);




document.addEventListener("DOMContentLoaded", function() {
    // Get modal element
    var modal = document.getElementById("templateModal");

    // Get button element
    var btn = document.getElementById("useTemplateBtn");

    // Get close button
    var closeBtn = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        modal.style.display = "block"; // Show the modal
    });

    // When the user clicks on the close button (x), close the modal
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
