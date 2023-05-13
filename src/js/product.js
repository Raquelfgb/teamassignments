import {
  getParam,
  loadHeaderFooter,
} from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs"; // gives us the json file we need
import ProductDetails from "./ProductDetails.mjs"; // gathers the data from the json file

loadHeaderFooter();

const productId = getParam("product");
const dataSource = new ExternalServices("tents"); // this will need to be changed eventually, it cannot stay hardcoded
console.log(productId);

const product = new ProductDetails(productId, dataSource);
product.init();

// add to cart has been moved to productdetails.mjs
