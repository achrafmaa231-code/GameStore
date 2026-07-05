// ===========================
// LOAD CART
// ===========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const itemsCount = document.getElementById("itemsCount");
const totalPrice = document.getElementById("totalPrice");
const clearBtn = document.getElementById("clear");
const checkoutBtn = document.getElementById("checkout");

// ===========================
// SHOW PRODUCTS
// ===========================

function displayCart(){

    cartItems.innerHTML = "";

    let total = 0;

    if(cart.length === 0){

        cartItems.innerHTML = `
            <div style="text-align:center;padding:60px;">
                <h2>Your Cart Is Empty 🛒</h2>
                <br>
                <a href="index.html" style="
                    color:white;
                    background:#ff9900;
                    padding:12px 25px;
                    border-radius:30px;
                    text-decoration:none;">
                    Go Shopping
                </a>
            </div>
        `;

    }

    cart.forEach((product,index)=>{

        let price = parseFloat(product.price.replace("$","")) || 0;

        total += price;

        cartItems.innerHTML += `

        <div class="item">

            <img src="${product.image}" alt="">

            <div class="info">

                <h3>${product.title}</h3>

                <p>${product.price}</p>

                <button class="remove" onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        </div>

        `;

    });

    itemsCount.innerHTML = cart.length;

    totalPrice.innerHTML = "$" + total.toFixed(2);

}

// ===========================
// REMOVE PRODUCT
// ===========================

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}

// ===========================
// CLEAR CART
// ===========================

clearBtn.onclick = function(){

    if(cart.length == 0){

        alert("Cart is already empty.");

        return;

    }

    let ok = confirm("Do you want to clear the cart?");

    if(ok){

        cart = [];

        localStorage.setItem("cart",JSON.stringify(cart));

        displayCart();

    }

}

// ===========================
// CHECKOUT
// ===========================

checkoutBtn.onclick = function(){

    if(cart.length == 0){

        alert("Your cart is empty.");

        return;

    }

    alert("Thank you for your purchase! 🎉");

    cart = [];

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}

// ===========================
// START
// ===========================

displayCart();