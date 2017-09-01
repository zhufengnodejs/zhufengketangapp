/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React, {Component} from 'react';
import home from '../../store/actions/home';
import {connect} from 'react-redux';
import HomeHeader from "../../components/HomeHeader/index";
import HomeSlider from "../../components/HomeSlider/index";
import LessonList from "../../components/LessonList/index";

@connect(
  state => state.home,
  {...home}
)
export default class Home extends Component {
  componentDidMount(){
    this.props.getSliders();
    this.props.getLessons();
  }
  render() {
    return (
      <div>
        <HomeHeader currentLesson={this.props.currentLesson} changeLesson={this.props.changeLesson}/>
        <div className="content">
          <HomeSlider sliders={this.props.sliders}/>
          <LessonList lessons={this.props.lessons} getLessons={this.props.getLessons}/>
        </div>
      </div>
    )
  }
}