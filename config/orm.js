//requiring the connection to the database
var connection = require("./connection.js");
const express = require("express");
const app = express();

// creating different fuctions for each connection querys, inputing them into an object so it can be exported. The first function will also render to the handlebars. Rest will redirect to the app.get which goes back to the first function
var selectAllTips = function (res) {
	connection.query("SELECT employees.employee_id, tips.tip_id, employees.first_name, employees.last_name, tips.tip_amount, tips.tip_fees, tips.tip_final FROM employees INNER JOIN tips ON employees.employee_id = tips.employee_id", function (err, data) {
		if (err) {
			throw err;
		}
		//This is to get the total of Tips without creating a new Function
		var sumTips = 0;
		var length = data.length;

		for (var i = 0; i < length; i++) {
			sumTips = sumTips + data[i].tip_final;

		}
		console.log(sumTips);





		res.render("test", {
			tips: data,
			sumTips: sumTips
		});
	});
};
var selectTipsByEmp = function (res) {
	connection.query("SELECT * FROM tips WHERE employee_id = ?", function (err, data) {
		if (err) {
			throw err;
		}

		res.render("portal", {
			tips: data
		});
	});
};
var sumAllTips = function (res) {
	var sumTips = connection.query("SELECT SUM(tip_final) FROM tips", function (err, res) {
		if (err) {
			throw error;
		}
		console.log(sumTips);
		res.redirect("/portal", {
			tips: sumTips
		});
	});
};


var insertOneTip = function (tipp) {
	console.log(tipp);
	connection.query("INSERT INTO tips SET ?", {
		tip_amount: tipp.tipped,
		tip_fees: tipp.tipFee,
		tip_final: tipp.tipFinal,
		employee_id: tipp.id
	}, function (err, res) {
		if (err) {
			console.log(err);
			throw err;
		} else {
			console.log("Insert successfull");
		}

	});

	// res.render("/payment");

};

var updateOne = function (res, employee_id) {

	connection.query("UPDATE burgers SET devoured = ? WHERE employee_id = ?", [true, burgerID], function (err, result) {
		if (err) {
			throw err;
		}

		res.redirect("/");
	});
};

//This is for Employee id is 1 and for Alex//
var selectOneTips = function (res){connection.query("SELECT employees.employee_id, tips.tip_id, employees.first_name, employees.last_name, tips.tip_amount, tips.tip_fees, tips.tip_final FROM employees INNER JOIN tips ON employees.employee_id = tips.employee_id WHERE employees.employee_id = 1", function (err, data) {
		if (err) {
			throw err;
		}
		//This is to get the total of Tips without creating a new Function
		var sumTips = 0;
		var length = data.length;

		for (var i = 0; i < length; i++) {
			sumTips = sumTips + data[i].tip_final;

		}
		res.render("empOne", {
			tips: data,
			sumTips: sumTips
		});
	});
};

//This is for the second employee Syed//
var selectTwoTips = function (res){connection.query("SELECT employees.employee_id, tips.tip_id, employees.first_name, employees.last_name, tips.tip_amount, tips.tip_fees, tips.tip_final FROM employees INNER JOIN tips ON employees.employee_id = tips.employee_id WHERE employees.employee_id = 2", function (err, data) {
		if (err) {
			throw err;
		}
		//This is to get the total of Tips without creating a new Function
		var sumTips = 0;
		var length = data.length;

		for (var i = 0; i < length; i++) {
			sumTips = sumTips + data[i].tip_final;

		}
		res.render("empOne", {
			tips: data,
			sumTips: sumTips
		});
	});
};
//This is for Faisal//
var selectThreeTips = function (res){connection.query("SELECT employees.employee_id, tips.tip_id, employees.first_name, employees.last_name, tips.tip_amount, tips.tip_fees, tips.tip_final FROM employees INNER JOIN tips ON employees.employee_id = tips.employee_id WHERE employees.employee_id = 3", function (err, data) {
		if (err) {
			throw err;
		}
		//This is to get the total of Tips without creating a new Function
		var sumTips = 0;
		var length = data.length;

		for (var i = 0; i < length; i++) {
			sumTips = sumTips + data[i].tip_final;

		}
		res.render("empThree", {
			tips: data,
			sumTips: sumTips
		});
	});
};

var end = function () {
	connection.end();
};

var ORM = {
	selectAllTips: selectAllTips,
	insertOneTip: insertOneTip,
	updateOne: updateOne,
	selectTipsByEmp: selectTipsByEmp,
	end: end,
	sumTips: sumAllTips,
	selectOneTips: selectOneTips,
	selectTwoTips: selectTwoTips,
	selectThreeTips: selectThreeTips
};

module.exports = ORM;