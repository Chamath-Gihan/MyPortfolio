var customerIDField1 = $('#customerId');
var customerNameField1 = $('#customerName');
var customerAddressField1 = $('#customerAddress');
var customerPhoneField1 = $('#customerPhone');

function isCustomerIDExist(customerID) {
    // Check if the customerID already exists in the customers array
    return customers.some(customer => customer.id === customerID);
}

function saveCustomer() {
    let customerID = customerIDField1.val();

    if (isCustomerIDExist(customerID)) {
        // Customer ID already exists, show browser notification
        if (Notification.permission === 'granted') {
            new Notification('Error', {
                body: 'Customer with ID ' + customerID + ' already exists!',
                icon: 'path/to/icon.png' // Provide the path to your notification icon
            });
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification('Error', {
                        body: 'Customer with ID ' + customerID + ' already exists!',
                        icon: '../assets/images/me.jpg'
                    });
                }
            });
        }
    } else {
        let newCustomer = {
            id: customerID,
            name: customerNameField1.val(),
            address: customerAddressField1.val(),
            salary: customerPhoneField1.val()
        };

        customers.push(newCustomer);
        updateTable();
        clearFields();
        resetFormFields();

        console.log('Fields cleared and error messages hidden.'); // Add this line for debugging
    }
}

function updateTable() {
    $('#customer-details-body').empty();

    customers.forEach(function(customer) {
        $('#customer-details-body').append(`<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`);
    });

    $('#customer-details-body tr').click(function() {
        let index = $(this).index();
        populateFields(index);
    });
}


function populateFields(index) {
    let customer = customers[index];
    customerIDField1.val(customer.id);
    customerNameField1.val(customer.name);
    customerAddressField1.val(customer.address);
    customerPhoneField1.val(customer.salary);
}

function clearFields() {
    customerIDField1.val('');
    customerNameField1.val('');
    customerAddressField1.val('');
    customerPhoneField1.val('');
}

function updateCustomer() {
    let index = customers.findIndex(customer => customer.id === customerIDField1.val());
    if (index !== -1) {
        customers[index] = {
            id: customerIDField1.val(),
            name: customerNameField1.val(),
            address: customerAddressField1.val(),
            salary: customerPhoneField1.val()
        };
        updateTable();
        clearFields();
        resetFormFields();
    }
}

function deleteCustomer() {
    let index = customers.findIndex(customer => customer.id === customerIDField1.val());
    if (index !== -1) {
        customers.splice(index, 1);
        updateTable();
        clearFields();
        resetFormFields();
    }
}

$('#btnSaveCustomer').click(function(event) {
    event.preventDefault();
    saveCustomer();
});

$('#btnUpdateCustomer').click(function(event) {
    event.preventDefault();
    updateCustomer();
});

$('#btnDeleteCustomer').click(function(event) {
    event.preventDefault();
    deleteCustomer();
});

$('#button-search-customer').click(function() {
    let searchQuery = $('input.form-control').val().toLowerCase();
    customers = originalCustomers.filter(customer =>
        customer.id.includes(searchQuery) || customer.name.toLowerCase().includes(searchQuery) ||
        customer.address.toLowerCase().includes(searchQuery) || customer.salary.toLowerCase().includes(searchQuery)
    );
    updateTable();
});

// Add input event listener to the search input field
$('#search-customer-input').on('input', function() {
    let searchQuery = $(this).val().toLowerCase();
    let filteredCustomers = customers.filter(customer => customer.id.toLowerCase().includes(searchQuery));
    updateSuggestionList(filteredCustomers);
});

function updateSuggestionList(filteredCustomers) {
    let suggestionList = $('.suggestion-list');
    suggestionList.empty(); // Clear existing suggestions

    // Populate the suggestion list with filtered customer IDs
    filteredCustomers.forEach(function(customer) {
        suggestionList.append(`<li class="suggestion-item">${customer.id}</li>`);
    });

    // Add click event to suggestion items to populate customer details in the table
    $('.suggestion-item').click(function() {
        let selectedCustomerID = $(this).text();
        let selectedCustomer = customers.find(customer => customer.id === selectedCustomerID);

        // Populate customer details in the table
        let customerDetailsBody = $('#customer-details-body');
        customerDetailsBody.empty();
        if (selectedCustomer) {
            customerDetailsBody.append(`<tr>
                <td>${selectedCustomer.id}</td>
                <td>${selectedCustomer.name}</td>
                <td>${selectedCustomer.address}</td>
                <td>${selectedCustomer.salary}</td>
            </tr>`);
        } else {
            // Handle case when selected customer ID is not found
            customerDetailsBody.append(`<tr><td colspan="4">No matching customer found</td></tr>`);
        }

        suggestionList.empty(); // Clear the suggestion list after selecting a suggestion
    });
}

function resetFormFields() {
    customerIDField1.val('');
    customerNameField1.val('');
    customerAddressField1.val('');
    customerPhoneField1.val('');

    // Remove error classes and hide error messages
    customerIDField1.removeClass('is-invalid');
    customerNameField1.removeClass('is-invalid');
    customerAddressField1.removeClass('is-invalid');
    customerPhoneField1.removeClass('is-invalid');

    invalidIdMessage.hide();
    invalidNameMessage.hide();
    invalidAddressMessage.hide();
    invalidSalaryMessage.hide();
    emptyFieldMessage.hide();
}

