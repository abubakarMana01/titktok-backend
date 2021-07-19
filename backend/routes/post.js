const router = require("express").Router();
const Post = require("../models/post");

router.get("/", async (req, res) => {
	try {
		const post = await Post.find();
		res.json(post);
	} catch (err) {
		console.log(err);
	}
});

router.post("/", async (req, res) => {
	const post = new Post({
		username: req.body.username,
		likes: req.body.likes,
		comment: req.body.comment,
		shared: req.body.shared,
		url: req.body.url,
		description: req.body.description,
		musicName: req.body.musicName,
	});

	await post.save();
	res.send(post);
});

module.exports = router;
