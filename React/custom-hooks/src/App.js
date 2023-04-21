import React,{useState}  from "react"
import './App.css';
import Section from "./components/Section";
import useToggle from "./components/hooks/useToggle";


function App() {

     const [smileyface, isSmileyFace] =  useState(true);

     const [section , updateSection] =  useToggle(true)
   

  return (
    <div >

     

      { section && <Section /> }

      <p style={{textAlign:"center"}}><button onClick={()=> updateSection()} > Read More</button></p>

      <h1 style={{textAlign:"center"}} onClick={()=> isSmileyFace(!smileyface)}>  { (smileyface) ? "😂" : "🦍 " }  </h1>


    </div>
     
  
  );
}

export default App;
