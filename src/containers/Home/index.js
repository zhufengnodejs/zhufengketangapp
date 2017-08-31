/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React,{Component} from 'react';
import home from '../../store/actions/home';
import {connect} from 'react-redux';
import HomeHeader from "../../components/HomeHeader/index";
@connect(
  state=>state.home,
  {...home}
)
export default class Home extends Component{
    render(){
      return (
            <div>
              <HomeHeader currentLesson={this.props.currentLesson} changeLesson={this.props.changeLesson}/>
            </div>
        )
    }
}