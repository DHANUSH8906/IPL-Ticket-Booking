
// Function to display a toast notification
function showToast(message) {

    // Create a new notification element
    let toast = document.createElement("div");

    // Add a CSS class to the notification
    toast.className = "toast";

    // Set the message
    toast.innerText = message;

    // Display the notification on the page
    document.body.appendChild(toast);

    // Remove the notification after 3 seconds
    setTimeout(function () {
        toast.remove();
    }, 3000);
}


// Wait until the HTML page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // Find all Book buttons
    let bookButtons = document.querySelectorAll(".book-now");

    // Add a click event to every Book button
    bookButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            // Prevent immediate navigation
            event.preventDefault();

            // Display a notification
            showToast("Opening ticket booking form...");

            // Open the booking page after a short delay
            setTimeout(function () {
                window.location.href = button.href;
            }, 700);

        });

    });


    // Find the booking form
    let bookingForm = document.getElementById("ticketBookingForm");

    // Show a message when a valid form is submitted
    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            // Prevent the page from refreshing
            event.preventDefault();

            showToast("Your booking details have been submitted!");

        });

    }


    // Smoothly scroll to the booking form
    let bookingSection = document.getElementById("ticket-form");

    if (bookingSection && window.location.hash === "#ticket-form") {

        setTimeout(function () {
            bookingSection.scrollIntoView({
                behavior: "smooth"
            });
        }, 100);

    }

});
