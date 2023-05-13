import { loadHeaderFooter, setLocalStorage } from './utils.mjs';
import ShoppingCart from './ShoppingCart.mjs';

loadHeaderFooter();

const cart = new ShoppingCart('so-cart', '.product-list');
cart.renderCartContents();

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function emptyCart() {
    console.log('empty so-cart');
    setLocalStorage('so-cart', {});
  }

function ready() {
    document.getElementById('clear-cart').addEventListener('click', () => emptyCart());
}

