import React from "react";
import styled from "styled-components";
import MusicNote from "@material-ui/icons/MusicNote";

function VideoFooter({ post }) {
	return (
		<VideoBottom>
			<VideoFooterText>
				<h3>@{post.username}</h3>
				<p>{post.description}</p>
			</VideoFooterText>
			<VideoFooterBottom>
				<VideoFooterBottomLeft>
					<MusicNote fontSize="small" style={{ color: "#f9f9f9" }} />
					<p>{post.musicName}</p>
				</VideoFooterBottomLeft>
				<img
					width={30}
					height={30}
					src="https://static.thenounproject.com/png/934821-200.png"
					alt=""
				/>
			</VideoFooterBottom>
		</VideoBottom>
	);
}

export default VideoFooter;

const VideoBottom = styled.div`
	width: 100%;
	position: absolute;
	bottom: 15px;
	left: 15px;
`;

const VideoFooterText = styled.div`
	color: #f9f9f9;
	margin-bottom: 2px;

	h3 {
		margin-bottom: 5px;
		font-size: 12px;
	}
	p {
		color: #f9f9f9;

		font-size: 11px;
	}
`;

const VideoFooterBottom = styled.div`
	color: #f9f9f9;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	p {
		font-size: 11px;
		margin-left: 5px;
	}

	img {
		position: relative;
		right: 30px;
		filter: invert();
		animation: musicDiscRotate infinite 5s linear;
	}
`;

const VideoFooterBottomLeft = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
`;
