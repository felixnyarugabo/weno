// const { use } = require("react");

const input = document.createElement('input')
const display =document.querySelector('.display')
const products = [
    {
        id: 1,
        name: "Laptop",
        image: "images/laptop.jpg",
        price: 80000,
        stock: 5
    },
    {
        id: 2,
        name: "Smartphone",
        image: "/image/309456180_10228186507750592_3033381185332963311_n.jpg",
        price: 25000,
        stock: 10
    },
    {
        id: 3,
        name: "Headphones",
        image: "images/headphones.jpg",
        price: 3500,
        stock: 15
    },
    {
        id: 4,
        name: "Keyboard",
        image: "images/keyboard.jpg",
        price: 2500,
        stock: 8
    },
    {
        id: 5,
        name: "Mouse",
        image: "/image/ChatGPT Image Oct 4, 2026, 03_05_51 PM.png",
        price: 1200,
        stock: 20
    },
    {
        id: 6,
        name: "Monitor",
        image: "images/monitor.jpg",
        price: 18000,
        stock: 4
    },
    {
        id: 7,
        name: "USB Flash Drive",
        image: "images/usb.jpg",
        price: 1000,
        stock: 0
    }
];
input.addEventListener('input',function(){
    const product =input.value.trim()


if(products.length > 0){
    
    return products.filter(element=>element.name.toLocaleLowerCase().includes(product.toLocaleLowerCase()))

    element.forEach(function(result){
        let p= document.createElement('p')
        let  image = document.createElement('img')
        image.crs=result.image
        p.innerText=`product ${result.name}price ${result.price}`
        display.appendChild(image,p)
    
        
    });

}

})

document.body.appendChild(input);

input.placeholder = "Search product...";

input.addEventListener('input', function () {

    const product = input.value.trim();

    const filteredProducts = products.filter(element =>
        element.name.toLowerCase().includes(product.toLowerCase())
    );

    display.innerHTML = "";

    filteredProducts.forEach(function(result) {

        let p = document.createElement('p');
        let image = document.createElement('img');

        image.src = result.image;
        image.width = 150;

        p.innerText = `Product: ${result.name} | Price: ${result.price} | Stock: ${result.stock}`;

        display.appendChild(image);
        display.appendChild(p);

    });

});





