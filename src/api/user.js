/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import {get,post} from './index';
export const reg = (user)=>{
   return post('/api/reg',user);
}

export const login = (user)=>{
  return post('/api/login',user);
}

export const logout = (user)=>{
  return get('/api/logout');
}