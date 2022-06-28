import {products} from "./data-modules/productos.js";


function searchProduct() {
  const searchField = document.getElementById('search-field');
  const searchTerm = searchField.value.trim();

  const searchResult = products.filter(prod => {
    return prod.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  displayProducts(searchResult);
}

const searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click',searchProduct);



function getTotalProducts() {
  const total = document.getElementById('total-products');
  total.innerHTML = products.length;
}

// take products data and add it into the html of each card
function displayProducts(productData) {
 // const IMG_PATH = 'https://cdn.pixabay.com/photo/'; // configuration of the project
  const container = document.getElementById('products-container');
  let html = '';

  productData.forEach(prod => {
    html +=
      `<div class="card" style="width: 18rem;">
              <img src="${prod.getImage()}"
                  class="card-img-top" alt="${prod.getDescription()}">
              <div class="card-body">
                  <h5 class="card-title">${prod.getName()}</h5>
                  <p class="card-text">
                      ${prod.getPrice()}</p>
                  <a href="#" class="btn btn-primary">View Details</a>
              </div>
          </div>`;
  });

  container.innerHTML = html;
  getTotalProducts();
}

displayProducts(products);