const products = [
    {
        id: 1,
        title: "Gaming Laptop",
        desc: "Powerful gaming laptop with RTX graphics.",
        price: "$1200",
        image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8"
    },

    {
        id: 2,
        title: "Smart Watch",
        desc: "Modern smartwatch with premium design.",
        price: "$250",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        id: 3,
        title: "Wireless Headphones",
        desc: "Noise cancelling premium headphones.",
        price: "$320",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        id: 4,
        title: "iPhone",
        desc: "Latest generation smartphone with amazing camera.",
        price: "$999",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },

    {
        id: 5,
        title: "Mechanical Keyboard",
        desc: "RGB keyboard for developers and gamers.",
        price: "$180",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
    },

    {
        id: 6,
        title: "Gaming Mouse",
        desc: "Fast response gaming mouse.",
        price: "$90",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    }
];

const productsContainer = document.getElementById("products");

const cartCount = document.getElementById("cartCount");

let cart = 0;

function renderProducts() {

    products.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
        <div class="product-image">
          <img src="${product.image}">
        </div>
  
        <div class="product-content">
  
          <h3>${product.title}</h3>
  
          <p>${product.desc}</p>
  
          <div class="price">
            ${product.price}
          </div>
  
          <button class="add-btn" onclick="addToCart()">
            Add To Cart
          </button>
  
        </div>
      `;

        productsContainer.appendChild(card);

    });

}

function addToCart() {

    cart++;

    cartCount.textContent = cart;

}

renderProducts();