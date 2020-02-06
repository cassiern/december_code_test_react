import React, { Component } from 'react';
import Main from './Main';
import '../public/style.css';
import '../style.css';


class Auth extends Component {
	constructor(){
		super();
		this.state = {
			hideAuth: false,
			currentUser: {
				email: '',
				password: '',
				isLogged: false,
				isMember: false
			}
		}
	}

	//Not DRY code but will work on it at a later time!
	handleRegisterChange = (e) => {
		//e.preventDefault();
		this.setState({
			currentUser: {
				...this.state.currentUser,
				[e.currentTarget.name]: e.currentTarget.value

			}
		}, ()=>{
			console.log(this.state, '<-- state after setting it')
		})
		
	}
	handleLoginChange = (e) => {
		//e.preventDefault();
		this.setState({
			currentUser: {
				...this.state.currentUser,
				[e.currentTarget.name]: e.currentTarget.value

			}
		})
		console.log(this.state, '<-- state after setting it')
	}

	loggingInUser = async(e, props) => {
		e.preventDefault();
		try{
			const userLogin = await fetch('http://localhost:9000/user/login', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state.currentUser),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log(userLogin, '<-- user login fetched')
			const parsedLogin = await userLogin.json();

			if(parsedLogin.status.code === 200){
				//console.log('User Logged in!!');
				console.log(parsedLogin.data.email, '<-- what you are setting the logged in state as')
				this.setState({
					currentUser: {
						email: parsedLogin.data.email,
						id: parsedLogin.data.password,
						isLogged: true,
						isMember: true
					}
				})
				console.log(this.state.currentUser, '<-- current user in the login route')
				this.props.passCurrentUser(this.state.currentUser);
			}

		}catch(err){

		}
	}

//LOGOUT ROUTE
	// logoutUser = async (e, props) => {
	// 	e.preventDefault();
	// 	try{
	// 		console.log(this.state.currentUser, '<-- current user about to be deleted');
	// 		const deletedUser = await fetch('http://localhost:9000/user/logout', {
				
	// 		})

	// 	}catch(err){
	// 		return err;
	// 	}
	// }




	registeringUser = async (e, props) => {
		e.preventDefault();
		console.log(this.state.currentUser, '<-- current user in the register')
		try{
			console.log(this.state.currentUser)
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
				} else{
					// console.log(newUser, '<-- NEW USER')
					const createUserResponse = await newUser.json()
					// console.log(createUserResponse.data, '<-- create user response')
					this.setState({
						currentUser: {
							email: createUserResponse.data.email,
							id: createUserResponse.data.id,
							isLogged: true,
							hideAuth: true	
						},
			
					}, ()=>{
						console.log(this.state.currentUser)
						this.props.passCurrentUser(this.state.currentUser);
					})
					
				}
		}catch(err){
			return(err)
		}
	}
	alreadyAMember = () => {
		this.setState({
			currentUser: {
				isMember: !this.state.currentUser.isMember
			}
		})
	}

	render(props){
		return(
			<div>
			<h1 className="header">Travel Board</h1>
			<div className="authContainer">

		{!this.state.hideAuth ?  
			<div>
			{!this.state.currentUser.isMember ?

			<div>

				<h2 className="mainText">Register</h2><br />
				<div className="signInContainer">
				<form onSubmit={this.registeringUser}>
					<input className="firstInputs" type="text" placeholder="Email" onChange={this.handleRegisterChange} name="email" value={this.state.currentUser.email}/><br />
					<input className="firstInputs" type="password" placeholder="Password" onChange={this.handleRegisterChange} name="password" value={this.state.currentUser.password} /><br />		
					<button className="btn">Register</button>
				</form>
				<button onClick={this.alreadyAMember} className="btn">Already a Member?</button>
				</div>
				</div>
				:
				<div>
				<h2 className="mainText">Login</h2><br />
				<div className="signInContainer">
				<form onSubmit={this.loggingInUser}>
					<input className="firstInputs" type="email" placeholder="Email" onChange={this.handleLoginChange} name="email" value={this.state.currentUser.email}/><br />
					<input className="firstInputs" type="password" placeholder="Password" onChange={this.handleLoginChange} name="password" value={this.state.currentUser.password}/><br />			
					<button className="btn">Login</button><br />		
				</form>
				<button onClick={this.alreadyAMember} className="btn">Not a Member?</button>
				</div>
				</div>
			}
			</div>
			:
			<div>
			<Main /> 
			</div>
			}
			</div>
			</div>
			)
	}
}
export default Auth;

