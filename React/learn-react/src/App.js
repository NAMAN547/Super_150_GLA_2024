import './App.css';
import Props from './components/Props';


function App() {
  return (

<div>

  <Props name="john doe" age="26" colour="black">

    <p> this is a component inside first prop compoent</p>
    <h1> this is a heading</h1>

  </Props>
  <Props name="karan" age="21" colour="pink" />
  <Props name="piyush" age="20" colour="orange" />



{/* <div>
<p> this is a react component</p>

</div>
<div>

<p> this is another nested element</p>

</div> */}
</div>

  );
}

export default App;
