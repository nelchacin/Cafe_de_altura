const selectorButtons = document.querySelectorAll('.btn');
const ShoppingCardItemsContainer = document.querySelector('.shoppingCard')
//desplegable
const buttonQuestions = document.querySelectorAll(".linkQuestions")
const textQuestion = document.querySelectorAll(".pQuestion")
const arrowQuestion = document.querySelectorAll(".arrowQuestion")


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
    updateShoppingCardTotal()

}

function updateShoppingCardTotal() {
    let total = 0
}
//desplegable
buttonQuestions.forEach((buttonQuestion, key) => {
    buttonQuestion.addEventListener("click", () => {
        event.preventDefault()
        textQuestion[key].classList.toggle("open_close")
    })
})

//validacion formulario
let form = document.querySelector('#theForm')
let nameInput = document.querySelector('#NameForm')
let emailInput = document.querySelector('#emailForm')
let movilInput = document.querySelector('#PhoneForm')
let textAreaInput = document.querySelector('#textArea1')
let checkBoxInput = document.querySelector('#checkBoxForm')
let button = document.querySelector('#enviarForm')




const formValidationName = (e) => {
    e.preventDefault()
    if (!nameInput.value) {
        alert('Introduce tu nombre')
        nameInput.focus()
        return
    }
    if (!emailInput.value.includes('@')) {
        alert('Introduce un correo con @')
        emailInput.focus()
        return
    }
}

form.addEventListener('submit', formValidationName)























