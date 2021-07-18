const express = require("express");
const mongoose = require("mongoose");
const postRoute = require("./routes/post");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

mongoose
	.connect(process.env.DBURI, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(port, () => {
			console.log(`Connected to mongoDB port ${port}`);
		});
	});

app.use("/posts", postRoute);
