const API = "https://dummyjson.com/products/category/smartphones";
    
async function getResponse() {
    const response = await fetch(API)
    const content = await response.json()
    // content = content.splice(0, 5)
    const list = document.querySelector('.products')

    let key;

    const products = content.products

    for (key in products) {

        list.innerHTML += `
        
            <div class="product" id="${products[key].id}">
                <img class="product-img" src="${products[key].thumbnail}">
                <div class="product-info">
                    <p class="name-product">${products[key].title}</p>
                    <div class="buy-delete">
                        <p class="price-product">$${products[key].price}</p>
                            <img data-product class="delete-img" src="./img/buy.png">
                    </div>
                </div>
            </div>
        
        `
    }

    
}

getResponse()

const basketProducts = document.querySelector('.basket-products');

window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-product')) {

        const product = event.target.closest('.product');

        const basketProduct = `

        <div class="basket-product">
          <div class="basket-product-info">
            <div class="basket-product-img">
              <img class="basket-img" src="${products[key].thumbnail}">
            </div>
            <div>
              <p class="basket-product-name">${products[key].title}</p>
              <p class="basket-product-price">$${products[key].price}</p>
            </div>
          </div>
            <div>
            <img class="basket-product-delete" src="./img/крестик.png">
            </div>
        </div>
        `;
        basketProducts.insertAdjacentHTML('beforeend', basketProducts);
    }
})