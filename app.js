function productPrice(product, price, increaseing) {
    const phoneInput = document.getElementById(product + '_input');
    let phoneInputValue = phoneInput.value;

    if (increaseing == true) {
        phoneInputValue = parseInt(phoneInputValue) + 1;
    } else if (phoneInputValue > 0) {
        phoneInputValue = parseInt(phoneInputValue) - 1;
    }
    phoneInput.value = phoneInputValue;

    //add total price
    const productTotal = document.getElementById(product + '_price');
    productTotal.innerText = phoneInputValue * price;

    //update subTotal
    totalPrice();

};

function getInputValue(product) {
    const productInput = document.getElementById(product + '_input');
    const productValue = parseInt(productInput.value);
    return productValue;

}

function totalPrice() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('product') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const payableTotal = subTotal + tax;

    //subtotal
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = payableTotal;

};

//phone increase 
document.getElementById('phone_increase').addEventListener('click', function () {
    productPrice('phone', 1219, true);
});

//Phone decrease

document.getElementById('phone_decrease').addEventListener('click', function () {
    productPrice('phone', 1219, false);
});

//phone case increase
document.getElementById('increase_btn').addEventListener('click', function () {
    productPrice('product', 59, true);
});

//phone case decrease
document.getElementById('decrease_btn').addEventListener('click', function () {
    productPrice('product', 59, false);
});