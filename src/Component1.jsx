import React from 'react'
import Component2 from './Component2'

export default function Component1({
    userName
}) {
  return (
    <div>
        Component1: {userName}
        <Component2 userName={userName}/>
    </div>
  )
}
