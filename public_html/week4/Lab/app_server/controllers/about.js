/* GET About page */
module.exports.about = function(req, res){
  res.render('about', { title: 'About Page' });
};