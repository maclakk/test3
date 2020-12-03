const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında','footer': 'Mehmet Burak ŞİMŞEK 2020' });
}

module.exports={

	hakkinda
}