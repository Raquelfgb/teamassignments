// this is the javascript that is called by product listings index it will get the data and generate the list 
import ExternalServices from "./ExternalServices.mjs";
import ProductListing from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";


loadHeaderFooter();
const category = getParam("category");
// console.log(category);

const dataSource = new ExternalServices();
const element = document.getElementById("productList");

const productList = new ProductListing(category, dataSource, element);

productList.init();

