$(document).ready(function() {
    loadCustomerIds();

    function loadCustomerIds() {
        var selectCusID = $('#selectCusID'); // Select the <select> element by its ID

        selectCusID.empty();

        customers.forEach(function(customer) {
            selectCusID.append(`<option value="${customers.id}">${customers.id}</option>`);
        });
    }

    // ... Rest of your JavaScript code ...
});
