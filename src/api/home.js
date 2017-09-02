/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import {get} from './index';
export function getSliders(){
  return get('/api/slider');
}
export function getLessons(currentLesson=0,limit=5,offset=0){
  return get(`/api/lesson/${currentLesson}?limit=${limit}&offset=${offset}`);
}