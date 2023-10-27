$(document).ready(function() {
    // Regular expressions
    var regexCusID = /^C\d{2}-\d{3}$/;
    var regexName = /^[A-Za-z .]{5,}$/;
    var regexAddress = /^[A-Za-z0-9 .,'-]+$/;
    var regexSalary = /^0\d{9}$/;

    // Input fields
    var customerIDField = $('#customerId');
    var customerNameField = $('#customerName');
    var customerAddressField = $('#customerAddress');
    var customerPhoneField = $('#customerPhone');

    // Error messages
    var invalidIdMessage = $('#invalidIdMessage');
    var invalidNameMessage = $('#invalidNameMessage');
    var invalidAddressMessage = $('#invalidAddressMessage');
    var invalidSalaryMessage = $('#invalidSalaryMessage');
    var emptyFieldMessage = $('.notification-empty');

    // Hide error messages initially
    customerFormHideErrorMessages();

    function customerFormHideErrorMessages() {
        invalidIdMessage.hide();
        invalidNameMessage.hide();
        invalidAddressMessage.hide();
        invalidSalaryMessage.hide();
        emptyFieldMessage.hide();
    }

    function validateInput(regex, field, errorMessage) {
        var isValid = regex.test(field.val());
        if (!isValid) {
            field.addClass('is-invalid');
            errorMessage.show();
        } else {
            field.removeClass('is-invalid');
            errorMessage.hide();
        }
        return isValid;
    }

    function enableSaveButton() {
        if (customerIDField.hasClass('is-invalid') ||
            customerNameField.hasClass('is-invalid') ||
            customerAddressField.hasClass('is-invalid') ||
            customerPhoneField.hasClass('is-invalid') ||
            customerIDField.val() === '' ||
            customerNameField.val() === '' ||
            customerAddressField.val() === '' ||
            customerPhoneField.val() === '') {
            $('#btnSaveCustomer').prop('disabled', true);
            $('#btnUpdateCustomer').prop('disabled', true);
            $('#btnDeleteCustomer').prop('disabled', true);
        } else {
            $('#btnSaveCustomer').prop('disabled', false);
            $('#btnUpdateCustomer').prop('disabled', false);
            $('#btnDeleteCustomer').prop('disabled', false);
        }
    }

    $('#btnSaveCustomer').click(function(event) {
        event.preventDefault();

        // Validate inputs
        var isValidCusID = validateInput(regexCusID, customerIDField, invalidIdMessage);
        var isValidName = validateInput(regexName, customerNameField, invalidNameMessage);
        var isValidAddress = validateInput(regexAddress, customerAddressField, invalidAddressMessage);
        var isValidPhone = validateInput(regexSalary, customerPhoneField, invalidSalaryMessage);

        // Check if any field is empty
        if (customerIDField.val() === '' || customerNameField.val() === '' || customerAddressField.val() === '' || customerPhoneField.val() === '') {
            emptyFieldMessage.show();
            return;
        } else {
            emptyFieldMessage.hide();
        }

        // Enable/Disable buttons based on input validation
        enableSaveButton();
    });

    customerIDField.on('keyup', function() {
        validateInput(regexCusID, customerIDField, invalidIdMessage);
        enableSaveButton();
    });

    customerNameField.on('keyup', function() {
        validateInput(regexName, customerNameField, invalidNameMessage);
        enableSaveButton();
    });

    customerAddressField.on('keyup', function() {
        validateInput(regexAddress, customerAddressField, invalidAddressMessage);
        enableSaveButton();
    });

    customerPhoneField.on('keyup', function() {
        validateInput(regexSalary, customerPhoneField, invalidSalaryMessage);
        enableSaveButton();
    });
});
