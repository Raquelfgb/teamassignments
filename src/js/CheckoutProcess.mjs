import { getLocalStorage } from "./utils.mjs";


// takes the items currently stored in the cart (localstorage) and returns them in a simplified form.
function packageItems(items) {
        
    // convert the list of products from localStorage to the simpler form required for the checkout process. Array.map would be perfect for this.
  
    }

export default class CheckoutProcess {
    constructor(key, outputSelector) {
      this.key = key;
      this.outputSelector = outputSelector; // class value of where we want to send our values
      this.list = [];
      this.itemTotal = 0;
      this.shipping = 0;
      this.tax = 0;
      this.orderTotal = 0;
    }
  
    init() {
      this.list = getLocalStorage(this.key);
      this.calculateItemSummary();
    }
    
  
    calculateItemSummary() {
      // calculate and display the total amount of the items in the cart, and the number of items.
      let cartItems = localStorage.getItem("so-cart");
      if (cartItems === null || typeof cartItems === "undefined") {
          document.querySelector("#itemcount").textContent = "0";
          // console.log("0");
    
      } else {
          let parsedCartItems = [JSON.parse(cartItems)];
          document.querySelector('#itemcount').textContent = parsedCartItems.length;
      } 
      
      
      this.calculateOrdertotal();
    }
  
    calculateOrdertotal() {
      // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total. Tax: Use 6% sales tax.
      // Shipping: Use $10 for the first item plus $2 for each additional item after that.

      this.shipping = 10 + (this.list.length - 1) * 2;
      this.tax = (this.itemTotal * 0.06).toFixed(2);
      this.orderTotal = (parseFloat(this.itemTotal) + parseFloat(this.tax) + parseFloat(this.shipping)).toFixed(2);
  
      // display the totals.
      this.displayOrderTotals();
    }
  
    displayOrderTotals() {
        // once the totals are all calculated display them in the order summary page
        const shipping = document.querySelector(this.outputSelector + " #shipping");
        const tax = document.querySelector(this.outputSelector + " #tax");
        const orderTotal = document.querySelector(this.outputSelector + " #orderTotal");
        
        console.log(this.shipping);

        shipping.innerHTML = "$" + this.shipping;
        tax.innerText = "$" + this.tax;
        orderTotal.innerText = "$" + this.orderTotal;
    }
  }