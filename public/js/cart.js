const container = document.querySelector(".container");


// Brighten The Page When The DOM Content Are Loaded
document.addEventListener("DOMContentLoaded", ()=>{
    container.classList.add("brighten");
});

function animateNewsLetterSection(){
    if(window.pageYOffset > 500){
        newsLetter.classList.add("justify");
    }
    else{
        newsLetter.classList.remove("justify");
    }
}

document.addEventListener("scroll", animateNewsLetterSection);

// JavaScript for quantity and remove buttons
document.addEventListener("DOMContentLoaded", function() {
    const quantityBtns = document.querySelectorAll(".quantity-btn");
    const removeBtns = document.querySelectorAll(".remove-btn");

    // Quantity button functionality
    quantityBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const row = this.closest("tr");
            const quantityElement = row.querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent);

            if (this.textContent === "+") {
                quantity++;
            } else if (this.textContent === "-" && quantity > 1) {
                quantity--;
            }

            quantityElement.textContent = quantity;
            updateTotal(row);
        });
    });

    // Remove button functionality
    removeBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const row = this.closest("tr");
            row.remove();
            updateTotal(row);
        });
    });

    // Function to update the total price
    function updateTotal(row) {
        const quantity = parseInt(row.querySelector(".quantity").textContent);
        const price = parseFloat(row.querySelectorAll("td")[4].textContent.replace("$", ""));
        const totalElement = row.querySelectorAll("td")[5];

        const total = quantity * price;
        totalElement.textContent = "$" + total.toFixed(2);

        updateCartTotal();
    }

    // Function to update the cart's total amount
    function updateCartTotal() {
        let total = 0;
        const totals = document.querySelectorAll("td:nth-child(6)");

        totals.forEach(totalElement => {
            total += parseFloat(totalElement.textContent.replace("$", ""));
        });

        document.querySelector(".header h3 span").textContent = "$" + total.toFixed(2);
    }
});
