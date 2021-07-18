import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

import styled from "styled-components";

function VideoSideBar({ post }) {
	const [isPostLiked, setIsPostLiked] = useState(false);

	const handleLike = () => {
		setIsPostLiked(!isPostLiked);
		if (isPostLiked) post.likes--;
		else post.likes++;
	};

	return (
		<SideBarWrapper>
			<SideBarIcon onClick={handleLike}>
				{isPostLiked ? (
					<FavoriteIcon style={{ color: "red" }} fontSize="large" />
				) : (
					<FavoriteBorderIcon style={{ color: "#fff" }} fontSize="large" />
				)}
				<p>{post.likes}</p>
			</SideBarIcon>
			<SideBarIcon>
				<MessageIcon style={{ color: "#fff" }} fontSize="large" />
				<p>{post.comment}</p>
			</SideBarIcon>
			<SideBarIcon>
				<ShareIcon style={{ color: "#fff" }} fontSize="large" />
				<p>{post.shared}</p>
			</SideBarIcon>
		</SideBarWrapper>
	);
}

export default VideoSideBar;

const SideBarWrapper = styled.div`
	position: absolute;
	right: 20px;
	bottom: 70px;
`;

const SideBarIcon = styled.div`
	color: #fff;
	margin-bottom: 25px;

	p {
		font-size: 12px;
		text-align: center;
	}
`;
