import ProductData from "./ProductData.mjs";
<<<<<<< HEAD
import ProductListing from "./ProductList.mjs";

var product = new ProductData("tents");
const element = document.querySelector(".product-list");
var listing = new ProductListing("Tents", product, element);

listing.init();
=======
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData('tents');
const element = document.getElementById("productList");

const productList = new ProductList("Tents", dataSource, element);

productList.init();



>>>>>>> 92fe3e3baf84f2c4127b6c576070b059e384fd86
