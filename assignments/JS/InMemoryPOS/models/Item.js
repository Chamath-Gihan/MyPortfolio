class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    static createItem(id, name, quantity, price) {
        return new Item(id, name, quantity, price);
    }

    static updateItemDetails(item, newName, newQuantity, newPrice) {
        item.name = newName;
        item.quantity = newQuantity;
        item.price = newPrice;
    }
}

var items = [];
var originalItems = []; // Store a copy of the original items for filtering
