import React, { useContext } from 'react'
import { UserContext } from './App'

export default function Component5({
    userName
}) {
    const role = useContext(UserContext)
  return (
    <div>Component5: {userName} Role: {role}</div>
  )
}
