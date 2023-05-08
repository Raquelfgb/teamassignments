//List the product cards on a given page based on datasource and location desired

import {renderListWithTemplate} from "./utils.mjs"


// ProductList.mjs
function productCardTemplate(product) {
        return `<li class="product-card">
        <a href="/product_pages/index.html?product=${product.Id}">
            <img src="${product.Image}" alt="Image of ${product.Name}">
            <h3 class="card__brand">${product.Brand.Name}</h3>
            <h2 class="card__name">${product.Name}</h2>
            <p class="product-card__price">$${product.FinalPrice}</p>
        </a>
        </li>`;
    }
    

  //example item 

// <li class="product-card">
// <a href="product_pages/index.html?product=880RR">
// <img
//     src="images/tents/marmot-ajax-tent-3-person-3-season-in-pale-pumpkin-terracotta~p~880rr_01~320.jpg"
//     alt="Marmot Ajax tent"
// />
// <h3 class="card__brand">Marmot</h3>
// <h2 class="card__name">Ajax Tent - 3-Person, 3-Season</h2>
// <p class="product-card__price">$199.99</p></a>
// </li>

export default class ProductListing{
    constructor(dataSource, listElement){
        this.dataSource = dataSource; //json file
        this.listElement = listElement; // location in html it will be added to
    }
    async init(){
        const list = await this.dataSource.getData();
        console.log(list);
        this.renderList(list);
        
    }
    
    renderList(list){
        renderListWithTemplate(productCardTemplate,this.listElement,list);
    }
}



// async function checkImage(url) {
//     try {
//       const img = new Image();
//       img.src = url;
//       await img.decode();
//       return true;
//     } catch (error) {
//       return false;
//     }
//   }


