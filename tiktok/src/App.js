import { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/Video";

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("/posts")
			.then(res => {
				if (res.ok) {
					return res.json();
				}
			})
			.then(data => {
				setPosts(data);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="app">
			<div className="videos_container">
				{posts.map(post => (
					<Video key={post._id} post={post} />
				))}
			</div>
		</div>
	);
}

export default App;
