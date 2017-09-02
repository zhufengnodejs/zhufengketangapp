/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React, {Component} from 'react';
import home from '../../store/actions/home';
import {connect} from 'react-redux';
import HomeHeader from "../../components/HomeHeader/index";
import HomeSlider from "../../components/HomeSlider/index";
import LessonList from "../../components/LessonList/index";
import scroll from '../../utils/scroll';
import session from '../../utils/session';
import * as keys from '../../utils/keys';
@connect(
  state => state.home,
  {...home}
)
export default class Home extends Component {
  componentDidMount(){
    if(this.props.lessons.list.length==0){
      this.props.getSliders();
      this.props.getLessons();
    }
    scroll(this.refs.content,this.props.getLessons,session.get(keys.HOME_SCROLL_TOP)||0);
  }
  componentWillUnmount(){
    session.set(keys.HOME_SCROLL_TOP,this.refs.content.scrollTop);
  }
  render() {
    return (
      <div>
        <HomeHeader currentLesson={this.props.currentLesson} changeLesson={this.props.changeLesson}/>
        <div ref="content" className="content">
            <HomeSlider sliders={this.props.sliders}/>
            <LessonList lessons={this.props.lessons} getLessons={this.props.getLessons}/>
        </div>
      </div>
    )
  }
}