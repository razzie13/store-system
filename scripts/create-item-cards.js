// CREATE HEADERS FROM ITEM TYPES

let newCategoryArray = [];
for (let i = 0; i < foodProducts.length; i++)  {
    newCategoryArray.push(foodProducts[i].itemCategory);
}

let uniqueCategoryList = [...new Set(newCategoryArray)]
uniqueCategoryList.sort();

// ---- BUILD DROPDOWN LIST TO QUICKLY BROWSE SECTIONS

//for (let i = 0; i < uniqueCategoryList; i++)  {
//    let anchor = document.createElement('a');
 //   anchor.textContent = (uniqueCategoryList[i]);

//    anchor.setAttribute('onclick', console.log(uniqueCategoryList[i]));                        
    
//    document.getElementById('category-dropdown').appendChild(anchor)                    
//}

// ---- END BUILD DROPDOWN LIST TO QUICKLY BROWSE SECTIONS

Object.keys(uniqueCategoryList).forEach(function(item) {
    //console.log(uniqueCategoryList[item])

    let itemCategorySection = document.createElement('div');
    let h2 = document.createElement('h2');
    let anchor = document.createElement('a');

    itemCategorySection.id = uniqueCategoryList[item];
    itemCategorySection.className = 'food-category-section';

    h2.innerText = uniqueCategoryList[item];

    anchor.href = "#" + uniqueCategoryList[item];
    
    itemCategorySection.appendChild(h2);
    itemCategorySection.appendChild(anchor);
    document.getElementById('food-products').appendChild(itemCategorySection);

    // POPULATE ITEM TYPES WITH ITEMS OF THAT TYPE

    for (let i = 0; i < foodProducts.length; i++)  {

        if (foodProducts[i].itemCategory == (uniqueCategoryList[item]))  {

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

        if (foodProducts[i].weighedItem == true)  {
            foodItemPrice.innerText = (foodProducts[i].itemPrice * 0.454).toFixed(2) + '/lb';
        }

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
        itemCategorySection.appendChild(foodItemCard);
        }
    }
});
