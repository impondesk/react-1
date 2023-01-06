import React from 'react'

export default function C1({m, changeMsg}) {
  return (
    <>
    <div>C1</div>
    <span>{JSON.stringify(m)}</span>
    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => changeMsg("From Child")}>Change    Message</button>
    </>
  )
}
