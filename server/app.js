/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let express = require('express');
let app = express();
app.get('/',function(req,res){
  res.send('hello');
});
app.listen(8080);
