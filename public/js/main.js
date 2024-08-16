const container = document.querySelector(".container");
const featuredProductsSection = document.querySelector(".featured-products");
const bigDeals = document.querySelector(".big-deals");
const electricDevicesSection = document.querySelector(".electric-devices");
const cardsSection = document.querySelector(".cards-section");
const newsLetter = document.querySelector(".news-letter");

const productsContainer = document.querySelector(".products-container");
const featuredProductsContainer = document.querySelector(".featured-products-container");
const electricDevicesProductsContainer = document.querySelector(".electric-devices-products-container");


// Nav Bar Toggle
document.getElementById("nav-btn").addEventListener("click", ()=>{
    const links = document.querySelector(".links");

    if(links.classList.contains("active")){
        links.classList.remove("active");
        links.classList.add("toggle");
    } else{
        links.classList.remove("toggle");
        links.classList.add("active");
    }
});

let products = [
    {
        image: "/images/Apple airpods2.webp",
        name: "Apple Airpods",
        productRatingCount: 78,
        price: 48,
    },

    {
        image: "/images/blue Air jordan.jpg",
        name: "Blue Air Jordan",
        productRatingCount: 86,
        price: 40,
    },

    {
        image: "/images/chromebook laptop2.webp",
        name: "Chromebook Laptop 2023",
        productRatingCount: 43,
        price: 120,
    },

    {
        image: "/images/Premium Photo _ Next generation game controller isolated_010456.jpeg",
        name: "Custom PS5 Controller",
        productRatingCount: 37,
        price: 38,
    },

    {
        image: "/images/diamond chain3.jpg",
        name: "Jewellery - Diamond Chain",
        productRatingCount: 43,
        price: 360,
    },
    
    {
        image: "/images/Playstation 5_010454.jpeg",
        name: "Playstation 5",
        productRatingCount: 73,
        price: 210,
    },

    {
        image: "/images/dining chairs.webp",
        name: "Medium Size Dining Chairs",
        productRatingCount: 40,
        price: 50,
    },

    {
        image: "/images/microwave.jpg",
        name: "Mini Microwave",
        productRatingCount: 87,
        price: 150,
    },

    {
        image: "/images/Playstation 5_010454.jpeg",
        name: "Playstation 5",
        productRatingCount: 73,
        price: 210,
    },

    {
        image: "/images/windows laptop.webp",
        name: "Windows 11 HP Laptop 1TB",
        productRatingCount: 86,
        price: 250,
    },

    {
        image: "/images/Black airpods2.webp",
        name: "Black Samsung Airpods",
        productRatingCount: 53,
        price: 42,
    },

    {
        image: "/images/Samsung Galaxy S23 Ultra - Price, Features & Reviews _ AT&T_010411.jpeg",
        name: "Samsung Galaxy S23 Ultra",
        productRatingCount: 80,
        price: 230,
    },

    {
        image: "/images/Toshiba hard drive.jpg",
        name: "Toshiba 500GB Hard Drive",
        productRatingCount: 37,
        price: 38,
    },

    {
        image: "/images/f96d433f-53c3-4239-8158-1f706eaaf4f6_010504.jpeg",
        name: "Iphone 14 Pro Max 2023",
        productRatingCount: 56,
        price: 235,
    },

    {
        image: "/images/washing machine.jpg",
        name: "Small Size Washing Machine",
        productRatingCount: 56,
        price: 163,
    },

    {
        image: "/images/Type-C airpods.webp",
        name: "Type-C Samsung Airpods",
        productRatingCount: 86,
        price: 20,
    }

];

const featuredProducts = [
    {
        image: "/images/Apple airpods2.webp",
        name: "Apple Airpods",
        productRatingCount: 78,
        price: 48,
    },

    {
        image: "/images/blue Air jordan.jpg",
        name: "Blue Air Jordan",
        productRatingCount: 86,
        price: 40,
    },

    {
        image: "/images/chromebook laptop2.webp",
        name: "Chromebook Laptop 2023",
        productRatingCount: 43,
        price: 120,
    },

    {
        image: "/images/Premium Photo _ Next generation game controller isolated_010456.jpeg",
        name: "Custom PS5 Controller",
        productRatingCount: 37,
        price: 38,
    },
    
    {
        image: "/images/diamond chain3.jpg",
        name: "Jewellery - Diamond Chain",
        productRatingCount: 43,
        price: 360,
    },

    {
        image: "/images/dining chairs.webp",
        name: "Medium Size Dining Chairs",
        productRatingCount: 40,
        price: 50,
    },

    {
        image: "/images/Playstation 5_010454.jpeg",
        name: "Playstation 5",
        productRatingCount: 73,
        price: 210,
    },

    {
        image: "/images/microwave.jpg",
        name: "Mini Microwave",
        productRatingCount: 87,
        price: 150,
    },

];

const electricDevices = [
    {
        image: "/images/Apple airpods2.webp",
        name: "Apple Airpods",
        productRatingCount: 78,
        price: 48,
    },
    
    {
        image: "/images/chromebook laptop3.webp",
        name: "Chromebook Laptop 2023",
        productRatingCount: 43,
        price: 120,
    },

    {
        image: "/images/Premium Photo _ Next generation game controller isolated_010456.jpeg",
        name: "Custom PS5 Controller",
        productRatingCount: 37,
        price: 38,
    },

    {
        image: "/images/Playstation 5_010454.jpeg",
        name: "Playstation 5",
        productRatingCount: 73,
        price: 210,
    },

    {
        image: "/images/microwave.jpg",
        name: "Mini Microwave",
        productRatingCount: 87,
        price: 150,
    },

    {
        image: "/images/windows laptop.webp",
        name: "Windows 11 HP Laptop 1TB",
        productRatingCount: 86,
        price: 250,
    },

    
    {
        image: "/images/Black airpods2.webp",
        name: "Black Samsung Airpods",
        productRatingCount: 53,
        price: 42,
    },

    {
        image: "/images/Samsung Galaxy S23 Ultra - Price, Features & Reviews _ AT&T_010411.jpeg",
        name: "Samsung Galaxy S23 Ultra",
        productRatingCount: 80,
        price: 230,
    },

    {
        image: "/images/Toshiba hard drive.jpg",
        name: "Toshiba 500GB Hard Drive",
        productRatingCount: 37,
        price: 38,
    },

    {
        image: "/images/f96d433f-53c3-4239-8158-1f706eaaf4f6_010504.jpeg",
        name: "Iphone 14 Pro Max 2023",
        productRatingCount: 56,
        price: 235,
    },

    {
        image: "/images/washing machine.jpg",
        name: "Small Size Washing Machine",
        productRatingCount: 56,
        price: 163,
    },
    
    {
        image: "/images/Type-C airpods.webp",
        name: "Type-C Samsung Airpods",
        productRatingCount: 86,
        price: 20,
    }
];

// Page Scroll Animations
document.addEventListener("DOMContentLoaded", ()=>{
    container.classList.add("brighten");
});

function animateFeaturedProductsSection(){
    if(window.pageYOffset > 150){
        featuredProductsSection.classList.add("justify");
    }
    else{
        featuredProductsSection.classList.remove("justify");
    }
}

function animateBigDealsSection(){  
    if(window.pageYOffset > 1144){
        bigDeals.classList.add("justify");
    }
    else{
        bigDeals.classList.remove("justify");
    }
}

function animateElectricDevicesSection(){  
    if(window.pageYOffset > 1350){
        electricDevicesSection.classList.add("justify");
    }
    else{
        electricDevicesSection.classList.remove("justify");
    }
}

function animateCardsSection(){  
    if(window.pageYOffset > 2700){
        cardsSection.classList.add("justify");
    }
    else{
        cardsSection.classList.remove("justify");
    }
}

function animateNewsLetterSection(){  
    if(window.pageYOffset > 3300){
        newsLetter.classList.add("justify");
    }
    else{
        newsLetter.classList.remove("justify");
    }
}

document.addEventListener("scroll", animateFeaturedProductsSection);
document.addEventListener("scroll", animateBigDealsSection);
document.addEventListener("scroll", animateElectricDevicesSection);
document.addEventListener("scroll", animateCardsSection);
document.addEventListener("scroll", animateNewsLetterSection);

// Search Box Filtering
const searchForm = document.querySelector(".search-form");
const searchBox = document.getElementById("search-box");

searchBox.addEventListener('input', function () {
    // Get the user input value and convert it to lowercase for case-insensitive matching
    const searchTerm = searchBox.value.toLowerCase();

    // Filter the products array based on the user's search term
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    // Call a function to display the filtered products
    displayProducts(filteredProducts);
});

function displayProducts(products) {
    // Clear the products container before displaying filtered products
    featuredProductsContainer.innerHTML = '';

    // Iterate through the filtered products and create HTML elements to display them
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h4 class="pro-name">${product.name}</h4>
                <span class="pro-rating-count">${product.productRatingCount}</span>
                <i class="fa-solid fa-star pro-rating-star"></i>
                <span class="pro-price">$${product.price}</span><br><br>
                <button class="add-to-cart-btn">Add To Cart <i class="fa-solid fa-shopping-bag"></i></button>
            </div>
        `;
        // Append each product element to the products container
        featuredProductsContainer.appendChild(productElement);
    });
}

// Render The Products To The DOM Dynamically
featuredProducts.forEach((product)=>{

    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
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
`;
    featuredProductsContainer.appendChild(productElement);
});


electricDevices.forEach((product)=>{
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
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
    `;

    electricDevicesProductsContainer.appendChild(productElement);

    
});

const singleProducts = document.querySelectorAll(".product");

singleProducts.forEach(product =>{
    product.addEventListener("click", ()=>{
        const productName = product.querySelector(".pro-name").innerText;
        window.location.href = `singleProduct/${productName}`;

        
    });
});