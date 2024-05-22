document.addEventListener('DOMContentLoaded', function() {
    var journeyLink = document.getElementById('journey-link');
    var epicSection = document.getElementById('epic');

    // Event listener for the Explore link
    journeyLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        epicSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the Updates section smoothly
    });
});
