import React from 'react';
//import App from '../../App';
import '../../public/style.css';


function Navbar(props){


	return(
		<div className="navbar-container">
			<h1 className="logo">Travel Board</h1>
			<a href="http://localhost:3000" className="logout" onClick={props.logout}>Logout</a>
		</div>

		)
}
export default Navbar;