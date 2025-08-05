
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