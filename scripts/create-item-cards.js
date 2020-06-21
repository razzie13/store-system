for (let i = 0; i < foodProducts.length; i++)  {

    let foodItemMenu = document.getElementById('food-products');
    let foodItem = document.createElement('div');
    let foodItemName = document.createElement('h3');
    let foodItemPicture = document.createElement('img');
    let foodItemPrice = document.createElement('h4');
    let foodItemPromo = document.createElement('h4');

    let addToCartButton = document.createElement('button')

    //------------------------------------------------------------------------------------------
    
    foodItem.id = 'food-item-' + i;
    foodItem.className = 'food-item-section'

    foodItemPicture.src = foodProducts[i].itemImage;
    foodItemPicture.width = 200;

    foodItemName.innerText = foodProducts[i].itemBrand + ' ' +  foodProducts[i].itemDescription + ' ' + foodProducts[i].itemType;
    foodItemPrice.innerText = foodProducts[i].itemPrice;

    foodItemPromo.innerHTML = 'sale ' + foodProducts[i].itemPromo + '<span>  reg ' + foodProducts[i].itemPrice + '</span>';
    foodItemPromo.className = 'food-item-promo'

    addToCartButton.innerText = 'add to cart';
    //addToCartButton.setAttribute('onclick', 'addToCart(foodProducts[i])'); -- doesn't work
    //addToCartButton.setAttribute('onclick', 'addToCart()'); -- works but doesn't pass an argument
    addToCartButton.setAttribute('onclick', 'addToCart(' + foodProducts[i] + ')');
    //addToCartButton.setAttribute('onclick', 'addToCart(' + foodProducts[i].itemCode + ')'); -- works but doesn't pass all info. Works fine to print an order sheet!
    
    foodItem.appendChild(foodItemPicture);
    foodItem.appendChild(foodItemName);
    
    if (foodProducts[i].promo == false)  {
        foodItem.appendChild(foodItemPrice);

    } else  {
        foodItem.appendChild(foodItemPromo)
    }

    foodItem.appendChild(addToCartButton);

    document.getElementById('food-products').appendChild(foodItem);
}