import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import getParam from "./utils.mjs";

// for tents
const category = getParam("category");
const dataSource = new ProductData();

const element = document.querySelector("newProductList");
const productList = new ProductListing(category, dataSource, element);
productList.init();