import React, { useState } from 'react'
import C1 from './c1'


export default function Page() {

  const [msg, updateMsg] = useState("Hello Page!");

  const changeMsg = (message) => {
    updateMsg(message);
  }

  return (
    <>
    <h1>{msg}</h1>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={() => updateMsg("Clicked from Page Button!")}>click</button>

      <br/>

      <C1 m={msg} changeMsg={changeMsg}></C1>


    </>
  )
}
