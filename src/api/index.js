/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import 'whatwg-fetch';
import 'es6-promise';
function get(url,limit ,offset) {
  return fetch(`${url}?limit=${limit}&offset=${offset}`,{
    method:'GET',
    credentials:'include',
    accept:'application/json'
  }).then(res => res.json());
}
function post(url, data) {
  return fetch(url,{
    method:'POST',
    credentials:'include',
    accept:'application/json',
    body:JSON.stringify(data)
  }).then(res => res.json());
}
export {get, post}