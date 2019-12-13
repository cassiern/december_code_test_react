import React from 'react';
import '../../public/style.css';
import '../../style.css';

const ListPosts = (props) => {
	const postList = props.posts.map((post) => {
		return (
			<div>
			<li key={post._id}>
				<span className="mainText"><strong>{post.text}</strong></span><br />
				<div className="image-container">
					<div className="image-border">
						<img src={post.image} className="img" alt=""/><br />
					</div>
				</div>
				<div className="btn-container"> 
					<button className="closeBtns" onClick={props.deletePost.bind(null, post._id)}>Delete</button>
					<button className="closeBtns" onClick={props.showModal.bind(null, post)}>Edit</button><br />
				</div>
			</li>
			</div>
			)
	})
	return(
		<div>
		<h2 className="mainText">Posts</h2>
		<ul className="image-container">
			{postList}
		</ul>
		</div>
		)
}

export default ListPosts;