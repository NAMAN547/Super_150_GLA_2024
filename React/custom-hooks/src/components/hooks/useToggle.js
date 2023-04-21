import React,{useState} from 'react'

const useToggle = (initialValue=true) => {

    const[toggle,isToggle] = useState(initialValue);

    const updateToggle = ()=>{

        isToggle(!toggle)
    }

  return [toggle, updateToggle]
}

export default useToggle