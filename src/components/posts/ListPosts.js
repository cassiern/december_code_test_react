import React from 'react';
import '../../public/style.css';
import '../../style.css';

const ListPosts = (props) => {
	console.log(props.title, '<-- PROPS passed into LISTposts')
	const postList = props.posts.map((post) => {
		return (
			<div key={post._id} className="flex-1 flex-wrap">
			<div className="w-1/3 mb-4 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex-1 mb-4 justify-between leading-normal">
			
			<li>
				<div className="max-w-sm w-full lg:max-w-full lg:flex ">
					<img src={post.image} className="h-48 lg:h-auto lg:w-48 flex-wrap bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" alt=""/><br />
				</div>
				<div className="">
					<div className="p-2 text-gray-700 text-base">{post.title}</div>
					<p className="text-gray-700 text-base p-2">{post.text}</p>
				</div>
				<div className="btn-container"> 
					<button className="closeBtns" onClick={props.deletePost.bind(null, post._id)}>Delete</button>
					<button className="closeBtns" onClick={props.showModal.bind(null, post)}>Edit</button><br />
				</div>
			</li>

			</div>

<div class="flex flex-wrap -mb-4 justify-around" key={post._id}>
  <div class="w-1/3 mb-4 px-2 py-2 m-2 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex-1 mb-4 justify-between leading-normal">
			<li>
				<div className="max-w-sm w-full lg:max-w-full lg:flex">
					<img src={post.image} className="h-48 lg:h-auto lg:w-48 flex-wrap bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" alt=""/><br />
					<p className="text-gray-700 text-base p-2">{post.text}</p>
							<button className="closeBtns" onClick={props.deletePost.bind(null, post._id)}>Delete</button>
							<button className="closeBtns" onClick={props.showModal.bind(null, post)}>Edit</button><br />
						
				</div>
				</li>
				</div>
			  
  <div class="w-1/3 mb-4 bg-gray-500 mx-2 h-64 lg:h-64 lg:w-48 items-stretch px-2 py-2 m-2 content-center border-gray-400"></div>
  <div class="w-1/3 mb-4 bg-gray-400 mx-2 h-64 lg:h-64 lg:w-48 items-stretch px-2 py-2 m-2 content-center border-gray-400"></div>
  <div class="w-1/3 mb-4 bg-gray-500 mx-2 h-64 lg:h-64 lg:w-48 items-stretch px-2 py-2 m-2 content-center border-gray-400"></div>
  <div class="w-1/3 mb-4 bg-gray-400 mx-2 h-64 lg:h-64 lg:w-48 items-stretch px-2 py-2 m-2 content-center border-gray-400"></div>
  <div class="w-1/3 mb-4 bg-gray-400 mx-2 h-64 lg:h-64 lg:w-48 items-stretch px-2 py-2 m-2 content-center border-gray-400"></div>
  <div class="w-1/3 mb-4 bg-gray-500 mx-2 h-64 lg:h-64 lg:w-48 items-stretch px-2 py-2 m-2 content-center border-gray-400"></div>
  <div class="w-1/3 mb-4 bg-gray-400 mx-2 h-64 lg:h-64 lg:w-48 items-stretch px-2 py-2 m-2 content-center border-gray-400"></div>
  <div class="w-1/3 mb-4 bg-gray-500 mx-2 h-64 lg:h-64 lg:w-48 items-stretch px-2 py-2 m-2 content-center border-gray-400"></div>
  <div class="w-1/3 mb-4 bg-gray-400 mx-2 h-64 lg:h-64 lg:w-48 items-stretch px-2 py-2 m-2 content-center border-gray-400"></div>
</div>			</div>
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
