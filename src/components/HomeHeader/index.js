import React, {Component} from 'react';
import './index.less';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
export default class HomeHeader extends Component {
  constructor() {
    super();
    this.state = {showMenu: false};
  }

  switchMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  }

  handleClick = (event)=>{
    let id = event.target.dataset.id;
    this.props.changeLesson(id);
    this.setState({showMenu: !this.state.showMenu});
  }

  render() {
    return (
      <div className="home-header">
        <div className="home-logo">
          <img src={require('../../common/images/logo.png')}/>
          <div onClick={this.switchMenu}>
            {
              this.state.showMenu ? <i className="iconfont icon-guanbi"></i> : <i className="iconfont icon-uilist"></i>
            }
          </div>
        </div>
        <TransitionGroup>
        {
          this.state.showMenu ?
              <CSSTransition
                timeout={1000}
                classNames="fadeIn"
              >
                <ul className="home-menu" onClick={this.handleClick}>
                  <li className={this.props.currentLesson==1?'active':''} data-id="1">JavaScript课程</li>
                  <li className={this.props.currentLesson==2?'active':''} data-id="2">Node.js课程</li>
                  <li className={this.props.currentLesson==3?'active':''} data-id="3">HTML5课程</li>
                </ul>
              </CSSTransition>
            : null
        }
        </TransitionGroup>
      </div>
    )
  }
}