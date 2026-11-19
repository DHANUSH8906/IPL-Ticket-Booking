
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

    // Activity 5: Book button interaction

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


    // Activity 5: Booking form submission

    // Find the booking form
    let bookingForm = document.getElementById("ticketBookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            // Prevent the page from refreshing
            event.preventDefault();

            showToast("Your booking details have been submitted!");

        });

    }


    // Activity 5: Smooth scrolling to booking form

    let bookingSection = document.getElementById("ticket-form");

    if (bookingSection && window.location.hash === "#ticket-form") {

        setTimeout(function () {
            bookingSection.scrollIntoView({
                behavior: "smooth"
            });
        }, 100);

    }


    // Activity 7: Live Booking Summary

    // Select the form controls
    let matchSelect = document.getElementById("match");
    let standSelect = document.getElementById("stand");
    let quantityInput = document.getElementById("quantity");

    // Select the Booking Summary Card
    let summaryCard = document.querySelector(".summary");

    // Run this code only if these elements exist on the page
    if (matchSelect && standSelect && quantityInput && summaryCard) {

        // Store ticket prices for each match and stand
        let ticketPrices = {
            "RCB vs CSK": {
                "General": 800,
                "Premium": 1500,
                "VIP": 3000
            },

            "MI vs KKR": {
                "General": 900,
                "Premium": 1800,
                "VIP": 3500
            },

            "CSK vs MI": {
                "General": 700,
                "Premium": 1400,
                "VIP": 2800
            },

            "KKR vs RCB": {
                "General": 800,
                "Premium": 1600,
                "VIP": 3200
            }
        };


        // Function to update the Booking Summary
        function updateSummary(showMessage = true) {

            // Read the selected values
            let selectedMatch = matchSelect.value;
            let selectedStand = standSelect.value;
            let quantity = Number(quantityInput.value) || 1;

            // Get the ticket price
            let price = ticketPrices[selectedMatch][selectedStand];

            // Calculate the total amount
            let total = price * quantity;

            // Update the Booking Summary Card
            summaryCard.querySelector("#summaryMatch").innerText =
                "Match: " + selectedMatch;

            summaryCard.querySelector("#summaryStand").innerText =
                "Stand: " + selectedStand;

            summaryCard.querySelector("#summaryPrice").innerText =
                "Ticket Price: Rs. " + price;

            summaryCard.querySelector("#summaryQuantity").innerText =
                "Quantity: " + quantity;

            summaryCard.querySelector("#summaryTotal").innerText =
                "Total Amount: Rs. " + total;

            // Show a toast notification
            if (showMessage) {
                showToast("Booking summary updated!");
            }
        }


        // Update summary when match is changed
        matchSelect.addEventListener("change", updateSummary);

        // Update summary when stand is changed
        standSelect.addEventListener("change", updateSummary);

        // Update summary when ticket quantity is changed
        quantityInput.addEventListener("change", updateSummary);

        // Display the initial summary without a notification
        updateSummary(false);

    }

    // Activity 8: Filter matches by team
    let teamFilter = document.getElementById("teamFilter");
    let matchCards = document.querySelectorAll(".match-card");

    if (teamFilter) {
        teamFilter.addEventListener("change", function () {
            let selectedTeam = teamFilter.value;

            matchCards.forEach(function (card) {
                let teams = card.getAttribute("data-teams");

                if (selectedTeam === "all" || teams.includes(selectedTeam)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });

            showToast("Match list filtered!");
        });
    }

    // Activity 8: Switch between Grid and List view
    let matchContainer = document.getElementById("matchContainer");
    let gridView = document.getElementById("gridView");
    let listView = document.getElementById("listView");

    if (matchContainer && gridView && listView) {
        gridView.addEventListener("click", function () {
            matchContainer.classList.remove("list-view");
            showToast("Grid view enabled!");
        });

        listView.addEventListener("click", function () {
            matchContainer.classList.add("list-view");
            showToast("List view enabled!");
        });
    }

    // Activity 8: Hamburger menu
    let menuToggle = document.getElementById("menuToggle");
    let navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // Close menu after clicking a navigation link
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }

});
