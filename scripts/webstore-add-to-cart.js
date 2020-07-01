function addToCart(addedItem)  {
    console.log('function addToCart(itemCode)');
    //localStorage.removeItem('local-food-store');
    shoppingCart.push(addedItem);
    //localStorage.setItem('local-food-store', shoppingCart);
    console.log(shoppingCart);
    document.getElementById('shopping-cart').innerText = 'Items in your cart: ' + shoppingCart.length;
}