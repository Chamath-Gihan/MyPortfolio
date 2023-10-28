var itemIdField1 = $('#itemId');
var itemNameField1 = $('#itemName');
var itemQuantityField1 = $('#itemQuantity');
var itemPriceField1 = $('#itemPrice');

function isItemIdExist(itemId) {
    // Check if the itemId already exists in the items array
    return items.some(item => item.id === itemId);
}

function saveItem() {
    let itemId = itemIdField1.val();

    if (isItemIdExist(itemId)) {
        showNotification('Error', 'Item with ID ' + itemId + ' already exists!');
    } else {
        let newItem = {
            id: itemId,
            name: itemNameField1.val(),
            quantity: parseInt(itemQuantityField1.val()),
            price: parseFloat(itemPriceField1.val())
        };

        items.push(newItem);
        updateItemTable();
        clearItemFields();
        resetItemFormFields();
    }
}

function updateItem() {
    let index = items.findIndex(item => item.id === itemIdField1.val());
    if (index !== -1) {
        items[index] = {
            id: itemIdField1.val(),
            name: itemNameField1.val(),
            quantity: parseInt(itemQuantityField1.val()),
            price: parseFloat(itemPriceField1.val())
        };
        updateItemTable();
        clearItemFields();
        resetItemFormFields();
    } else {
        showNotification('Error', 'Item with ID ' + itemIdField1.val() + ' not found for update!');
    }
}

function deleteItem() {
    let index = items.findIndex(item => item.id === itemIdField1.val());
    if (index !== -1) {
        items.splice(index, 1);
        updateItemTable();
        clearItemFields();
        resetItemFormFields();
    } else {

        showNotification('Error', 'Item with ID ' + itemIdField1.val() + ' not found for deletion!');
    }
}

function updateItemTable() {
    // Clear existing table rows and add items to the table
    var itemTableBody = $('table tbody');
    itemTableBody.empty();

    items.forEach(function(item) {
        itemTableBody.append(`<tr><td>${item.id}</td><td>${item.name}</td><td>${item.quantity}</td><td>${item.price.toFixed(2)}</td></tr>`);
    });

    // Add click event to table rows to populate fields for editing
    itemTableBody.find('tr').click(function() {
        let index = $(this).index();
        populateItemFields(index);
    });
}

function populateItemFields(index) {
    let item = items[index];
    itemIdField1.val(item.id);
    itemNameField1.val(item.name);
    itemQuantityField1.val(item.quantity);
    itemPriceField1.val(item.price.toFixed(2));
}


function clearItemFields() {
    itemIdField1.val('');
    itemNameField1.val('');
    itemQuantityField1.val('');
    itemPriceField1.val('');
}

function showNotification(title, message) {
    if (Notification.permission === 'granted') {
        new Notification(title, {
            body: message
        });
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(title, {
                    body: message
                });
            }
        });
    }
}

$('#btnSaveItem').click(function(event) {
    event.preventDefault();
    saveItem();
});

$('#btnUpdateItem').click(function(event) {
    event.preventDefault();
    updateItem();
});

$('#btnDeleteItem').click(function(event) {
    event.preventDefault();
    deleteItem();
});

// Add input event listener to the search input field if needed
$('#button-search-item').click(function() {
    let searchQuery = $('input.form-control').val().toLowerCase();
    items = originalItems.filter(item =>
        item.id.includes(searchQuery) || item.name.toLowerCase().includes(searchQuery) ||
        item.quantity.toString().includes(searchQuery) || item.price.toString().includes(searchQuery)
    );
    updateItemTable();
});
