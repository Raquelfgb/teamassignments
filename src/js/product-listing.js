import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const dataSource = new ProductData("tents");
const element = document.getElementById("productList");

const productList = new ProductListing("Tents", dataSource, element);

productList.init();
loadHeaderFooter();
