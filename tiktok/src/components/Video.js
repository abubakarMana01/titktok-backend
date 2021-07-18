import React, { useState, useRef } from "react";

import styled from "styled-components";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";

function VideoComponent({ post }) {
	function handleVideoPress() {
		if (isPlaying) {
			videoRef.current.pause();
			setIsPlaying(false);
		} else {
			videoRef.current.play();
			setIsPlaying(true);
		}
	}

	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<VideoWrapper>
			<Video
				onClick={handleVideoPress}
				ref={videoRef}
				className="video"
				loop
				src={post.url}
			></Video>
			<VideoFooter post={post} />
			<VideoSideBar post={post} />
		</VideoWrapper>
	);
}

const VideoWrapper = styled.div`
	max-width: 330px;
	height: 100%;
	background: white;
	scroll-snap-align: start;
	position: relative;
`;

const Video = styled.video`
	width: 100%;
	object-fit: cover;
`;

export default VideoComponent;
