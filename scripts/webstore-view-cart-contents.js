function viewCartContents()  {
    console.log('function viewCartContents');
    
    for (let i = 0; i < shoppingCart.length; i++)  {
      
    let shoppingCartWindow = document.createElement('div');
    let shoppingCartItems = document.createElement('h3');
    let closeButton = document.createElement('button');

    shoppingCartItems.innerText = shoppingCart;
    shoppingCartWindow.appendChild(shoppingCartItems)
    shoppingCartWindow.className = "shopping-cart-window";
    shoppingCartWindow.id = 'shopping-cart-window-items';

    closeButton.innerText = "close X";
    closeButton.className = 'close-button';
    closeButton.setAttribute('onclick', 'hideCartContents()')

    shoppingCartWindow.appendChild(closeButton);
    document.getElementById('shopping-cart-window').appendChild(shoppingCartWindow);
    }
    
}