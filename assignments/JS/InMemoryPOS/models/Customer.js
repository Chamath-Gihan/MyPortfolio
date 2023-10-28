class Customer {
    constructor(id, name, address, phone) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}
var customers = [];
var originalCustomers = []; // Store a copy of the original customers for filtering