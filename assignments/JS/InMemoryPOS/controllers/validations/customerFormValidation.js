$(document).ready(function() {
    $("#btnSaveCustomer").click(function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get form values
        var customerId = $("#customerId").val();
        var customerName = $("#customerName").val();
        var customerAddress = $("#customerAddress").val();
        var customerSalary = parseFloat($("#customerSalary").val()) || 0;

        // Check if any field is empty
        if (customerId === "" || customerName === "" || customerAddress === "" || customerSalary === 0) {
            // Apply red border effect to empty fields for 3 seconds
            $("input").each(function() {
                if ($(this).val() === "") {
                    $(this).css("border", "2px solid red");
                }
            });

            // Reset border and show notification after 3 seconds
            setTimeout(function() {
                $("input").css("border", "");
                showNotification("All fields are required");
            }, 3000);
        } else {
            // Fields are not empty, no action performed
        }
    });

    function showNotification(message) {
        // Display notification
        var notification = $("<div class='notification'>" + message + "</div>").appendTo("body");

        // Automatically close the notification after 5 seconds
        setTimeout(function() {
            notification.fadeOut(300, function() {
                $(this).remove();
            });
        }, 5000);
    }
});
