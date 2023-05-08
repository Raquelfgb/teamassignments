import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";


loadHeaderFooter();
const category = getParam("category");
// console.log(category);

const dataSource = new ProductData(category);
const element = document.getElementById("productList");

const productList = new ProductListing(dataSource, element);

productList.init();

