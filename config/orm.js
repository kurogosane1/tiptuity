//requiring the connection to the database
var connection = require("./connection.js");


// creating different fuctions for each connection querys, inputing them into an object so it can be exported. The first function will also render to the handlebars. Rest will redirect to the app.get which goes back to the first function
var selectAllTips = function(res){
	connection.query("SELECT employees.employee_id, tips.tip_id, employees.first_name, employees.last_name, tips.tip_amount, tips.tip_fees, tips.tip_final FROM employees INNER JOIN tips ON employees.employee_id = tips.employee_id", function(err, data) {
		if (err){
			throw err;
		}
		//This is to get the total of Tips without creating a new Function
		var sumTips= 0;
		var length = data.length;
		
			for (var i =0; i< length; i++){
				sumTips = sumTips + data[i].tip_final;
				
			}
			console.log(sumTips);
			
	
		


		res.render("portal", { tips: data, sumTips: sumTips});
	});
};
var selectTipsByEmp = function(res){
	connection.query("SELECT * FROM tips WHERE employee_id = ?", function(err, data) {
		if (err){
			throw err;
		}

		res.render("portal", { tips: data });
	});
};
var sumAllTips = function(res){
	var sumTips = connection.query("SELECT SUM(tip_final) FROM tips", function(err, res){
		if(err){
			throw error;
		}
		console.log(sumTips);
		res.redirect("/portal",{tips: sumTips});
	});
};


var insertOneTip = function(res, tips){
	connection.query("INSERT INTO tips (employee_id) VALUES (?)", [tip_amount, tip_fees, tip_final], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/portal");
  });
};

var updateOne = function(res, employee_id){
	
	connection.query("UPDATE burgers SET devoured = ? WHERE employee_id = ?", [true, burgerID], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
};

var combinedAll = function(res,combinedTips){
	connection.query("SELECT * FROM combinedTips", function(err, data){
			if(err){
				throw err;
			}
			res.redirect("/portal")
	})

};

var end = function(){
	connection.end();
};

var ORM = {
	selectAllTips: selectAllTips,
	insertOneTip: insertOneTip,
	updateOne: updateOne,
	selectTipsByEmp: selectTipsByEmp,
	end: end,
	sumTips : sumAllTips
};

module.exports = ORM;