// import ProductData from "./ProductData.mjs";
// import ProductList from "./ProductList.mjs";
// import ProductData from "./ProductData.mjs";
// import ProductList from "./ProductList.mjs";
import { doc } from "prettier";
import { loadHeaderFooter, getItemCount } from "./utils.mjs";

await loadHeaderFooter();
// getItemCount();
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', getItemCount())
} else {
    
    getItemCount();
}


// const dataSource = new ProductData('tents');
// const element = document.getElementById("productList");

// const productList = new ProductList("Tents", dataSource, element);

// productList.init();
