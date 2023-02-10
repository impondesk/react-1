import React from 'react'
import Component5 from './Component5'

export default function Component4({
    userName
}) {
  return (
    <div>
        Component4: {userName}
        <Component5 userName={userName}/>
    </div>
  )
}
