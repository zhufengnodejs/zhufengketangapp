/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React,{Component} from 'react';
import Tab from "../components/Tab/index";
export default class App extends Component{
    componentDidMount(){
      
    }
    render(){
        return (
            <div>
              {this.props.children}
              <Tab/>
            </div>
        )
    }
}