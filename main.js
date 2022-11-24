const selectorButtons = document.querySelectorAll('.btn');
const ShoppingCardItemsContainer = document.querySelector('.shoppingCard')



selectorButtons.forEach((addToCardButton) => {
    addToCardButton.addEventListener('click', addToCardClicked)
});

function addToCardClicked(event) {
    event.preventDefault()
    const button = event.target;
    const item = button.closest('.card-body');

    const tittleProduct = item.querySelector('.card-title').textContent;
    const priceProduct = item.querySelector('.price').textContent * 1;
    const imgProduct = item.querySelector('.imgSec4').src;

    addItemtoShoppingCard(tittleProduct, priceProduct.toFixed(2), imgProduct)
}

function addItemtoShoppingCard(tittleProduct, priceProduct, imgProduct) {
    const shoppingCardRow = document.createElement('div')
    shoppingCardRow.classList.add("itemInTheCard")

    const shoppingCardContent = `
    <div class="row shoppingCartItem">
    <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${imgProduct} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${tittleProduct}</h6>
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice">${priceProduct}€</p>
        </div>
    </div>
    <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div>`;
    ;
    shoppingCardRow.innerHTML = shoppingCardContent
    ShoppingCardItemsContainer.appendChild(shoppingCardRow)
    console.log(ShoppingCardItemsContainer);
    updateShoppingCardTotal()

}

function updateShoppingCardTotal() {
    let total = 0
}









// const bagIconButton = document.querySelector("#bagIcon")
// const selectorButtons = document.querySelectorAll(".btn")
// const cafeCostaRica = document.querySelector("#cafeCostaRica")
// const cafeLosNaranjos = document.querySelector("#cafeLosNaranjos")
// const cafeLaosAmanecer = document.querySelector("#cafeLaosAmanecer")
// const cafeYrgacheff = document.querySelector("#cafeYrgacheff")
// const nameValues = document.querySelectorAll(".card-title")
// const priceValues = document.querySelectorAll(".card-text")
//------opcion 1--------//

// selectorButtons.forEach(addToCardButton => {
//     addToCardButton.addEventListener("click", () => console.log("click"))
// })


//opcion 2

// const allProducts = document.querySelector(".productCardWrapper")


// //funtions

// loadEventListenrs()
// function loadEventListenrs() {
//     allProducts.addEventListener(`click`, addProduct)
// }

// function addProduct(e) {
//     e.preventDefault()
//     if (e.target.classList.contains("addProduct")) {
//         const button = e.target;
//         const item = button.closest(".card-body")
//         const tittleProduct = item.querySelector(".card-title").textContent;
//         const priceProduct = item.querySelector(".price").textContent * 1;
//         // const imgProduct = item.querySelector("img").src;
//         // console.log(imgProduct);

//         addItemToBag(tittleProduct, priceProduct)
//     }
//     function addItemToBag(tittleProduct, priceProduct) {
//         console.log(tittleProduct, priceProduct);

//     }
// }
// // let shoppinBag = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : []







