// MOBILE NAVBAR

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


// PRODUCT IMAGE GALLERY (sproduct page)

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

if (smallimg.length > 0) {

  smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
  }

  smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
  }

  smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
  }

  smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
  }

}


// ADD TO CART SYSTEM

let cart = [];

function addToCart(name, price) {

  let product = {
    name: name,
    price: price,
    quantity: 1
  };

  let existingProduct = cart.find(item => item.name === name);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push(product);
  }

  updateCart();
}


// UPDATE CART DISPLAY

function updateCart() {

  let cartTable = document.getElementById("cart-items");

  if (!cartTable) return;

  cartTable.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    let subtotal = item.price * item.quantity;

    total += subtotal;

    cartTable.innerHTML += `
      <tr>
        <td><button onclick="removeItem(${index})">X</button></td>
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>
            <button onclick="decreaseQty(${index})">-</button>
            ${item.quantity}
            <button onclick="increaseQty(${index})">+</button>
        </td>
        <td>$${subtotal}</td>
      </tr>
    `;
  });

  document.getElementById("cart-total").innerText = "$" + total;
}


// REMOVE ITEM

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}


// INCREASE QUANTITY

function increaseQty(index) {
  cart[index].quantity++;
  updateCart();
}


// DECREASE QUANTITY

function decreaseQty(index) {

  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }

  updateCart();
}