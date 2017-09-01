/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less'
export default class HomeSlider extends Component {
  constructor() {
    super();
    this.state = {index:0};
  }

  render() {
    let swipeOptions = {
      continuous: true, auto: 1000, callback: (index) => {
        this.setState({index});
      }
    };
    let {loading,list} = this.props.sliders;
    return (
      <div className="sliders">
        {loading?<div>加载中</div>:null}
        {list.length>0?<ReactSwipe  className="carousel" swipeOptions={swipeOptions}>
          {
            list.map((item, index) => (
              <div key={index}><img src={item} alt=""/></div>
            ))
          }
        </ReactSwipe>:null}
        <div className="dots">
          {
            list.map((item, index) => (
              <span key={index} className={this.state.index == index ? 'active' : ''}></span>
            ))
          }
        </div>
      </div>
    )
  }
}