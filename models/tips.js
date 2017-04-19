//requiring the different creating for database query
var ORM = require("../config/orm.js");

//creating a one funtion that will call which function is needed to be used then exporting it.
var tips = function (func, res, para){
	switch (func){
		case "all":
			ORM.selectAllTips(res);
			break;
		case "empOne":
			ORM.selectOneTips(res);
			break;
		case "empTwo":
			ORM.selectTwoTips(res);
			break;
		case "empThree":
			ORM.selectThreeTips(res);
			break;
		case "sumTips":
			ORM.sumAllTips(res);
			break
		case "insert":
			ORM.insertOneTip(res, para);
			break;
		case "update":
			ORM.updateOne(res, para);
			break;
	}
};

module.exports = tips;