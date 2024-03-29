//generates the proper json data for a product category
const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ExternalServices {
  constructor(catagory) {
    // this.catagory = catagory;
    // this.path = `../json/${this.category}.json`;
  }
  async getData(category) {
    console.log(category);
    console.log("geting info from " + baseURL + `/products/search/${category}`);
    const response = await fetch(baseURL + `products/search/${category}`); // testing  removed / for netlify
    const data = await convertToJson(response);
    return data.Result;
  }
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`); // removed slash for netlify
    const data = await convertToJson(response);
    return data.Result;
  }
}
