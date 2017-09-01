let express = require('express');
//let morgan = require('morgan');
let app = express();
app.listen(3000);
let sliders = require('./data/slider');
//当获取轮播图数据，当访问/slider的时候将数据返回
app.get('/api/slider',function(req,res){
  console.log(req.url);
  setTimeout(function(){
    res.json(sliders);
  },2000)
});
