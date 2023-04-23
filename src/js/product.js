import { setLocalStorage } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";
import { clearLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";


// create product object using productdata.mjs
const dataSource = new ProductData("tents");

// add to cart button event handler, called on by event listener 
async function addToCartHandler(e) {
  //e refers to the event, click that was passed through then gets the target, in this case the add button
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// called by cart handler, calls on function set local storage from the utils.mjs
// this is where our indiivdual week1 assignmeant kicks in 
// it was originally resetting the cart each time, not only that 
// but local storage was not using an arry so the map function in cart.js did not work (sincee it was looking at an object)
//by 1 makeing a clear storage function we could get back to a nice clean slate 
// 2 geting the current state of the cart 
// and 3 adding a new product to that array 
// we were able to set local storrage as an up to date array of our products.
function addProductToCart(product) {
  //modification to add, rather then set.
  const cart = getLocalStorage("so-cart") || []; // retrieve current cart data or create a new empty array if it doesn't exist
  cart.push(product); // add new product to cart array
  setLocalStorage("so-cart", cart); // save updated cart array to local storage

  //clearLocalStorage(); // clear storage if needed if you start with any values that are not desired you will need to
}




// add listener to Add to Cart button
document
.getElementById("addToCart")
.addEventListener("click", addToCartHandler);


