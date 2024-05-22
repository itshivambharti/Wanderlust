document.addEventListener('DOMContentLoaded', function() {
    var runLink = document.getElementById('run-link');
    var contactusSection = document.getElementById('contact us');

    // Event listener for the dance link
    runLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        contactusSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the update section smoothly
    });
});