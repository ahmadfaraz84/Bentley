var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
	res.send("Server is Up and Running");
});

router.post("/findMax", function (req, res, next) {
	let array = req.body.array.split("/r").join("/");
	array = array.split(",");
	array = array.map((item) => {
		return parseInt(item);
	});
	findMax(array).then((result) => {
		res.send({
			highest: result,
		});
	});
});

function findMax(arr) {
	return new Promise((resolve, reject) => {
		let max = arr[0];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i];
			}
		}
		resolve(max);
	});
}

// Example Endpoints to test Logger

router.get("/alpha", function (req, res, next) {
	res.send("alpha");
});

router.post("/beta", function (req, res, next) {
	res.send("beta");
});

router.put("/gamma", function (req, res, next) {
	res.send("gamma");
});

router.delete("/delete", function (req, res, next) {
	res.send("delete");
});

module.exports = router;
