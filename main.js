document.addEventListener('DOMContentLoaded', function() {
    // Login toast
    const loginToast = document.getElementById('loginToast');
    if (loginToast) {
        const toast = new bootstrap.Toast(loginToast, {
            animation: true,
            autohide: true,
            delay: 1000 // 1 second
        });
        toast.show();
    }

    // Notifications Panel
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationsPanel = document.getElementById('notificationsPanel');
    const closeNotifications = document.getElementById('closeNotifications');

    if (notificationBtn && notificationsPanel && closeNotifications) {
        notificationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            notificationsPanel.classList.add('show');
        });

        closeNotifications.addEventListener('click', function() {
            notificationsPanel.classList.remove('show');
        });

        // Close panel when clicking outside
        document.addEventListener('click', function(e) {
            if (!notificationsPanel.contains(e.target) && 
                !notificationBtn.contains(e.target) && 
                notificationsPanel.classList.contains('show')) {
                notificationsPanel.classList.remove('show');
            }
        });
    }
});