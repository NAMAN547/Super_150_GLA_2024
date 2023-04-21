import React from 'react'
import './Person.css'

const Person = () => {

    let luckyNumber = 7;

    let randomNumber = Math.floor(Math.random()*10)

  return (
        <div style={{color: "red",padding:"20px"}} className='person'>

{
            ( randomNumber === luckyNumber ) ? <div>
            <p> Name : John Doe</p>
            <p> Age : 26</p>
            <p> Location : New Delhi</p>
           
            <img style={{width:"150px"}} src='https://media2.giphy.com/media/BhaqiosBtQJvW/giphy.gif' alt=''></img>

            <p> My Number is : {randomNumber}</p>
            </div>  : <p> You didnt win 😢</p>

}          
        </div>
  )
}

export default Person