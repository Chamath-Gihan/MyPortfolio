$(document).ready(function() {
    var regexItemId = /^I\d{2}-\d{3}$/;
    var regexItemName = /^[A-Za-z0-9 .,'-]+$/;
    var regexItemQuantity = /^[1-9]\d*$/;
    var regexItemPrice = /^\d+(\.\d{1,2})?$/;

    var invalidItemIdMessage = $('#invalidItemIdMessage');
    var invalidItemNameMessage = $('#invalidItemNameMessage');
    var invalidItemQuantityMessage = $('#invalidItemQuantityMessage');
    var invalidItemPriceMessage = $('#invalidItemPriceMessage');
    var emptyFieldItemMessage = $('.notification-empty-item');

    // Hide error messages initially
    itemFormHideErrorMessages();

    function itemFormHideErrorMessages() {
        invalidItemIdMessage.hide();
        invalidItemNameMessage.hide();
        invalidItemQuantityMessage.hide();
        invalidItemPriceMessage.hide();
        emptyFieldItemMessage.hide();
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

    $('#btnSaveItem').click(function(event) {
        event.preventDefault();

        // Validate inputs
        var isValidItemId = validateInput(regexItemId, $('#itemId'), invalidItemIdMessage);
        var isValidItemName = validateInput(regexItemName, $('#itemName'), invalidItemNameMessage);
        var isValidItemQuantity = validateInput(regexItemQuantity, $('#itemQuantity'), invalidItemQuantityMessage);
        var isValidItemPrice = validateInput(regexItemPrice, $('#itemPrice'), invalidItemPriceMessage);

        // Check if any field is empty
        if ($('#itemId').val() === '' || $('#itemName').val() === '' || $('#itemQuantity').val() === '' || $('#itemPrice').val() === '') {
            emptyFieldItemMessage.show();
            $('#btnSaveItem').prop('disabled', true);
            return;
        } else {
            emptyFieldItemMessage.hide();
        }

        // Enable/Disable buttons based on input validation
        enableSaveButton(isValidItemId, isValidItemName, isValidItemQuantity, isValidItemPrice);
    });

    $('#itemId').on('keyup', function() {
        validateInput(regexItemId, $('#itemId'), invalidItemIdMessage);
        enableSaveButton();
    });

    $('#itemName').on('keyup', function() {
        validateInput(regexItemName, $('#itemName'), invalidItemNameMessage);
        enableSaveButton();
    });

    $('#itemQuantity').on('keyup', function() {
        validateInput(regexItemQuantity, $('#itemQuantity'), invalidItemQuantityMessage);
        enableSaveButton();
    });

    $('#itemPrice').on('keyup', function() {
        validateInput(regexItemPrice, $('#itemPrice'), invalidItemPriceMessage);
        enableSaveButton();
    });

    function enableSaveButton() {
        var isValidInputs = validateInput(regexItemId, $('#itemId'), invalidItemIdMessage) &&
            validateInput(regexItemName, $('#itemName'), invalidItemNameMessage) &&
            validateInput(regexItemQuantity, $('#itemQuantity'), invalidItemQuantityMessage) &&
            validateInput(regexItemPrice, $('#itemPrice'), invalidItemPriceMessage);

        if (isValidInputs) {
            $('#btnSaveItem').prop('disabled', false);
            $('#btnDeleteItem').prop('disabled', false);
            $('#btnUpdateItem').prop('disabled', false);
        } else {
            $('#btnSaveItem').prop('disabled', true);
            $('#btnDeleteItem').prop('disabled', true);
            $('#btnUpdateItem').prop('disabled', true);
        }
    }
});
