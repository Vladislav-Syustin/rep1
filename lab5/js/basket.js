// const basketProducts = document.querySelector('.basket-products');

// window.addEventListener('click', function (event) {

//     if (event.target.hasAttribute('data-product')) {

//         const product = event.target.closest('.product');

//         const basketProduct = `

//         <div class="basket-product">
//           <div class="basket-product-info">
//             <div class="basket-product-img">
//               <img class="basket-img" src="${products[key].thumbnail}">
//             </div>
//             <div>
//               <p class="basket-product-name">${products[key].title}</p>
//               <p class="basket-product-price">$${products[key].price}</p>
//             </div>
//           </div>
//             <div>
//             <img class="basket-product-delete" src="./img/крестик.png">
//             </div>
//         </div>
//         `;
//         basketProducts.insertAdjacentHTML('beforeend', basketProducts);
//     }
// })