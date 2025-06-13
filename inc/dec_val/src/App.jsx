import React from 'react'
import { useState } from 'react'
const App = () => {
  let [a, seta] = useState(0)
  const addVal = () =>
  {
    console.log("clicked")
    seta(a+10)
    console.log(a);
    
  }
  function remove (){
    seta(a-10)
    console.log(a);
    
  }
  return (
    <div>
      <h1>here is the inc /dec value {a}</h1>
      <button onClick={addVal}>increase</button>
      <button onClick = {remove}>decrease</button>
    </div>
  )
}
export default App

