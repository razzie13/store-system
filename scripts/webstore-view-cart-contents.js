function viewCartContents()  {
    console.log('function viewCartContents');

    let shoppingCartWindow = document.createElement('div');
    let shoppingCartItems = document.createElement('div');
    let shoppingCartItemNames = document.createElement('h3');
    let closeButton = document.createElement('button');

    shoppingCartWindow.className = "shopping-cart-window";
    shoppingCartWindow.id = 'shopping-cart-window-items';
    
    for (let i = 0; i > shoppingCart.length; i++)  {

    // CREATE INDIVIDUAL CART ITEMS
    shoppingCartItems.id = 'cart-item-' + [i];

    // CREATE INDIVIDUAL CART ITEM NAMES
    shoppingCartItemNames.innerText = shoppingCart[i];

    // ADD CART ITEM NAMES TO CART ITEMS
    shoppingCartItems.appendChild(shoppingCartItemNames);

    // ADD ITEMS TO SHOPPING CART MODAL
    shoppingCartWindow.appendChild(shoppingCartItems);
    }

    

    closeButton.innerText = "close X";
    closeButton.className = 'close-button';
    closeButton.setAttribute('onclick', 'hideCartContents()')
    shoppingCartWindow.appendChild(closeButton);

    //shoppingCartWindow.appendChild(shoppingCartItems);
    document.getElementById('shopping-cart-window').appendChild(shoppingCartWindow);
}