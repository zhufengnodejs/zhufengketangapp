/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import 'whatwg-fetch';
import 'es6-promise';
function get(url) {
  return fetch(url,{
    method:'GET',
    credentials:'include',
    headers:{
      accept:'application/json',
      'Content-Type':'application/json'
    },
  }).then(res => res.json());
}
function post(url, data) {
  return fetch(`${url}`,{
    method:'POST',
    credentials:'include',
    headers:{
      accept:'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  }).then(res => res.json());
}
export {get, post}