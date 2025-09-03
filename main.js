// Show login success toast when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Login toast
    const loginToast = document.getElementById('loginToast');
    if (loginToast) {
        const toast = new bootstrap.Toast(loginToast, {
            animation: true,
            autohide: true,
            delay: 1000 // 3 seconds
        });
        toast.show();
    }

    // Sidebar toggle
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('main');
    
    if (navToggle && sidebar) {
        navToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            if (sidebar.classList.contains('collapsed')) {
                mainContent.style.marginLeft = '60px';
            } else {
                mainContent.style.marginLeft = '250px';
            }
        });
    }
});