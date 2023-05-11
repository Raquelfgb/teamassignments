// this is the javascript that is called by product listings index it will get the data and generate the list 
import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import getParam from "./utils.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";


loadHeaderFooter();
const category = getParam("category");
// console.log(category);

const dataSource = new ProductData();
const element = document.getElementById("productList");

const productList = new ProductListing(category, dataSource, element);

productList.init();

