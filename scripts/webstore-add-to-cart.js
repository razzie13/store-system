function addToCart(addedItem)  {
    console.log('function addToCart(itemCode)');
    shoppingCart.push(addedItem);
    console.log(shoppingCart);
    document.getElementById('shopping-cart').innerText = 'Items in your cart: ' + shoppingCart.length;
}