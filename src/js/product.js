
import { setLocalStorage, getLocalStorage, clearLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs"; // gives us the json file we need
import ProductDetails from "./ProductDetails.mjs"; // gathers the data from the json file

const productId = getParam('product');
const dataSource = new ProductData('tents');

//get the product id from the url
const productId = getParam("product");
console.log(productId);


const product = new ProductDetails(productId,dataSource);
product.init();


// add to cart has been moved to productdetails.mjs


