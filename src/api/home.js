/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import {get} from './index';
export function getSliders(){
  return get('/api/slider');
}
export function getLessons(currentLesson,limit,offset){
  return get(`/api/lesson/${currentLesson}`,limit,offset);
}