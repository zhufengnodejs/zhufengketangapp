/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React,{Component} from 'react';
import './index.less'
let vue = require('../../images/vue.png');
export default class Detail extends Component{
    componentWillMount(){
      if(!this.props.location.state){
        this.props.history.push('/');
      }
    }
    render(){
      console.log(this.props.location);
      let {url,lesson, price} = this.props.location.state||{};
        return (
            <div className="lesson-detail">
              <p>{lesson}</p>
              <img src={vue}/>
              <p>{price}元</p>
            </div>
        )
    }
}