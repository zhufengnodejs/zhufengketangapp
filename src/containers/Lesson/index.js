/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
@connect(
  state=>state.user
)
export default class Lesson extends Component{
  render(){
   return <div>Lesson</div>
  }
}
