const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const postRoute = require("./routes/post");

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
		console.log("Connected to mongoDB");
		app.listen(port, () => {
			console.log(`Listening for requests on port ${port}`);
		});
	})
	.catch(err => {
		console.log("Unable to connect to database:", err.message);
	});

app.use("/posts", postRoute);
