
(function() {
    // Don't run on login page
    if (location.pathname.includes('lost and found2.html')) return;

    // Protect all nav links and buttons
    function checkLogin(e) {
        if (!localStorage.getItem('isLoggedIn')) {
            e.preventDefault();
            alert('Please login first!');
            window.location.href = 'lost and found2.html';
        }
    }
    // Nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', checkLogin);
    });
    // All buttons with links
    document.querySelectorAll('a.btn, a.cta-button').forEach(link => {
        link.addEventListener('click', checkLogin);
    });
    // All form submit buttons (optional, for extra protection)
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!localStorage.getItem('isLoggedIn')) {
                e.preventDefault();
                alert('Please login first!');
                window.location.href = 'lost and found2.html';
            }
        });
    });
})();



document.getElementById('registerForm').addEventListener('submit', function(e) {
    // Save reported item to localStorage
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    let reported = JSON.parse(localStorage.getItem('reportedLostItems') || '[]');
    reported.push({ name, description });
    localStorage.setItem('reportedLostItems', JSON.stringify(reported));
    // Allow form to submit (redirect to feedback.html)
});
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    // Save reported item to localStorage
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    let reported = JSON.parse(localStorage.getItem('reportedLostItems') || '[]');
    reported.push({ name, description });
    localStorage.setItem('reportedLostItems', JSON.stringify(reported));
    // Redirect to feedback page
    window.location.href = 'feedback.html';
});