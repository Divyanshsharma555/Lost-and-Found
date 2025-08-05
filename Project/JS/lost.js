
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




window.addEventListener('DOMContentLoaded', function() {
    // SEARCH FUNCTIONALITY
    const searchInput = document.getElementById('search');
    const table = document.getElementById('itemsTable');
    searchInput.addEventListener('input', function() {
        const val = searchInput.value.trim().toLowerCase();
        Array.from(table.getElementsByClassName('box')).forEach(box => {
            const title = box.querySelector('h2').textContent.toLowerCase();
            if (title.includes(val) || val === '') {
                box.parentElement.style.display = '';
            } else {
                box.parentElement.style.display = 'none';
            }
        });
    });

    // LOAD REPORTED ITEMS FROM localStorage
    const reported = JSON.parse(localStorage.getItem('reportedLostItems') || '[]');
    if (reported.length) {
        let lastRow = table.rows[table.rows.length-1];
        reported.forEach((item, idx) => {
            // Add a new cell for each reported item
            if (lastRow.cells.length >= 3) {
                lastRow = table.insertRow();
            }
            const td = lastRow.insertCell();
            td.innerHTML = `
                <div class="box">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                </div>
            `;
        });
    }
});
