
const mongoose = require("mongoose");
const Product = require("./models/Product")

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/shopping-cart")
.then(()=> console.log(" DB CONNECTED!"))
.catch((err)=> console.log(err));


const products = [

    {
        name: 'Iphone 11',
        img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 300,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },
    {
        name: 'Nike Shoes',
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 100,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },
    {
        name: 'Titan Watch',
        img: 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 150,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },
    {
        name: 'Macbook Pro',
        img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 250,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },
    {
        name: 'Drones',
        img: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 250,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },
    {
        name: 'More Drones',
        img: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJvbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 350,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },
    {
        name: 'Bicycle',
        img: 'https://images.unsplash.com/photo-1484920274317-87885fcbc504?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnljaWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 350,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },

]

 async function seedProducts(){


      await Product.deleteMany({});

     await Product.insertMany(products);

     console.log(" Product Seeded!")

}

seedProducts();

