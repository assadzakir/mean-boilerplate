exports = module.exports = function(app){

  app.get('/api/users',function (req,res){
    res.json([{name:"test"},{name:"hello"},{name:"work"}]);
  });

};