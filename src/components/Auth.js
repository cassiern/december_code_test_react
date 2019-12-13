import React, { Component } from 'react';
import Main from './Main';
import '../public/style.css';
import '../style.css';


class Auth extends Component {
	constructor(){
		super();
		this.state = {
			isLogged: false,
			hideAuth: false,
			isMember: false,
			currentUser: {
				email: '',
				password: ''
			}
		}
	}

	//Not DRY code but will work on it at a later time!
	handleRegisterChange = (e) => {
		//e.preventDefault();
		this.setState({
			currentUser: {
				[e.currentTarget.name]: e.currentTarget.value

			}
		})
		console.log(this.state, '<-- state after setting it')
	}
	handleLoginChange = (e) => {
		//e.preventDefault();
		this.setState({
			currentUser: {
				[e.currentTarget.name]: e.currentTarget.value

			}
		})
		console.log(this.state, '<-- state after setting it')
	}

	loggingIn = (e, props) => {
		e.preventDefault();
		console.log('this is the login')
		this.setState({
			isLogged: true,
			hideAuth: true
		})
	}


	registeringUser = async (e, props) => {
		e.preventDefault();
		console.log(this.state.currentUser, '<-- current user in the register')
		try{
		const newUser = await fetch('http://localhost:9000/user/register', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(this.state.currentUser),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		console.log(newUser, '<-- USER CREATED');
		if(newUser.status !== 200){
			throw Error('something went wrong in register route')
		}else{
			console.log(newUser, '<-- NEW USER')
			const createUserResponse = await newUser.json();
			//console.log(createUserResponse, '<-- create user response')
			this.setState({
				currentUser: {
					email: createUserResponse.email,
					password: createUserResponse.password
				},
				isLogged: true,
				hideAuth: true				
			})
		}
		}catch(err){
			return(err)
		}
	}
	alreadyAMember = () => {
		this.setState({
			isMember: !this.state.isMember
		})
	}

	render(props){
		return(
			<div className="auth-container">
		{!this.state.hideAuth ?  
			<div>
			{!this.state.isMember ?
			<div>	
				<h2 className="mainText">Register</h2><br />
				<form onSubmit={this.registeringUser}>
					<input className="firstInputs" type="text" placeholder="Email" onChange={this.handleRegisterChange} name="email" value={this.state.currentUser.email}/><br />
					<input className="firstInputs" type="password" placeholder="Password" onChange={this.handleRegisterChange} name="password" value={this.state.currentUser.password} /><br />		
					<button className="btn">Register</button>
				</form>
				<button onClick={this.alreadyAMember} className="btn">Already a member?</button>
				</div>
				:
				<div>
				<h2 className="mainText">Login</h2><br />
				<form onSubmit={this.loggingIn}>
					<input className="firstInputs" type="email" placeholder="Email" onChange={this.handleLoginChange} name="email" value={this.state.currentUser.email}/><br />
					<input className="firstInputs" type="password" placeholder="Password" onChange={this.handleLoginChange} name="password" value={this.state.currentUser.password}/><br />			
					<button type="submit" className="btn">Login</button><br />		
				</form>
				<button onClick={this.alreadyAMember} className="btn">Not a member?</button>
				</div>
			}
			</div>
			:
			<div>
			<Main /> 
			</div>
			}
			</div>
			)
	}
}
export default Auth;