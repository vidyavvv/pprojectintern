let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Greek Salad',
        image: '7.PNG',
        price: 425,
        text:'Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese'
    },
    {
        id: 2,
        name: 'Manchurian Hakka / Schezwan noodles',
        image: 'pro2.jpg',
        price: 512,
        text:'Manchurian Hakka / Schezwan noodles, popular indochinese food served in a bowl'
    },
    {
        id: 3,
        name: 'Butternut Pumpkin',
        image: 'pro3.PNG',
        price: 425,
        text:'Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.'
    },
    {
        id: 4,
        name: 'Asian Oranage Chicken',
        image: 'pro13.jpg',
        price: 400,
        text:'Asian Oranage Chicken with Green Onions '
    },
    {
        id: 5,
        name: 'Olivas Rellenas',
        image: 'pro5.PNG',
        price: 439,
        text:'Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.'
    },
    {
        id: 6,
        name: 'Horlicks Kitkat',
        image: 'pro6.PNG',
        price:349,
        text:'Milk, icecream, syrup, horlicks, chocolate sauce and kitkat'
    },
    {
        id: 7,
        name: 'Butter Ckicken Curry',
        image: 'pro7.jpg',
        price:349,
        text:'Butter chicken curry with tender chicken breast, cream, butter & honey stock'
    },
    {
        id: 8,
        name: 'Indian Thali with fish ',
        image: '14.jpg',
        price:349,
        text:'A plat of south Indian thali - simple traditional meal with rice, vegetable, fish on plate'
    },
    {
        id: 9,
        name: 'Chicken Vindaloo Curry ',
        image: '13.jpg',
        price:349,
        text:' Bowl of chicken vindaloo curry over basmati rice and naan bread'
    },
    {
        id: 10,
        name: 'Indian dal',
        image: '19.jpg',
        price:349,
        text:' Indian Dhal spicy curry in bowl, spices, herbs, rustic black wooden background. Authentic Indian dish'
    },
    {
        id: 11,
        name: 'Indian cuisine Bengali Fish Curry',
        image: '17.jpg',
        price:349,
        text:'Macher Jhol in black bowl on dark slate table top. Indian cuisine Bengali Fish Curry. Asian food and meal.'
    },
    {
        id: 12,
        name: 'indian pulav, vegetable rice',
        image: '16.jpg',
        price:349,
        text:'The Indian Pulav vegetables and The rice is browned in oil and then mixed with vegetables nuts, fruits etc. Basmati Rice'
    },
    {
        id: 13,
        name: 'Asian Chow Mein Noodles',
        image: 'pro2.jpg',
        price:349,
        text:'Asian Chow Mein Noodles with Vegetables '
    },
    {
        id: 14,
        name: 'Mexican tacos flat lay composition with pork carnitas,',
        image: 'last.jpg',
        price:349,
        text:'mexican tacos flat lay composition with pork carnitas, cochinita pibil, onion and habanero chili traditional food in Mexico'
    },
    {
        id: 15,
        name: 'hot king fish curry ',
        image: '14.jpg',
        price:349,
        text:'spicy and hot king fish curry with green curry leaf Kerala India.'
    },
    {
        id: 16,
        name: 'Horlicks Kitkat',
        image: 'product4.jpg',
        price:349,
        text:'Milk, icecream, syrup, horlicks, chocolate sauce and kitkat'
    },
    {
        id: 17,
        name: 'Lavender Mojito',
        image: 'menu-6.jpg',
        price:349,
        text:'Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices'
    },
    {
        id: 18,
        name: 'Mango Oreo',
        image: 'mang.PNG',
        price:349,
        text:'Mango powder, syrup, cocoa, milk and oreo biscuit.'
    },
    {
        id: 19,
        name: 'Chicken tikka masala ',
        image: '13.jpg',
        price:349,
        text:'Chicken tikka masala Asian traditional spicy meat food and rice in cast iron skillet with tomatoes, butter,'
    },
    {
        id: 20,
        name: 'indian cuisine, masala hot dal meal i',
        image: 'last.jpg',
        price:349,
        text:'Vegan and vegetarian dish, spicy lentil dahl soup bowl. Indian cuisine, masala hot dal meal'
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('li');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="menu-card hover:card">

             <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="image/${value.image}" width="100" height="100" loading="lazy" alt="Greek Salad"
                    class="img-cover">
                </figure>
                

                <div>
                  <div class="title-wrapper">
                  
                    <h3 class="title-3">
                      <a href="#" class="card-title">${value.name}</a>
                      
                    </h3>

                    <span class="badge label-1">Seasonal</span>
                    
                    <span class="span title-2">${value.price.toLocaleString()}</span>
                    <span> <button class="add-to-cart-button" onclick="addToCard(${key})" style="background-color:hsl(38, 61%, 73%)">Add To Cart</button></span>
                  </div>
                  
                    
                  <p class="card-text label-1">
                    ${value.text}
                    
                  </p>
                  
                  
                </div>

              </div>
            `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    else{
        listCards[key].quantity += 1;
    }
    let addButton = document.querySelectorAll('.add-to-cart-button')[key];
    addButton.disabled = true; // You can also hide it by setting addButton.style.display = 'none';
 
    reloadCard();
}
function enableAddToCartButton(key) {
    let addButton = document.querySelectorAll('.add-to-cart-button')[key];
    addButton.disabled = false; // Enable the button
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
                <br>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    localStorage.setItem('q',total.innerText )
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
        enableAddToCartButton(key);
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
