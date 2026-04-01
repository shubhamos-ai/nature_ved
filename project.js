let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  updateCart();
  alert(productName + " added to cart");
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<li>Your cart is empty</li>";
    cartTotal.textContent = "Total: ₹0";
    return;
  }

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = `Total: ₹${total}`;
}

function orderNow(productName, price) {
  const phone = "916355059293";
  const message =
    `Hello Nature Ship,\n\n` +
    `I want to order this product:\n` +
    `Product: ${productName}\n` +
    `Price: ₹${price}\n\n` +
    `Please share payment and delivery details.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function checkoutOnWhatsApp() {
  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  const phone = "916355059293";
  let message = "Hello Nature Ship,\n\nI want to order these items:\n";

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - ₹${item.price}\n`;
  });

  message += `\nTotal: ₹${total}\n\nPlease confirm payment and delivery details.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}

updateCart();
// 3D tilt effect on mouse move
document.querySelectorAll(".card, .product").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let centerX = card.offsetWidth / 2;
    let centerY = card.offsetHeight / 2;

    let rotateX = -(y - centerY) / 10;
    let rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

// Smooth button click effect
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.9)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 100);
  });
});
  const images = [
      "images/Backkground 3.jpg",
   
      "images/Screenshot_20260331_174610_Chrome.jpg",
   
    "images/katherine-chase-0DtoVEDaJbs-unsplash.jpg",
    "images/background 7.jpg",
     
     "images/dhanya-purohit-KyAacW3enww-unsplash.jpg",
     "images/background 2.jpg",
    "images/dan-gold-cUaXzFXVKkA-unsplash.jpg",
     "images/background 6.jpg"
    
  ];

  let index = 0;
  const hero = document.querySelector(".hero");

  function changeBackground() {
    hero.style.opacity = 0;

    setTimeout(() => {
      // Corrected the path syntax here
      hero.style.backgroundImage = "url('" + images[index] + "')";
      hero.style.opacity = 1;
      index = (index + 1) % images.length;
    }, 500);
  }

  // Initial call
  changeBackground();

  // Change every 3 seconds for a smoother effect
  setInterval(changeBackground, 3000);