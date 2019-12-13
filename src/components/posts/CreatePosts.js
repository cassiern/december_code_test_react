import React, { Component } from 'react';
import '../../public/style.css';

class CreatedPosts extends Component {
	constructor(){
		super();
		this.state = {
			text: '',
			image: ''
		}
	}
	updatePosts = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	render(){
		return(
			<div className="auth-container">
			<form onSubmit={this.props.addPost.bind(null, this.state)}>
				<input className="firstInputs" placeholder="Add Text" type="text" name="text" onChange={this.updatePosts} value={this.state.text}/> <br />
				<input className="firstInputs" placeholder="Add Image" type="text" name="image" onChange={this.updatePosts} value={this.state.image}/> <br />
				<div className="btn-container">
					<button className="closeBtns" type="submit">Submit</button>
					<button className="closeBtns" type="button" onClick={this.props.createNewPost}>Close</button>
				</div>
			</form>
			</div>

			)
	}
}


export default CreatedPosts;