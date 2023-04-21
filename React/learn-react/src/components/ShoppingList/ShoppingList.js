import React,{useState} from 'react'
import Product from "../Products/Product"
import Form from '../Form/Form'


const ShoppingList = () => {

    const initialProducts = [

        {
            id:1,
            name: "iphone 11",
            imgUrl: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 224
        }
        ,
        {
            name: "iphone 12",
            imgUrl: "https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            price: 224
        }
        ,
        {
            name: "iphone 13",
            imgUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 224
        }
    ]

    const [products, setProducts] = useState(initialProducts)

    const addProduct = (product) =>{


        return setProducts([...products,product])

    }


  return (
        <div>

            <Form addProduct={addProduct} />


    
            {

    products.map((product)=>{

        return <Product name={product.name} 
                        price={product.price}
                        image={product.imgUrl}
                        
                        />



    })


            }
    
        </div>
  )
}

export default ShoppingList