let express = require('express');
let session = require('express-session');
let MongoStore = require('connect-mongo')(session);
let bodyParser = require('body-parser');
let {User} = require('./model');
let app = express();
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
  res.header('Access-Control-Allow-Method', 'GET,POST');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method == 'OPTIONS') {
    res.end();
  } else {
    next();
  }
});
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'zfpx',
  store: new MongoStore({url: 'mongodb://127.0.0.1/zhufengketang'})
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000);
let sliders = require('./data/slider');
//当获取轮播图数据，当访问/slider的时候将数据返回
app.get('/api/slider', function (req, res) {
  res.json(sliders);
});
let lessons = require('./data/lessonList');
app.get('/api/lesson/:type', function (req, res) {
  let {limit, offset} = req.query;
  let type = req.params.type;
  offset = isNaN(offset) ? 0 : parseInt(offset)
  let data = JSON.parse(JSON.stringify(lessons));
  for (let i = 1; i <= data.list.length; i++) {
    let lesson = data.list[i - 1];
    lesson.lesson = `${type}-${offset + i}-${lesson.lesson}`;
  }
  if (offset == 10) {
    data.hasMore = false;
  }
  res.json(data);
});

app.post('/api/reg', function (req, res) {
  let user = req.body;
  User.findOne({mobile: user.mobile}, function (err, doc) {
    if (doc) {
      res.json({code:1,error:'此用户名已经存在!'});
    } else {
      User.create(user, function (err, doc) {
        req.session.user = doc;
        res.json({code:0,data:doc});
      })
    }
  })
});

app.post('/api/login', function (req, res) {
  let user = req.body;
  User.findOne(user, function (err, doc) {
    if (doc) {
      req.session.user = doc;
      res.json({code:0,data:doc});
    } else {
      res.json({code:1,error:'用户名或密码错误!'});
    }
  })
});

app.get('/api/logout', function (req, res) {
  req.session.user = null;
  res.json({code: 0});
});

app.get('/api/validate',function(req,res){
  console.log(req.session);
  if(req.session.user){
    res.json({code:0,data:req.session.user});
  }else{
    res.json({code:1,error:'未登录'});
  }
});
