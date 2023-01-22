import React, { useState } from 'react'

function Counter() {

	const [count, setCount] = useState(0);


	return (
		<>
			<div>Counter Value = {count}</div>

			<a className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded' onClick={() => {
				setCount(count+1);
			}}>Plus (+)</a>

			<a className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded' onClick={() => {
				setCount(count-1);
			}}>Minus (-)</a>
		</>
	)
}

export default Counter