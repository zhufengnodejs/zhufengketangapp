let express = require('express');
//let morgan = require('morgan');
let app = express();
app.listen(3000);
let sliders = require('./data/slider');
//当获取轮播图数据，当访问/slider的时候将数据返回
app.get('/api/slider',function(req,res){
    res.json(sliders);
});
let lessons = require('./data/lessonList');
app.get('/api/lesson/:type',function(req,res){
  let {limit,offset} = req.query;
  offset = isNaN(offset)?0:parseInt(offset)
  let data = JSON.parse(JSON.stringify(lessons));
  for(let i=1;i<=data.list.length;i++){
    let lesson = data.list[i-1];
    lesson.lesson = `${offset+i}-${lesson.lesson}`;
  }
  if(offset==10){
    data.hasMore = false;
  }
    res.json(data);

});