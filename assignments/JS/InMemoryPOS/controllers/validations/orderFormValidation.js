$(document).ready(function() {
    // Populate select elements with data using AJAX or static values

    // Regular expressions for validation
    var regexOrderId = /^O\d{2}-\d{3}$/;
    var regexQty = /^[1-9]\d*$/;
    var regexCash = /^\d+(\.\d{1,2})?$/;
    var regexDiscount = /^\d+(\.\d{1,2})?$/;

    // Input fields
    var orderIdField = $('#txtOrderID');
    var qtyField = $('#txtQty');
    var cashField = $('#txtCash');
    var discountField = $('#txtDiscount');

    // Error messages
    var orderIdErrorMessage = $('#orderId-invalid-error');
    var qtyErrorMessage = $('#order-qty-empty-error');
    var cashErrorMessage = $('#cash-empty-error');

    // Hide error messages initially
    hideErrorMessages();

    function hideErrorMessages() {
        orderIdErrorMessage.hide();
        qtyErrorMessage.hide();
        cashErrorMessage.hide();
    }

    // Validate inputs
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

    $('#btnSubmitOrder').click(function(event) {
        event.preventDefault();

        // Validate inputs
        var isValidOrderId = validateInput(regexOrderId, orderIdField, orderIdErrorMessage);
        var isValidQty = validateInput(regexQty, qtyField, qtyErrorMessage);
        var isValidCash = validateInput(regexCash, cashField, cashErrorMessage);

        // Check if any field is empty
        if (
            orderIdField.val() === '' ||
            qtyField.val() === '' ||
            cashField.val() === '' ||
            !isValidOrderId ||
            !isValidQty ||
            !isValidCash
        ) {
            return;
        }
    });

    // Enable or disable Add Item button based on field completeness
    function enableAddItemButton() {
        var invoiceDetailsComplete = isInvoiceDetailsComplete();
        var itemSelectComplete = isItemSelectComplete();

        if (invoiceDetailsComplete && itemSelectComplete) {
            $('#btnAddToTable').prop('disabled', false);
        } else {
            $('#btnAddToTable').prop('disabled', true);
        }
    }

    // Check if Invoice Details section is complete
    function isInvoiceDetailsComplete() {
        var orderID = $('#txtOrderID').val();
        var date = $('#txtDate').val();
        var customerID = $('#selectCusID').val();
        var customerName = $('#orderCustomerName').val();
        var customerSalary = $('#orderCustomerSalary').val();
        var customerAddress = $('#orderCustomerAddress').val();

        return (orderID && date && customerID && customerName && customerSalary && customerAddress);
    }

    // Check if Item Select section is complete
    function isItemSelectComplete() {
        var itemCode = $('#selectItemCode').val();
        var itemDescription = $('#txtItemDescription').val();
        var itemPrice = $('#txtItemPrice').val();
        var qtyOnHand = $('#txtQTYOnHand').val();
        var orderQty = $('#txtQty').val();

        return (itemCode && itemDescription && itemPrice && qtyOnHand && orderQty);
    }

    // Call the enableAddItemButton function when any input changes
    $('input, select').on('input change', function() {
        enableAddItemButton();
    });
});
