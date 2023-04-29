import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

const dataSource = new ProductData("tents");
const productList = new ProductListing("tents", dataSource, "")
productList.init();
console.log("success")