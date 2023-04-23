import { setLocalStorage } from './utils.mjs';
import { getLocalStorage } from './utils.mjs';
//import { clearLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';


// create product object using productdata.mjs
const dataSource = new ProductData('tents');

// add to cart button event handler, called on by event listener 
async function addToCartHandler(e) {
  //e refers to the event, click that was passed through then gets the target, in this case the add button
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}


function addProductToCart(product) {
  //modification to add, rather then set.
  const cart = getLocalStorage('so-cart') || []; // retrieve current cart data or create a new empty array if it doesn't exist
  cart.push(product); // add new product to cart array
  setLocalStorage('so-cart', cart); // save updated cart array to local storage

  //clearLocalStorage(); 
}


// add listener to Add to Cart button
document
.getElementById('addToCart')
.addEventListener('click', addToCartHandler);