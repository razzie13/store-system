function viewCartContents()  {
    console.log('function viewCartContents');

    let shoppingCartWindow = document.createElement('div');
    let shoppingCartItems = document.createElement('div');

    let closeButton = document.createElement('button');

    let cartItemVoid = document.createElement('button')

    let cartItemCode = document.createElement('div');
    let cartItemCodeH3 = document.createElement('h3');

    let cartItemName = document.createElement('div');
    let cartItemNameH3 = document.createElement('h3');

    let cartItemPrice = document.createElement('div');
    let cartItemPriceH3 = document.createElement('h3');

    let cartItemQuantity = document.createElement('div');
    let cartItemQuantityH3 = document.createElement('h3');

    let cartItemTotal = document.createElement('div');
    let cartItemTotalH3 = document.createElement('h3');
    

    shoppingCartWindow.className = "shopping-cart-window";
    shoppingCartWindow.id = 'shopping-cart-window-items';
    
    for (let i = 0; i > shoppingCart.length; i++)  {

    // CREATE INDIVIDUAL CART ITEMS
    shoppingCartItems.id = 'cart-item-' + [i];
    shoppingCartItems.className = 'cart-line-item';

    cartItemCode.className = 'cart-item-code';
    cartItemName.className = 'cart-item-name';
    cartItemPrice.className = 'cart-item-price';
    cartItemQuantity.className = 'cart-item-quantity';
    //cartItemTotal.className = 'cart-item-total';

    // POPULATE INDIVIDUAL CART ITEM TEXT HEADERS
    cartItemCodeH3.innerText = shoppingCart[i].itemCode;
    cartItemNameH3.innerText = shoppingCart[i].itemName;
    cartItemPriceH3.innerText = shoppingCart[i].itemPrice;
    cartItemQuantityH3.innerText = shoppingCart[i].cartItemQuantity;
    //cartItemTotalH3.innerText = shoppingCart[i].itemCode;

    // ADD ITEM TEXT TO ITEM LINES
    cartItemCode.appendChild(cartItemCodeH3);
    cartItemName.appendChild(cartItemNameH3);
    cartItemPrice.appendChild(cartItemPriceH3);
    cartItemQuantity.appendChild(cartItemQuantityH3);
    //cartItemTotal.appendChild(cartItemTotalH3);

    // ADD CART ITEM NAMES TO CART ITEMS
    shoppingCartItems.appendChild(cartItemCode);
    shoppingCartItems.appendChild(cartItemName);
    shoppingCartItems.appendChild(cartItemPrice);
    shoppingCartItems.appendChild(cartItemQuantity);
    //shoppingCartItems.appendChild(cartItemTotal);

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