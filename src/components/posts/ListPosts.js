import React from 'react';
import '../../public/style.css';
import '../../style.css';

const ListPosts = (props) => {

	const postList = props.posts.map((post) => {
		console.log(post.text, '<-- props test inLISTPOST')
		console.log(post.title, '<-- props title inLISTPOST')

		return (

			<div className="flex flex-wrap -mb-4 justify-around" key={post._id}>
			  <div className="w-1/3 mb-4 px-2 py-2 m-2 rounded border-r border-b border-l border-gray-400 lg:border-l-1 lg:border-t lg:border-gray-400 bg-white p-4 justify-between leading-normal">
					<li>
						<div className="max-w-sm min-w-full w-auto lg:max-w-full lg:flex justify-center">
							<img src={post.image} className="h-48 lg:h-auto lg:w-auto flex-wrap bg-cover rounded text-center overflow-hidden" alt="post cards"/><br />		
						</div>
							<h3>{post.title}</h3>
							<p className="text-gray-700 text-base p-2 my-2">{post.text}</p>
							<button className="specialButtons" onClick={props.deletePost.bind(null, post._id)}>Delete</button>
							<button className="specialButtons" onClick={props.showModal.bind(null, post)}>Edit</button><br />
					</li>
				</div>			
			</div>
			)
	})

	const passPostLists = () => {
		
	}

	return(
		<div>
		<h2 className="mainText">Travel Pins</h2>
		<ul className="image-container">
			{postList}
		</ul>
		</div>
		)
}

export default ListPosts;
