const container = document.querySelector(".container");
const newsLetter = document.querySelector(".news-letter");

// Brighten The Page When The DOM Content Are Loaded
document.addEventListener("DOMContentLoaded", ()=>{
    container.classList.add("brighten");
});

console.log(10 * 50);

function animateNewsLetterSection(){
    if(window.pageYOffset > 500){
        newsLetter.classList.add("justify");
    }
    else{
        newsLetter.classList.remove("justify");
    }
}

document.addEventListener("scroll", animateNewsLetterSection);