import * as types from '../action-types';
import {getSliders} from '../../api/home';
export default {
  changeLesson(currentLesson){
    return {
     type:types.CHANGE_LESSON,
     currentLesson
    }
  },
  getSliders(){
    return (dispatch)=>{
      dispatch({
        type:types.GET_SLIDERS
      });
      dispatch({
        type:types.GET_SLIDERS_SUCCESS,
        payload:getSliders()
      });
    }
  }
}