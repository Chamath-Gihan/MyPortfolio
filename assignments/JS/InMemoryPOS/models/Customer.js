class Customer {
    constructor(id, name, address, phone) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    static createCustomer(id, name, address, phone) {
        return new Customer(id, name, address, phone);
    }

    static updateCustomerDetails(customer, newName, newAddress, newPhone) {
        customer.name = newName;
        customer.address = newAddress;
        customer.phone = newPhone;
    }
}
let customers = [];