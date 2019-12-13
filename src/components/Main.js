import React, { Component } from 'react';
import CreatedPosts from './posts/CreatePosts';
import EditPosts from './posts/EditPosts';
import ListPosts from './posts/ListPosts';
//import Auth from './Auth';
import '../public/style.css';
import './../style.css';
//import Navbar from './navbar/navbar';
// import Login from './login/login';
// import Register from './register/register';


class Main extends Component{
	constructor(){
		super();
		this.state = {
			posts: [],
			createAPost: false,
			showEditModal: false,
			currentUser: {
				isLogged: false,
				isMember: false,
				email: '',
				password: ''
			},

			postToEdit: {
				_id: null,
				text: '',
				image: ''
			}
		}
	}

	componentDidMount = () => {
		this.getPosts();
	}

//fetches posts from Express
	getPosts = async () => {
		try{
			const fetchingPosts = await fetch('http://localhost:9000/posts/', {
				credentials: 'include',
				method: 'GET'
			});
			console.log(fetchingPosts, '<-- fetching posts in get route')
			if(fetchingPosts.status !== 200){
				throw Error('404 from server');
			}
			const postsResponse = await fetchingPosts.json();
			console.log(postsResponse, '<-- post response');
			this.setState({
				posts: [...postsResponse.data]
			})
		}catch(err){
			console.log(err, '<-- error in getPosts')
		}
	}

//creating posts and sending it to Express
	addPost = async (post, e) => {
		e.preventDefault();
		console.log(post, e, '<-- post and target inside of addPost');
		try{
			const createdPost = await fetch('http://localhost:9000/posts/', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(post),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log(createdPost, '<-- post created!');
			if(createdPost.status !== 200){
				throw Error('404 from server')
			}
			const createdPostResponse = await createdPost.json();
			console.log(createdPostResponse.data, '<-- createdPostResponse')

			this.setState({
					posts: [...this.state.posts, createdPostResponse.data],
					text: createdPostResponse.data.text,
					image: createdPostResponse.data.image
			})
			console.log(this.state, '<-- STATE AFTER ADDING POST')

		}catch(err){
			console.log(err, '<-- error in adding a post');
			return err;
		}
	}

	//updating posts
	editPosts = async (e) => {
		e.preventDefault();
		try{
			const editRequest = await fetch('http://localhost:9000/posts/' + this.state.postToEdit._id, {
				method: 'PUT',
				credentials: 'include',
				body: JSON.stringify(this.state.postToEdit),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			if(editRequest.status !== 200){
				throw Error('Edit request rejected');
			}
			const editResponse = await editRequest.json();
			const editedPostArray = this.state.posts.map((post) => {
				if(post._id === editResponse.data._id){
					post = editResponse.data
				}
				return post;
			})
			this.setState({
				posts: editedPostArray,
				showEditModal: false
			})
			console.log(editResponse, '<-- edited response');
		}catch(err){
			console.log(err, '<-- error in edit route');
			return err;
		}
	}
	showModal = (post) => {
		console.log(post, '<-- post id in the modal');
		this.setState({
			postToEdit: post,
			showEditModal: !this.state.showEditModal
		})
	}
	handleFormChange = (e) => {
		this.setState({
			postToEdit: {
				...this.state.postToEdit,
				[e.target.name]: e.target.value
			}
		})
	}
	deletePost = async(id) => {
		console.log(id, '<-- id to be deleted');
		try{
			const deletePost = await fetch('http://localhost:9000/posts/' + id, {
				method: 'DELETE',
				//credentials: 'inlcude',
			})
			if(deletePost.status !== 200){
				throw Error('Error with deleting a post');
			}

			const deletePostJson = await deletePost.json();
			console.log(deletePostJson, '<-- JSON DELETED POST')
			this.setState({
				posts: this.state.posts.filter((post) => post._id !== id)
			})

		}catch(err){
			console.log(err, '<-- error in delete route')
			return err;
		}
	}

	createNewPost = (e) => {
		this.setState({
			createAPost: !this.state.createAPost
		})
	}



	render(){
		return(
			<div>
				<h1 className="mainText">Main Page</h1>
				{this.state.createAPost ? <CreatedPosts addPost={this.addPost} createNewPost={this.createNewPost}/> : <div className="btn-container"> <button className="btn" onClick={this.createNewPost}>Add Post</button> </div>}
				<ListPosts posts={this.state.posts} showModal={this.showModal} deletePost={this.deletePost}/>
				
				{this.state.showEditModal ? <EditPosts editPosts={this.editPosts} postToEdit={this.state.postToEdit} handleFormChange={this.handleFormChange}/> : null}

			</div>
		)
	}
}


export default Main;