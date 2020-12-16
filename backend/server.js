const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

//MiddleWare for Logging every HTTP request
let mLogger = (req, res, next) => {
	let now = new Date();
	let timeString = `[${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}]`;
	let reqDetails = `    ${req.method}     ${req.url}     ${res.statusCode}`;
	console.log(timeString + reqDetails);
	next();
};

// const Port = process.env.Port || 4000;
var indexRouter = require("./routes/index");
app.use(mLogger);
app.use("/", indexRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log(`Server Started successfully on ${port}`);
});
