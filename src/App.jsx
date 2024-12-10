import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  const [color,setColor] = useState("black")
  const changeBg = (color) =>{
    console.log("button Clicked");
    
    setColor(color)
  }
  return (
    <>
      <div style={{width:'100%',minHeight:"100vh",backgroundColor:color}} className='d-flex justify-content-center align-items-center '>
        <div style={{width:'40%'}}>
          <h1 className='text-center text-light mb-5'>Background color change</h1>
          <div className='d-flex justify-content-between align-items-center'>
        <button onClick={()=>changeBg("green")} type="button" class="btn btn-success">Green</button>
        <button onClick={()=>changeBg("blue")} type="button" class="btn btn-primary">Blue</button>
        <button onClick={()=>changeBg("red")} type="button" class="btn btn-danger">Red</button>
        <button onClick={()=>changeBg("yellow")} type="button" class="btn btn-warning">Yellow</button>
        </div>
        </div>

      </div>
    </>
  )
}

export default App
