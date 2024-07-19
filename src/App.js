import React, { useState } from 'react';
import './App.css';
import circle from './Assests/circle.png';
import cross from './Assests/cross.png';
let data = ["","","","","","","","",""]
let classboxes = ["boxes","boxes","boxes","boxes","boxes","boxes","boxes","boxes","boxes"]
export default function App() {
  
  let [count,setcount] = useState(0);
  const [lock,setlock] = useState(false)
  const [draw,setdraw] = useState(false);
  const [winner,setwinner] = useState('')
  
  const toggle = (e,num)=>{
    if(lock){
      return 0
    }
    if(data[num] !== "")
      return 0
    if(count %2 === 0){
      classboxes[num] = `${classboxes[num]} cross`
      data[num] = "X"
      setcount(++count)
    }
    else{
      classboxes[num] = `${classboxes[num]} circle`
      data[num] = "O"
      setcount(++count)
    }
    checkwin()
  }

  const checkwin = ()=>{
    if(data[0] === data[1] && data[1] === data[2] && data[0]!==""){
      won(data[0])
    }
    else if(data[3] === data[4] && data[4] === data[5] && data[5]!==""){
      won(data[3])
    }
    else if(data[6] === data[7] && data[7] === data[8] && data[8]!==""){
      won(data[6])
    }
    else if(data[0] === data[3] && data[3] === data[6] && data[6]!==""){
      won(data[0])
    }
    else if(data[1] === data[4] && data[4] === data[7] && data[7]!==""){
      won(data[1])
    }
    else if(data[2] === data[5] && data[5] === data[8] && data[8]!==""){
      won(data[2])
    }
    else if(data[0] === data[4] && data[4] === data[8] && data[8]!==""){
      won(data[0])
    }
    else if(data[2] === data[4] && data[4] === data[6] && data[6]!==""){
      won(data[2])
    }
    else if(count === 9){
      setdraw(true)
      setlock(true)
    }
  }

  const won = (win)=>{
    setlock(true)
    setwinner(win)
  }

  const reset = ()=>{
    data = ["","","","","","","","",""]
    classboxes = ["boxes","boxes","boxes","boxes","boxes","boxes","boxes","boxes","boxes"]
    setlock(false)
    setcount(0)
    setwinner('')
    setdraw(false)
  }
  return (
    <div className='container'>
      <h1 className='title'>Tic Tac Toe</h1>
      <div className='board'>
        <div className='row1'>
          <div className={classboxes[0]} onClick={(e)=>{toggle(e,0)}}></div>
          <div className={classboxes[1]} onClick={(e)=>{toggle(e,1)}}></div>
          <div className={classboxes[2]} onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className='row2'>
          <div className={classboxes[3]} onClick={(e)=>{toggle(e,3)}}></div>
          <div className={classboxes[4]} onClick={(e)=>{toggle(e,4)}}></div>
          <div className={classboxes[5]} onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className='row3'>
          <div className={classboxes[6]} onClick={(e)=>{toggle(e,6)}}></div>
          <div className={classboxes[7]} onClick={(e)=>{toggle(e,7)}}></div>
          <div className={classboxes[8]} onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>
      {!draw && lock ?
      <div className='winner'>
        <h1>The Winner of the game is </h1>
        {winner==='X' ? <img src={cross} alt='cross'/> : <img src={circle} alt='cirle'/> }
      </div> 
      : null}
      {draw && lock ?
      <div className='winner'>
        <h1>The Game is a Draw between <img src={cross} alt='cross'/> and   <img src={circle} alt='cirle'/></h1>
      </div> 
      : null}
      
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  )
}
