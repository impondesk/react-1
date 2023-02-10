import React from 'react'
import Component4 from './Component4'

export default function Component3({
    userName
}) {
  return (
    <div>
        Component3: {userName}
        <Component4 userName={userName}/>
    </div>
  )
}
