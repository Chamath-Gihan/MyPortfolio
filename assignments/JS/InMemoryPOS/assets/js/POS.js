let main = document.querySelector(".main-01");
let customer = document.querySelector(".main-02");
let item = document.querySelector(".main-03");
let order = document.querySelector(".main-04");


let lnkHome = document.querySelector("#lnkHome");
let lnkCustomer = document.querySelector("#lnkCustomer");
let lnkCustomer2 = document.querySelector("#customer-form-btn");
let lnkItem = document.querySelector("#lnkItem");
let lnkItem2 = document.querySelector("#item-form-button");
let lnkOrder = document.querySelector("#lnkOrders");
let lnkOrder2 = document.querySelector("#order-form-button");

main.style.display = 'flex';
customer.style.display = 'none';
item.style.display = 'none';
order.style.display = 'none';

lnkHome.addEventListener("click", function () {
    main.style.display = 'flex';
    customer.style.display = 'none';
    item.style.display = 'none';
    order.style.display = 'none';
})

lnkCustomer.addEventListener("click", function () {
    main.style.display = 'none';
    customer.style.display = 'flex';
    item.style.display = 'none';
    order.style.display = 'none';
})

lnkCustomer2.addEventListener("click", function () {
    main.style.display = 'none';
    customer.style.display = 'flex';
    item.style.display = 'none';
    order.style.display = 'none';
})

lnkItem.addEventListener("click", function () {
    main.style.display = 'none';
    customer.style.display = 'none';
    item.style.display = 'flex';
    order.style.display = 'none';
})

lnkItem2.addEventListener("click", function () {
    main.style.display = 'none';
    customer.style.display = 'none';
    item.style.display = 'flex';
    order.style.display = 'none';
})


lnkOrder.addEventListener("click", function () {
    main.style.display = 'none';
    customer.style.display = 'none';
    item.style.display = 'none';
    order.style.display = 'block';
})

lnkOrder2.addEventListener("click", function () {
    main.style.display = 'none';
    customer.style.display = 'none';
    item.style.display = 'none';
    order.style.display = 'block';
})