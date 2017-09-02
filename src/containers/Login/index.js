/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
import profile from '../../common/images/profile.png';
import MHeader from "../../components/MHeader/index";
import {connect} from 'react-redux';
import user from '../../store/actions/user';
import Alert from "../../components/Alert/index";
@connect(
  state => state.user,
  user
)
export default class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let mobile = this.refs.mobile.value;
    let password = this.refs.password.value;
    let user = {mobile, password}
    this.props.login(user);
  }

  componentDidUpdate() {
    if (this.props.user.mobile)
      this.props.history.push('/profile');
  }

  render() {
    return (
      <div className="login">
        <MHeader title="登录"/>
        <div className="login-image">
          <img src={profile}/>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input ref="mobile" type="text" required={true} placeholder="手机号"/>
          <input ref="password" type="text" required={true} placeholder="密码"/>
          <p><Link to="/reg">前往注册</Link></p>
          <button>登&nbsp;录</button>
          <p>忘记密码?</p>
        </form>
        <Alert error={this.props.error}/>
      </div>
    )
  }
}