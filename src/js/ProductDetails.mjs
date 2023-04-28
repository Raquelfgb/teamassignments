export default class ProductDetails
{
    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }
    
    addProductToCart(product) {
        //modification to add, rather then set.
        const cart = getLocalStorage("so-cart") || []; // retrieve current cart data or create a new empty array if it doesn't exist
        cart.push(product); // add new product to cart array
        setLocalStorage("so-cart", cart); // save updated cart array to local storage
    }
}