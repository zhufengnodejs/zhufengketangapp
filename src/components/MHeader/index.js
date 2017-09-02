/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './index.less'
class MHeader extends Component {
  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="m-header">
        <i className="iconfont icon-fanhui" onClick={this.goBack}/>
        {this.props.title}
      </div>
    )
  }
}
export default withRouter(MHeader);