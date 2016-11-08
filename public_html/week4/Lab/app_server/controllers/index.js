/* GET home page  LAB 04*/
module.exports.index = function(req, res){
  res.render('index', { title: 'Express now' });
};