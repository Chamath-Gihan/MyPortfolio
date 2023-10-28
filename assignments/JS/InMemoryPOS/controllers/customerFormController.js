let customers = []; // Array to store customer objects

function saveCustomer() {
    if (validateInput(regexCusID, customerIDField, invalidIdMessage) &&
        validateInput(regexName, customerNameField, invalidNameMessage) &&
        validateInput(regexAddress, customerAddressField, invalidAddressMessage) &&
        validateInput(regexSalary, customerPhoneField, invalidSalaryMessage)) {

        let newCustomer = {
            id: customerIDField.val(),
            name: customerNameField.val(),
            address: customerAddressField.val(),
            salary: customerPhoneField.val()
        };

        customers.push(newCustomer); // Add new customer to the array
        updateTable();
        clearFields();
    }
}

function updateTable() {
    // Clear existing table rows
    $('tbody').empty();

    // Add customers to the table
    customers.forEach(function(customer) {
        $('tbody').append(`<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`);
    });

    // Add click event to table rows to populate fields for editing
    $('tbody tr').click(function() {
        let index = $(this).index();
        populateFields(index);
    });
}

function populateFields(index) {
    let customer = customers[index];
    customerIDField.val(customer.id);
    customerNameField.val(customer.name);
    customerAddressField.val(customer.address);
    customerPhoneField.val(customer.salary);
}

function clearFields() {
    customerIDField.val('');
    customerNameField.val('');
    customerAddressField.val('');
    customerPhoneField.val('');
}

function updateCustomer() {
    let index = customers.findIndex(customer => customer.id === customerIDField.val());
    if (index !== -1) {
        customers[index] = {
            id: customerIDField.val(),
            name: customerNameField.val(),
            address: customerAddressField.val(),
            salary: customerPhoneField.val()
        };
        updateTable();
        clearFields();
    }
}

function deleteCustomer() {
    let index = customers.findIndex(customer => customer.id === customerIDField.val());
    if (index !== -1) {
        customers.splice(index, 1);
        updateTable();
        clearFields();
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
    let searchQuery = $('input.form-control').val();
    let filteredCustomers = customers.filter(customer => customer.id.includes(searchQuery) || customer.name.includes(searchQuery) || customer.address.includes(searchQuery) || customer.salary.includes(searchQuery));
    customers = filteredCustomers;
    updateTable();
});
