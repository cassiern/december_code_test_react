import React from 'react';
//import App from '../../App';
import '../../public/style.css';


function Navbar(props){


	return(
		<div className="navbar-container">
			<a href="http://localhost:3000" className="logo" onClick={props.logout}>Travel Board <span className="divider">/</span></a>
			<a href="http://localhost:3000" className="logout" onClick={props.logout}>Logout</a>
		</div>

		)
}
export default Navbar;