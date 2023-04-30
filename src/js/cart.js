import { getLocalStorage, clearLocalStorage } from "./utils.mjs";

function renderCartContents() {

  const cartItems = getLocalStorage("so-cart");
  console.log(cartItems);
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  //I got it working with just one item here
  // const htmlItem = cartItemTemplate(cartItem);
  // document.querySelector(".product-list").innerHTML = htmlItem;
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
//clear the contents of the cart 
// Add event listener to the "Clear Cart" button
document.getElementById('clear-cart').addEventListener('click', function() {
  // Call the clear() function to clear the contents of the cart
  clear();
});

function clear() {
  //call the clear local storage
  clearLocalStorage();
  // reload new content
  location.reload();
}

