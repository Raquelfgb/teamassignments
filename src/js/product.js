import {
    setLocalStorage,
    getLocalStorage,
    clearLocalStorage,
    getParam,
  } from "./utils.mjs";
  import ProductData from "./ProductData.mjs"; // gives us the json file we need
  import ProductDetails from "./ProductDetails.mjs"; // gathers the data from the json file
  import ProductDetails from './ProductDetails.mjs';
  
  const productId = getParam('product');
  const dataSource = new ProductData('tents');
  console.log(productId);
  
  
  const product = new ProductDetails(productId,dataSource);
  product.init();
  
  const dataSource = new ProductData("tents");
  
  // get the Id of our product
  const productId = getParams("product");
  
  // record it to the console
  // console.log(dataSource);
  // console.log(productId);
  console.log(dataSource.findProductById(productId));
  
  const product = new ProductDetails(productId, dataSource);
  // product.init();
  
  // add to cart button event handler, called on by event listener
  async function addToCartHandler(e) {
    //e refers to the event, click that was passed through then gets the target, in this case the add button
    const product = await dataSource.findProductById(e.target.dataset.id);
    addProductToCart(product);
  }
  

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