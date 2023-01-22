import React, { useContext } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { UserContext } from './App';

const Contact = () => {

	const user = React.useContext(UserContext);

	const [counter, setCounter] = useState(1);


	const fn = useCallback(() => {
		setCounter(counter + 1);
	}, [counter]);

	useEffect(() => {
		console.log("Page loaded!");
	}, []);

	useEffect(() => {
		console.log("ue loaded!");

		if (!(counter % 2)) return; // this will stop the loop if counter is not even

		// fn();
	}, [fn, counter]);



	return (

		<div>
			<h1 className="text-4xl mb-3">Contact</h1>
			<h1>Mail us on {user}</h1>

			<button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center' onClick={fn}>add +1 count {counter}</button>

		</div>

	);
};

export default Contact;
