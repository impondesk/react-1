import React from 'react'
import Component3 from './Component3'

export default function Component2({
    userName
}) {
  return (
    <div>
        Component2: {userName}
        <Component3 userName={userName}/>
    </div>
  )
}
