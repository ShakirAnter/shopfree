const container = document.querySelector(".container");
const productsContainer = document.querySelector(".products-container");
const searchBox = document.getElementById("search-box");
const searchForm = document.querySelector(".search-form");
const newsLetter = document.querySelector(".news-letter");

let products = [
    {
        id: 1,
        image: "/images/Apple airpods2.webp",
        name: "Apple Airpods",
        productRatingCount: 78,
        price: 48,
    },

    {
        id: 2,
        image: "/images/blue Air jordan.jpg",
        name: "Blue Air Jordan",
        productRatingCount: 86,
        price: 40,
    },

    {
        id: 3,
        image: "/images/chromebook laptop3.webp",
        name: "Chromebook Laptop 2023",
        productRatingCount: 43,
        price: 120,
    },

    {
        id: 4,
        image: "/images/Premium Photo _ Next generation game controller isolated_010456.jpeg",
        name: "Custom PS5 Controller",
        productRatingCount: 37,
        price: 38,
    },

    {
        id: 5,
        image: "/images/diamond chain3.jpg",
        name: "Jewellery - Diamond Chain",
        productRatingCount: 43,
        price: 360,
    },
    
    {
        id: 6,
        image: "/images/Playstation 5_010454.jpeg",
        name: "Playstation 5",
        productRatingCount: 73,
        price: 210,
    },

    {
        id: 7,
        image: "/images/dining chairs.webp",
        name: "Medium Size Dining Chairs",
        productRatingCount: 40,
        price: 50,
    },

    {
        id: 8,
        image: "/images/microwave.jpg",
        name: "Mini Microwave",
        productRatingCount: 87,
        price: 150,
    },

    {
        id: 9,
        image: "/images/windows laptop.webp",
        name: "Windows 11 HP Laptop 1TB",
        productRatingCount: 86,
        price: 250,
    },

    {
        id: 10,
        image: "/images/Black airpods2.webp",
        name: "Black Samsung Airpods",
        productRatingCount: 53,
        price: 42,
    },

    {
        id: 11,
        image: "/images/Samsung Galaxy S23 Ultra - Price, Features & Reviews _ AT&T_010411.jpeg",
        name: "Samsung Galaxy S23 Ultra",
        productRatingCount: 80,
        price: 230,
    },

    {
        id: 12,
        image: "/images/Toshiba hard drive.jpg",
        name: "Toshiba 500GB Hard Drive",
        productRatingCount: 37,
        price: 38,
    },

    {
        id: 13,
        image: "/images/f96d433f-53c3-4239-8158-1f706eaaf4f6_010504.jpeg",
        name: "Iphone 14 Pro Max 2023",
        productRatingCount: 56,
        price: 235,
    },

    {
        id: 14,
        image: "/images/washing machine.jpg",
        name: "Small Size Washing Machine",
        productRatingCount: 56,
        price: 163,
    },

    {
        id: 15,
        image: "/images/Type-C airpods.webp",
        name: "Type-C Samsung Airpods",
        productRatingCount: 86,
        price: 20,
    },

    {
        id: 16,
        image: "/images/adults-plain-cotton-tshirt-2-pack-teal_010415.jpg",
        name: "Adults Plain Cotton T-Shirt",
        productRatingCount: 87,
        price: 48,
    },

    {
        id: 17,
        image: "/images/Apple iPhone 14 Plus Clear Case with MagSafe ________010501.jpeg",
        name: "Apple Iphone 14 Plus Clear Case With MagSafe",
        productRatingCount: 19,
        price: 10,
    },

    {
        id: 18,
        image: "/images/backpack_010429.jpg",
        name: "Travel Backpack",
        productRatingCount: 23,
        price: 20,
    },

    {
        id: 19,
        image: "/images/bathroom-rug_010422.jpg",
        name: "White Bathroom Rug",
        productRatingCount: 42,
        price: 32,
    },

    {
        id: 20,
        image: "/images/Big size bed.webp",
        name: "Modern Big Size Bed",
        productRatingCount: 70,
        price: 132,
    },

    {
        id: 21,
        image: "./images/Cuisinart C77WTR-15P Classic Forged Triple Rivet, 15-Piece Knife Set with Block, Superior High-Carbon Stainless Steel Blades for Precision and Accuracy, White_010445.jpeg",
        name: "15-Piece Knife Set With Block",
        productRatingCount: 56,
        price: 15,
    },

    {
        id: 22,
        image: "/images/diamond chain2.jpg",
        name: "CEO Ice Original Diamond Chain",
        productRatingCount: 90,
        price: 350,
    },

    {
        id: 23,
        image: "/images/diamond chain.jpg",
        name: "Shark Ice Original Diamond Chain",
        productRatingCount: 85,
        price: 300,
    },

    {
        id: 24,
        image: "/images/kitchen-paper-towels-30-pack_010422.jpg",
        name: "Kitchen Paper Towel 30 Pack",
        productRatingCount: 25,
        price: 3,
    },

    {
        id: 25,
        image: "/images/Korkmaz Turbo 9_5 Quart Stove Top Pressure Cooker Stainless Steel Cookware Induction Compatible, Manual Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker and Warmer_010444.jpeg",
        name: "Quart Stove Top Pressure Cooker",
        productRatingCount: 38,
        price: 95,
    },

    {
        id: 26,
        image: "/images/liquid-laundry-detergent-plain_010424.jpg",
        name: "Lizuid Laundry Detergent Plain",
        productRatingCount: 38,
        price: 15,
    },

    {
        id: 27,
        image: "/images/men-chino-pants-black_010426.jpg",
        name: "Men Chino Pants Black",
        productRatingCount: 67,
        price: 45,
    },

    {
        id: 28,
        image: "/images/men-cozy-fleece-zip-up-hoodie-red_010413.jpg",
        name: "Men Red Cozy Fleece Zip Up Hoodie",
        productRatingCount: 50,
        price: 87,
    },

    {
        id: 29,
        image: "/images/men-golf-polo-t-shirt-blue_010412.jpg",
        name: "Men Blue Golf Polo T-Shirt",
        productRatingCount: 47,
        price: 65,
    },

    {
        id: 30,
        image: "/images/men-navigator-sunglasses-brown_010434.jpg",
        name: "Men Brown Navigator Sunglasses",
        productRatingCount: 35,
        price: 20,
    },

    {
        id: 31,
        image: "/images/mens' Adiddas sweatpants.jpeg",
        name: "Men's Adiddas SweatPants",
        productRatingCount: 45,
        price: 40,
    },
    
    {
        id: 32,
        image: "/images/remote control car2.webp",
        name: "Lamborghini Remote Control Car",
        productRatingCount: 50,
        price: 70,
    },

    {
        id: 33,
        image: "/images/The Best Blender for Smoothies, Soups, and Yes, Homemade Peanut Butter, Tested and Reviewed_010447.jpeg",
        name: "Cuisinart Blender For Delicious Treats",
        productRatingCount: 65,
        price: 110,
    },

    {
        id: 34,
        image: "/images/women-french-terry-fleece-jogger-camo_010427.jpg",
        name: "Women Camo French Terry Fleece Jogger",
        productRatingCount: 46,
        price: 45,
    },

    {
        id: 35,
        image: "/images/women-stretch-popover-hoodie-black_010418.jpg",
        name: "Women Black Stretch Popover Hoodie",
        productRatingCount: 65,
        price: 78,
    },

    {
        id: 36,
        image: "/images/CAROTE Pots and Pans Set Nonstick, White Granite Induction Kitchen Cookware Sets, 10 Pcs Non Stick Cooking Set w_Frying Pans & Saucepans(PFOS, PFOA Free)_010439.jpeg",
        name: "Granite Induction Kitchen Cookware Sets",
        productRatingCount: 45,
        price: 87,
    },
];

// Brighten The Page When The DOM Content Are Loaded
document.addEventListener("DOMContentLoaded", ()=>{
    container.classList.add("brighten");
});

function animateNewsLetterSection(){  
    if(window.pageYOffset > 3650){
        newsLetter.classList.add("justify");
    }
    else{
        newsLetter.classList.remove("justify");
    }
}

document.addEventListener("scroll", animateNewsLetterSection);


products.forEach((product)=>{
    
    // Truncate product name if it exceeds 25 characters
    const truncatedName = product.name.length > 23 ? product.name.substring(0, 23) + '...' : product.name;
    
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
        <div class="product-img">
        <img src=".${product.image}" alt="${truncatedName}">
    </div>
    <div class="product-bottom">
        <h4 class="pro-name">${truncatedName}</h4>
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
    productsContainer.appendChild(productElement);   
});

const searchTerm = searchBox.value.toLocaleLowerCase();

searchBox.addEventListener('input', function () {
    // Get the user input value and convert it to lowercase for case-insensitive matching
    const searchTerm = searchBox.value.toLowerCase();

    // Filter the products array based on the user's search term
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    if(filteredProducts.length === 0){
        displayNotFoundMessage();
    } else{
        displayProducts(filteredProducts);
    }
});

function displayNotFoundMessage(){
    productsContainer.innerHTML = "";
    notFoundElement = document.createElement("div");
    notFoundElement.classList.add("not-found");
    notFoundElement.innerHTML = `<h2>Product Not Found</h2>`;

    productsContainer.appendChild(notFoundElement);
}

function displayProducts(products) {
    // Clear the products container before displaying filtered products
    productsContainer.innerHTML = '';

    // Truncate product name if it exceeds 25 characters
    const truncatedName = product.name.length > 23 ? product.name.substring(0, 23) + '...' : product.name;

    // Iterate through the filtered products and create HTML elements to display them
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
        <div class="product-img">
            <img src=".${product.image}" alt="${truncatedName}">
        </div>
        <div class="product-bottom">
            <h4 class="pro-name">${truncatedName}</h4>
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
        // Append each product element to the products container
        productsContainer.appendChild(productElement);
    });
}