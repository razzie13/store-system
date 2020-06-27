

// CREATE HEADERS FROM ITEM TYPES

let newCategoryArray = [];
for (let i = 0; i < foodProducts.length; i++)  {
    newCategoryArray.push(foodProducts[i].itemCategory);
}

let uniqueCategoryList = [...new Set(newCategoryArray)]
uniqueCategoryList.sort();

Object.keys(uniqueCategoryList).forEach(function(item) {
    //console.log(uniqueCategoryList[item]);

    let itemCategorySection = document.createElement('div');
    let h2 = document.createElement('h2');

    itemCategorySection.id = uniqueCategoryList[item];
    itemCategorySection.className = 'food-category-section';
    h2.innerText = uniqueCategoryList[item];
    
    itemCategorySection.appendChild(h2);
    document.getElementById('food-products').appendChild(itemCategorySection);


    for (let i = 0; i < foodProducts.length; i++)  {

        if (foodProducts[i].itemCategory == (uniqueCategoryList[item]))  {
        //console.log(foodProducts[i].itemBrand + ' ' + foodProducts[i].itemDescription + ' ' + foodProducts[i].itemType);
        //console.log(foodProducts[i].itemPrice);

        //let h5 = document.createElement('h5');
        //h5.innerText = foodProducts[i].itemBrand + ' ' + foodProducts[i].itemDescription + ' ' + foodProducts[i].itemType;
        //div.appendChild(h5);
        //

        //let foodItemMenu = document.getElementById('food-products');
        let foodItemCard = document.createElement('div');
        let foodItemName = document.createElement('h3');
        let foodItemPicture = document.createElement('img');
        let foodItemPrice = document.createElement('h4');
        let foodItemPromo = document.createElement('h4');

        let br = document.createElement('br');

        let addToCartButton = document.createElement('button')

        //------------------------------------------------------------------------------------------

        foodItemCard.id = 'food-item-' + i;
        foodItemCard.className = 'food-item-section'

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

        foodItemCard.appendChild(foodItemPicture);
        foodItemCard.appendChild(foodItemName);

        if (foodProducts[i].promo == false)  {
            foodItemCard.appendChild(foodItemPrice);

        } else  {
            foodItemCard.appendChild(foodItemPromo)
        }

        foodItemCard.appendChild(addToCartButton);
        //foodItemMenu.appendChild(foodItemCard);
        itemCategorySection.appendChild(foodItemCard);
        }
    }

    /*
    for (let i = 0; i < foodProducts.length; i++)  {
        if (foodProducts[i].itemCategory == (uniqueCategoryList[item]))  {
        console.log(foodProducts[i].itemBrand + ' ' + foodProducts[i].itemDescription + ' ' + foodProducts[i].itemType);
        console.log(foodProducts[i].itemPrice);

        let h5 = document.createElement('h5');
        h5.innerText = foodProducts[i].itemBrand + ' ' + foodProducts[i].itemDescription + ' ' + foodProducts[i].itemType;
        itemSection.appendChild(h5);
    }}
    */
});
