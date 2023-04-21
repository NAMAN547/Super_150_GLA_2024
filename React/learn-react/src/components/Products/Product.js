import React,{useState} from 'react'
import "./Product.css"

const Product = (props) => {

    const [count , setCount] = useState(0);

    const quantChangeHandler = () =>{

        setCount(count + 1);
    }

    const [price , setPrice] = useState(props.price)
    // let price = props.price;

    const priceChangeHandler = () =>{

        // price = 100;
        // console.log(price)
        setPrice(100)
    }

 

  return (
        <figure className='product' style={{width:"200px", border:"2px solid black", padding:"10px"}}>

            <img style={{width:"100%"}} src={props.image} alt={props.name}></img>

            <p> Name : {props.name}</p>

            <h2 onClick={priceChangeHandler}> Price : {price}</h2>

            <p> Quantity : {count} <button onClick={quantChangeHandler}>Increment</button></p>

      
        </figure>
  )
}

export default Product