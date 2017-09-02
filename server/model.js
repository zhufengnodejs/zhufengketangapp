/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let mongoose = require('mongoose');
mongoose.Promise = Promise;
let conn = mongoose.createConnection('mongodb://127.0.0.1/zhufengketang');
let UserSchema = new mongoose.Schema({
  mobile:String,
  password:String
});
exports.User = conn.model('User',UserSchema);