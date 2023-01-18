import React, { useContext } from 'react';
import { UserContext } from './App';

const Contact = () => {

	const user = React.useContext(UserContext);  


	return (
		
		<div>
			<h1 className="text-4xl mb-3">Contact</h1>
			<h1>Mail us on {user}</h1>
		</div>
		
	);
};

export default Contact;
