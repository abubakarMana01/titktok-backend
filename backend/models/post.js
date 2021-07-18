const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	username: { type: String, required: true },
	likes: { type: Number, required: true },
	comment: { type: Number, required: true },
	shared: { type: Number, required: true },
	url: { type: String, required: true },
	description: { type: String, required: true },
	musicName: { type: String, required: true },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
