function showNotification() {
    // Display the notification box
    const notification = document.getElementById("notification");
    notification.style.display = "block";

    // Hide the notification box after 5 seconds
    setTimeout(() => {
        notification.style.display = "none";
    }, 5000);
}