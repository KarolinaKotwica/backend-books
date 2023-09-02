import mysql from 'mysql';

var con = mysql.createConnection({
    host: "lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "m8jpye2byk2jqreb",
    password: "j62jq1sq3n7une7x",
    database: "dhu536l3mlvx1p4y"
  });
  
export default con;

// mysql://m8jpye2byk2jqreb:j62jq1sq3n7une7x@lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/dhu536l3mlvx1p4y