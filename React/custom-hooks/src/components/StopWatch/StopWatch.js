import React,{useRef, useState} from 'react'


const StopWatch = () => {

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const refValue = useRef(null)

    const startTimer = ()=>{

        clearInterval(refValue.current)

       refValue.current =  setInterval(()=>{

            setSeconds(prevSeconds=> prevSeconds +  1)

        },1000)
      
    }

    if( seconds === 60){

      setSeconds(0);
      setMinutes((prevMinutes)=> prevMinutes + 1)
    }

    if( minutes === 60){

      setSeconds(0)
      setMinutes(0)
      setHours((prevHours)=> prevHours + 1)
    }

    const stopTimer = ()=>{

        clearInterval(refValue.current)
    }

  return (
         <div>
        
       <p>  Timer  <span> {hours}</span> : {minutes} : {seconds}</p>

       <button onClick={startTimer}> Start </button>

       <button onClick={stopTimer}> Stop </button>
        
       <button onClick={()=>{ 
        setSeconds(0);
        setMinutes(0);
        setHours(0)}}> Reset </button>
        </div>
  )
}

export default StopWatch