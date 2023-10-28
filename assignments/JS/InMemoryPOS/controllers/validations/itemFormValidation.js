$(document).ready(function() {
    var regexItemId = /^I\d{2}-\d{3}$/;
    var regexItemName = /^[A-Za-z .]{3,}$/;
    var regexItemQuantity = /^\d+$/;
    var regexItemPrice = /^\d+(\.\d{1,2})?$/;

    var itemIdField = $('#itemId');
    var itemNameField = $('#itemName');
    var itemQuantityField = $('#itemQuantity');
    var itemPriceField = $('#itemPrice');

    var invalidItemIdMessage = $('#invalidItemIdMessage');
    var invalidItemNameMessage = $('#invalidItemNameMessage');
    var invalidItemQuantityMessage = $('#invalidItemQuantityMessage');
    var invalidItemPriceMessage = $('#invalidItemPriceMessage');

    var emptyFieldMessage = $('.notification-empty');

    function itemFormHideErrorMessages() {
        invalidItemIdMessage.hide();
        invalidItemNameMessage.hide();
        invalidItemQuantityMessage.hide();
        invalidItemPriceMessage.hide();
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
        if (
            itemIdField.hasClass('is-invalid') ||
            itemNameField.hasClass('is-invalid') ||
            itemQuantityField.hasClass('is-invalid') ||
            itemPriceField.hasClass('is-invalid')
        ) {
            $('#btnSaveItem').prop('disabled', true);
            $('#btnUpdateItem').prop('disabled', true);
            $('#btnDeleteItem').prop('disabled', true);
        } else if (
            itemIdField.val() === '' ||
            itemNameField.val() === '' ||
            itemQuantityField.val() === '' ||
            itemPriceField.val() === ''
        ) {
            $('#btnSaveItem').prop('disabled', true);
            $('#btnUpdateItem').prop('disabled', true);
            $('#btnDeleteItem').prop('disabled', true);
            emptyFieldMessage.show();
        } else {
            $('#btnSaveItem').prop('disabled', false);
            $('#btnUpdateItem').prop('disabled', false);
            $('#btnDeleteItem').prop('disabled', false);
            emptyFieldMessage.hide();
        }
    }

    $('#btnSaveItem').click(function(event) {
        event.preventDefault();

        var isValidItemId = validateInput(regexItemId, itemIdField, invalidItemIdMessage);
        var isValidItemName = validateInput(regexItemName, itemNameField, invalidItemNameMessage);
        var isValidItemQuantity = validateInput(regexItemQuantity, itemQuantityField, invalidItemQuantityMessage);
        var isValidItemPrice = validateInput(regexItemPrice, itemPriceField, invalidItemPriceMessage);

        if (itemIdField.val() === '' || itemNameField.val() === '' || itemQuantityField.val() === '' || itemPriceField.val() === '') {
            emptyFieldMessage.show();
            return;
        } else {
            emptyFieldMessage.hide();
        }

        enableSaveButton();
    });

    itemIdField.on('keyup', function() {
        validateInput(regexItemId, itemIdField, invalidItemIdMessage);
        enableSaveButton();
    });

    itemNameField.on('keyup', function() {
        validateInput(regexItemName, itemNameField, invalidItemNameMessage);
        enableSaveButton();
    });

    itemQuantityField.on('keyup', function() {
        validateInput(regexItemQuantity, itemQuantityField, invalidItemQuantityMessage);
        enableSaveButton();
    });

    itemPriceField.on('keyup', function() {
        validateInput(regexItemPrice, itemPriceField, invalidItemPriceMessage);
        enableSaveButton();
    });
});
