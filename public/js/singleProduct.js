const productHTML = `
    <div class="product">
        <div class="product-img">
        <img src=".${product.image}" alt="${product.name}">
        </div>
        <div class="product-bottom">
        <h4 class="pro-name">${product.name}</h4>
        <div class="product-information">
        <div class="product-rating">
            <span class="pro-rating-count">${product.productRatingCount}</span>
            <i class="fa-solid fa-star pro-rating-star"></i>
        </div>
        <div class="product-price">
            <span class="pro-price">$${product.price}</span>
        </div>
        </div>
        </div>
        <button class="add-to-cart-btn">Add To Cart <i class="fa-solid fa-shopping-bag"></i></button>
    </div>

`;
