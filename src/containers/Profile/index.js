/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import user from '../../store/actions/user';
let bg = require('../../common/images/login_bg.png');
let profile = require('../../common/images/profile.png');
@connect(
  state=>state.user,
  user
)
export default class Profile extends Component{
    logout = ()=>{
      this.props.logout();
    }

    render(){
        return (
            <div className="profile">
              <img src={profile}/>
              {
                this.props.user.mobile?<span onClick={this.logout}>{this.props.user.mobile} 退出</span>:<Link to="/login">登录</Link>
              }
            </div>
        )
    }
}