/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React,{Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
@connect(
  state=>state.user
)
export default class PrivateRoute extends Component{
  render(){
    let {component:Component,user,...rest} = this.props;
    return <Route {...rest} render={
      () => user.mobile ? <Component {...this.props}/> : <Redirect to={{pathname: "/login"}}/>
    }/>
  }
}
