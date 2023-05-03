import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

var product = new ProductData("tents");
const element = document.querySelector(".product-list");
var listing = new ProductListing("Tents", product, element);

listing.init();
