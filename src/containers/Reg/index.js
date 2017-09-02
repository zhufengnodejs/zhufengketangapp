/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React, {Component} from 'react';
import './index.less'
import profile from '../../common/images/profile.png';
import MHeader from "../../components/MHeader/index";
import {connect} from 'react-redux';
import user from '../../store/actions/user';
import Alert from "../../components/Alert/index";
@connect(
  state => state.user,
  user
)
export default class Reg extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let mobile = this.refs.mobile.value;
    let password = this.refs.password.value;
    let user = {mobile,password}
    this.props.reg(user);
  }
  //只有在Did里才能拿到最新的state
  componentDidUpdate(){
    console.log('componentDidUpdate',this.props.user);
    if(this.props.user.mobile)
      this.props.history.push('/profile');
  }

  render() {
    return (
      <div className="reg">
        <MHeader title="注册"/>
        <div className="reg-image">
          <img src={profile}/>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" required={true} placeholder="手机号" ref="mobile"/>
          <input type="text" required={true} placeholder="密码" ref="password"/>
          <button type="submit">注&nbsp;册</button>
        </form>
        <Alert error={this.props.error}/>
      </div>
    )
  }
}