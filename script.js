// =============================
// CART
// =============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const count = document.getElementById("count");

count.innerHTML = cart.length;

// =============================
// BUY BUTTON
// =============================

const buyButtons = document.querySelectorAll(".buy");

buyButtons.forEach(button => {

    button.addEventListener("click", function(){

        const card = this.parentElement;

        const product = {

            title: card.querySelector("h3").innerText,

            price: card.querySelector("p").innerText,

            image: card.querySelector("img").getAttribute("src")

        };

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        count.innerHTML = cart.length;

        alert(product.title + " added to cart!");

    });

});

// =============================
// SEARCH
// =============================

const search = document.getElementById("search");

search.addEventListener("keyup", function(){

    const value = search.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(value)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

});

// =============================
// CATEGORY FILTER
// =============================

function showCategory(category){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        if(category === "all"){

            card.style.display="block";

        }

        else if(card.classList.contains(category)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

}

// =============================
// HERO BUTTON
// =============================

const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("click", function(){

    document.getElementById("games").scrollIntoView({

        behavior:"smooth"

    });

});

// =============================
// HOVER EFFECT
// =============================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",function(){

        this.style.boxShadow="0 0 25px orange";

    });

    card.addEventListener("mouseleave",function(){

        this.style.boxShadow="0 0 15px rgba(0,0,0,.4)";

    });

});