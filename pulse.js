document.addEventListener('DOMContentLoaded', function() {
    var touristerLink = document.getElementById('tourister-link');
    var AboutWanderlustSection = document.getElementById('About Wanderlust');

    // Event listener for the Explore link
    touristerLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        AboutWanderlustSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the Updates section smoothly
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var portLink = document.getElementById('port-link');
    var AboutWanderlustSection = document.getElementById('About Wanderlust');

    // Event listener for the Explore link
    portLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        AboutWanderlustSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the Updates section smoothly
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var timelineLink = document.getElementById('timeline-link');
    var AboutWanderlustSection = document.getElementById('About Wanderlust');

    // Event listener for the Explore link
    timelineLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        AboutWanderlustSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the Updates section smoothly
    });
});

