"use strict"

let emp1 = {
    name: "John Doe",
    address: "2289 17th S N",
    city: "Silicon Valley",
    state: "California",
    zip: "182933"
}

let emp2 = {
    name: "Veronica X",
    address: "2873 5th RD N",
    city: "Silicon Valley",
    state: "California",
    zip: "162799"
};

function printContact(contact2) {
    console.log(emp2.name);
    console.log(emp2.address);
    console.log(emp2.city);
    console.log(emp2.state);
    console.log(emp2.zip);
}
 printContact(emp2);
