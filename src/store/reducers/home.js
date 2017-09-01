import * as types from '../action-types';
let initState = {
  currentLesson: 0,
  sliders:{
    loading:false,
    list:[]
  }
}
export default function (state = initState, action) {
  switch (action.type) {
    case types.CHANGE_LESSON:
      return {...state,currentLesson:action.currentLesson};
    case types.GET_SLIDERS:
      return {...state,sliders:{
        ...state.sliders,loading:true
      }}
    case types.GET_SLIDERS_SUCCESS:
      return {
        ...state,
        sliders:{
          loading:false,
          list:action.payload
        }
      }
    default:
      return state;
  }
}