/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React,{Component} from 'react';
import './index.less'
let bg = require('../../common/images/login_bg.png');
let profile = require('../../common/images/profile.png');
export default class Profile extends Component{
    render(){
        return (
            <div className="profile" style={{backgroundImage:bg}}>
              <img src={profile} alt=""/>
              <a href="">登录</a>
            </div>
        )
    }
}