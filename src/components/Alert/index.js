/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React,{Component} from 'react';
import './index.less'
export default class Alert extends Component{
    render(){
        return this.props.error?<div className="alert">{this.props.error}</div>:null;
    }
}