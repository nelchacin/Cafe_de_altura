const selectorButtons = document.querySelectorAll('.btn');
const ShoppingCardItemsContainer = document.querySelector('.shoppingCard')

selectorButtons.forEach((addToCardButton) => {
    addToCardButton.addEventListener('click', addToCardClicked)
});

function addToCardClicked(event) {
    const button = event.target;
    const item = button.closest('.card-body');

    const tittleProduct = item.querySelector('.card-title').textContent;
    const priceProduct = item.querySelector('.price').textContent * 1;
    const imgProduct = item.querySelector('.imgSec4').src;

    addItemtoShoppingCard(tittleProduct, priceProduct, imgProduct)
}

function addItemtoShoppingCard(tittleProduct, priceProduct, imgProduct) {
    const shoppingCardRow = document.createElement('div');
    const shoppingCardContent = `
    <div class='productShopping'>
            <img src="${imgProduct}" alt="">
            <p>"${tittleProduct}"</p>
            <p>"${priceProduct}"</p>
            <p>"Cantidad"</p>
            <button>x</button>
            <p>"Total"</p>
    </div>
  `;
    shoppingCardRow.innerHTML = shoppingCardContent
    ShoppingCardItemsContainer.append(shoppingCardRow)

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







