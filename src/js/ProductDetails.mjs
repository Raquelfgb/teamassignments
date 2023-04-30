import { setLocalStorage, getLocalStorage, clearLocalStorage } from "./utils.mjs";

// create a function that will add the product to our new index page
function productTemplate(product){
    return `
    <section class="product-detail">
      <h3>${product.Brand.Name}</h3>
      <h2 class="divider">${product.NameWithoutBrand}</h2>
      <img
        class="divider"
        src="${product.Image}"
        alt="${product.NameWithoutBrand}"
      />
      <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
      <p class="product__color">${product.Colors[0].ColorName}</p>
      <p class="product__description">${product.DescriptionHtmlSimple}</p>
      <div class="product-detail__add">
        <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
      </div>
    </section>
  `;
}

export default class ProductDetails {
    constructor(productID, dataSource) {
    this.productID = productID;
    this.dataSource = dataSource;
    this.product = null;
  }

  addToCart(){
  const cart = getLocalStorage("so-cart") || []; // retrieve current cart data or create a new empty array if it doesn't exist
  cart.push(this.product); // add new product to cart array
  setLocalStorage("so-cart", cart); // save updated cart array to local storage
  //clearLocalStorage(); // clear storage if needed if you start with any values that are not desired you will need to
  }
  async init(){
    this.product = await this.dataSource.findProductById(this.productID);
    console.log(this.product);

    // create the html for the page
    const productHtml = productTemplate(this.product);
    document.getElementById("productDetails").innerHTML = productHtml;

    document.getElementById("addToCart")
    .addEventListener("click", () => this.addToCart());

  }
}