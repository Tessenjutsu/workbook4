"use strict";

let products = [
  { product: "Pizza", price: 15.79 },
  { product: "Burgers", price: 3.89 },
  { product: "Spaghetti", price: 10.89 },
  { product: "Chicken Sandwiches", price: 2.79 },
  { product: "Stuffed Jalapeno Peppers", price: 6.82 },
  { product: "Bacon Egg & Cheese", price: 4.50 },
];

for (const product of products){
    if(product.price < 20) {
        console.log(product);
    }
}