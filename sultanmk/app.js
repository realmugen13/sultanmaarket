// import db from './database.js'


// let cart = []
// document.getElementById('showCart').addEventListener('click', showSelectedItem)
// function renderALLItems() {
// 	for (let item of db) {
// 		let itemBox = document.createElement('div')
// 		let itemPopular = document.createElement ('h3')
// 		let itemImg = document.createElement('img')
// 		let itemWeight = document.createElement('h6')
// 		let itemTitle = document.createElement('h5')
// 		let itemBarcode = document.createElement('h6')
// 		let itemMark = document.createElement('h6')
// 		let itemBrand = document.createElement('h6')
// 		let itemPrice = document.createElement('p')
// 		let addToCart = document.createElement('button')


// 		itemPopular.textContent = item.popular,
// 		itemImg.src = item.img
// 		itemWeight.textContent = 'Масса:' + item.weight
// 		itemTitle.textContent = 'Название:' + item.title
// 		itemBarcode.textContent = 'Штрихкод:' + item.barcode
// 		itemMark.textContent = 'Производство:' + item.mark
// 		itemPrice.textContent = 'Цена:' + item.price


// 		addToCart.textContent = 'Добавить в корзину'
// 		addToCart.addEventListener('click', addToCartt)


// 		itemBox.className = 'itemBox'
// 		itemBox.id = item.id

// 		itemBox.append(itemPopular);
// 		itemBox.append(itemImg)
// 		itemBox.append(itemWeight)
// 		itemBox.append(itemTitle)
// 		itemBox.append(itemBarcode)
// 		itemBox.append(itemMark)
// 		itemBox.append(itemPrice)
// 		itemBox.append(addToCart)
// 		document.querySelector('.all-items').append(itemBox)
// 	}
// }

// function addToCartt(event) {
// 	if (localStorage.getItem('cart')) {
// 		cart = JSON.parse(localStorage.getItem('cart'))
// 	}

// 	const id = +event.target.parentElement.id
// 	cart.push(db[id])
// 	console.log(cart)
// }
// function showSelectedItem() {
// 	console.log('saved')
// 	localStorage.setItem('cart',JSON.stringify(cart))

// 	window.location.replace('cart.html')
// }

// renderALLItems()