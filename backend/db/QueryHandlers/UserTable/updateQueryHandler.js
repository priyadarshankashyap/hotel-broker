//This Function is used to update a User information in system. 
//Params is a JSON object { field : fieldval , .....}
module.exports = function(req,res,params,callback) {
    // query to update into User table.
    conn.query(userQueries.userUpdateQueries.updateUserInfo, params, function(err, result) {
      if(err) return err;
      else return;
    });
};