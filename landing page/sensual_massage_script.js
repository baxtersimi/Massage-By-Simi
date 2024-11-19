
// Smooth scroll to the top of the page when the page loads
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// Simple email validation for the contact form (if added in future)
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
