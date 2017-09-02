/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React, {Component} from 'react';
import './index.less'
let vue = require('../../images/vue.png');
export default class LessonList extends Component {
  loadMore = ()=>{
    if(!this.props.lessons.loading){
      this.props.getLessons();
    }

  }
  render() {
    let {loading, hasMore, list} = this.props.lessons;
    return (
      <div className="lesson-list">
        <h4 className="lesson-title">
          <i className="iconfont icon-book"></i>
          <span>全部课程</span>
        </h4>
        {hasMore ? <button className="load-more" onClick={this.loadMore}>点击加载</button> :
          <div className="load-more">别扯了，已经到底了</div>}
        {
          list.map((item, index) => (
            <div key={index} className="lesson">
              <img src={vue}/>
              <p className="title">{item.lesson}</p>
              <p className="price">{item.price}</p>
            </div>
          ))
        }
        {hasMore ? <button className="load-more" onClick={this.loadMore}>点击加载</button> :
          <div className="load-more">别扯了，已经到底了</div>}
      </div>
    )
  }
}