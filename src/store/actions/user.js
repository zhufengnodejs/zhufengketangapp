/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import * as types from '../action-types';
import {reg,login,logout,validate} from '../../api/user';
export default {
  reg(user){
    return {
      type:types.REG,
      payload:reg(user)
    }
  },
  login(user){
    return {
      type:types.LOGIN,
      payload:login(user)
    }
  },
  logout(){
    return {
      type:types.LOGOUT,
      payload:logout()
    }
  },
  validate(){
    return {
      type:types.VALIDATE,
      payload:validate()
    }
  }
}