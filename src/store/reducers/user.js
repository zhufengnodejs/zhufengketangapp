/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import * as types from '../action-types';
let initState = {
  user:{},
  error:''
}
export default function(state=initState,action){
  switch(action.type){
    case types.REG:
      if(action.payload.code ==0){
        return {
          ...state,
          user:action.payload.data,
          error:''
        }
      }else{
        return {
          ...state,
          error:action.payload.error,
          user:{}
        }
      }
    case types.LOGIN:
      if(action.payload.code ==0){
        return {
          ...state,
          user:action.payload.data,
          error:''
        }
      }else{
        return {
          ...state,
          error:action.payload.error,
          user:{}
        }
      }
    case types.LOGOUT:
      return {
        ...state,
        user:{},
        error:''
      }
    default:
      return state;
  }
}