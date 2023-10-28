class Order {
    constructor(orderId, date, customer, items, total, cash, discount, balance) {
        this.orderId = orderId;
        this.date = date;
        this.customer = customer; // Customer object
        this.items = items; // Array of Item objects
        this.total = total;
        this.cash = cash;
        this.discount = discount;
        this.balance = balance;
    }
}