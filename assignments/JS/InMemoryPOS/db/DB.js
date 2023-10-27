var customerDB = [
    {id: "C00-001", name: "Sachin Thamalsha", address: "Matara", salary: 100000},
    {id: "C00-002", name: "Ranjith Perera", address: "Panadura", salary: 200000},
    {id: "C00-003", name: "Kamal Bandu", address: "Galle", salary: 50000},
    {id: "C00-004", name: "Kavindu Perera", address: "Panadura", salary: 300000}
];

var itemDB = [
    {code: "I00-001", itemName: "Lux", qtyOnHand: 100, unitPrice: 145.00},
    {code: "I00-002", itemName: "Sunlight", qtyOnHand: 150, unitPrice: 345.00},
    {code: "I00-003", itemName: "Lifebuoy", qtyOnHand: 400, unitPrice: 245.00},
    {code: "I00-004", itemName: "Keerisamba", qtyOnHand: 50, unitPrice: 500.00}
];

var orderDB = [
    {
        orderID: "O00-001",
        date: "2023/02/05",
        customer: customerDB[0],
        cart: [{item: itemDB[0], qty: 2}, {item: itemDB[1], qty: 1}],
        discount: 10,
        total: 1000
    },
    {
        orderID: "O00-002",
        date: "2023/02/07",
        customer: customerDB[1],
        cart: [{item: itemDB[2], qty: 1}, {item: itemDB[1], qty: 1}, {item: itemDB[0], qty: 1}],
        discount: 10,
        total: 1000
    }
];