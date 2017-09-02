import * as types from '../action-types';
import {getSliders,getLessons} from '../../api/home';
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
  },
  getLessons(){
    return (dispatch,getState)=>{
      let {currentLesson,lessons:{
        loading,limit,offset,hasMore
      }} = getState().home;
      if(!loading&&hasMore){
        dispatch({
          type:types.GET_LESSONS
        });
        dispatch({
          type:types.GET_LESSONS_SUCCESS,
          payload:getLessons(currentLesson,limit,offset)
        });
      }
    }
  }
}