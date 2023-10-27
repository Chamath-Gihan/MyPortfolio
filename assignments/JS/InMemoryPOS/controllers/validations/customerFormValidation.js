document.getElementById("btnSaveCustomer").addEventListener("click", function(event) {
    var customerId = document.getElementById("customerId").value;
    var customerName = document.getElementById("customerName").value;
    var customerAddress = document.getElementById("customerAddress").value;
    var customerPhone = document.getElementById("customerPhone").value;

    // Basic form validation
    if (customerId === "" || customerName === "" || customerAddress === "" || customerPhone === "") {
        alert("All fields are required");
        event.preventDefault();
    } else if (!isValidPhoneNumber(customerPhone)) {
        alert("Invalid phone number");
        event.preventDefault();
    }
});

function isValidPhoneNumber(phoneNumber) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}