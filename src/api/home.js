/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import {get} from './index';
export function getSliders(){
  return get('/api/slider');
}