window.addEventListener('DOMContentLoaded', syncWithLocalStorage);

const productsList = document.querySelector('.products-list');
const cartMenu = document.querySelector('.cart-menu');
const cartButton = document.querySelector('.cart-button');
const cartProductList = document.querySelector('.cart-menu__products-list');

// Business Logic

const cart = [];

const products = [
    {
        id: 0,
        popular: 'Популярное',
        img: 'https://i.ibb.co/CVDsfyX/ariel.png',
        weight: '15X28.8 г',
        title: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        barcode:'4604049097548',
        mark:'Нэфис',
        brand:'AOS',
        price: '48,76 ₸',
    },
    {
        id: 1,
        popular: 'Популярное',
        img: 'https://i.ibb.co/y6t7tR1/bimax.png',
        weight: '1500 г',
        title: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
        barcode:'4604049097548',
        mark:'Нэфис',
        brand:'AOS', 
        price: '48,76 ₸',
    },
    {
        id: 2,
        popular: 'Популярное',
        img: 'https://i.ibb.co/1X0KNYm/aos.png',
        weight: '450мл',
        title: 'AOS средство для мытья посуды Crystal',
        barcode:'4604049097548',
        mark:'Нэфис',
        brand:'AOS',
        price: '48,76 ₸',
    },
    {
        id: 3,
        popular: 'Популярное',
        img: 'https://i.ibb.co/d7WNJF5/sorti.png',
        weight: '450мл',
        title: 'AOS Ср-во для мытья посуды Апельсин+мята',
        barcode:'4604049097548',
        mark:'Нэфис',
        brand:'AOS',
        price: '48,76 ₸ ',
    },
    {
        id: 4,
        popular: 'Популярное',
        img: 'https://i.ibb.co/CVDsfyX/ariel.png',
        weight: '15X28.8 г',
        title: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        barcode:'4604049097548',
        mark:'Нэфис',
        brand:'AOS',
        price: '48,76 ₸',
    },
    {
        id: 5,
        popular: 'Популярное',
        img: 'https://i.ibb.co/y6t7tR1/bimax.png',
        weight: '1500 г',
        title: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
        barcode:'4604049097548',
        mark:'Нэфис',
        brand:'AOS',
        price: '48,76 ₸',
    },
    {
        id: 6,
        popular: 'Популярное',
        img: 'https://i.ibb.co/1X0KNYm/aos.png',
        weight: '450мл',
        title: 'AOS средство для мытья посуды Crystal',
        barcode:'4604049097548',
        mark:'Нэфис',
        brand:'Бренд:AOS',
        price: '48,76 ₸',
    },
    {
        id: 7,
        popular: 'Популярное',
        img: 'https://i.ibb.co/d7WNJF5/sorti.png',
        weight: '450мл',
        title: 'AOS Ср-во для мытья посуды Апельсин+мята',
        barcode:'4604049097548',
        mark:'Нэфис',
        brand:'AOS',
        price: '48,76 ₸',
    },
];


function addToCart(product) {
  cart.push(product)
}

function saveToLocalStorage(cart) {
  localStorage.setItem('products', JSON.stringify(cart));
}

function syncWithLocalStorage() {
  const products = localStorage.getItem('products');
  
  if (products) {
    JSON.parse(products).forEach(item => {
      cart.push(item);
    })
    renderProductsInCart(cart)
  }
}

// cart menu

cartButton.addEventListener('click', openCartMenu);

function openCartMenu() {
  cartMenu.classList.toggle('active');
}



// User Interface

function renderProducts(data) {
  data.forEach(item => {
    productsList.innerHTML += `
      <div class="product">

        <div class="products__img"><img src=${item.img}/></div>
        <div class="products__weight">${item.weight}</div>
        <div class="products__title">Название:${item.title}</div>
        <div class="products__barcode">Штрихкод:${item.barcode}</div>
        <div class="products__mark">Марка:${item.mark}</div>
        <div class="products__brand">Бренд:${item.brand}</div>
        <div class="products__price">Цена: ${item.price}$</div>
        <div class="product__button">
          <button data-id="${item.id}">добавить в корзину</button>
        </div>
      </div>
    `
  })
}

function renderProductsInCart(products) {
  cartProductList.innerHTML = '';
  
  products.forEach(item => {
    cartProductList.innerHTML += `
      <div class="cart-product">
        <div class="cart-product__data">
          <div class="cart-product__img"><img src=${item.img}/></div>
          <div class="cart-product__weight">${item.weight}</div>
          <div class="cart-product__title">Название:${item.title}</div>
          <div class="cart-product__barcode">Штрихкод:${item.barcode}</div>
          <div class="cart-product__mark">Марка:${item.mark}</div>
          <div class="cart-product__brand">Бренд:${item.brand}</div>
          <div class="cart-product__price">Цена: ${item.price}$</div>
    `
  })
}


renderProducts(products);


productsList.addEventListener('click', event => {
  const target = event.target;
  
  
  if (target.hasAttribute('data-id')) {  
    const id = parseInt(target.getAttribute('data-id'));
    const desiredProduct = products.find(item => item.id === id);
    
    addToCart(desiredProduct);
    
    renderProductsInCart(cart);

    saveToLocalStorage(cart);
  }
})

const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)





