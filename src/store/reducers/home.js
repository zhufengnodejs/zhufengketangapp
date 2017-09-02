import * as types from '../action-types';
let initState = {
  currentLesson: 0,
  sliders: {
    loading: false,
    list: []
  },
  lessons: {
    loading: false,
    hasMore: true,
    list: [],
    limit: 5,
    offset: 0
  }
}
export default function (state = initState, action) {
  switch (action.type) {
    case types.CHANGE_LESSON:
      return {...state, currentLesson: action.currentLesson};
    case types.GET_SLIDERS:
      return {
        ...state, sliders: {
          ...state.sliders, loading: true
        }
      }
    case types.GET_SLIDERS_SUCCESS:
      return {
        ...state,
        sliders: {
          loading: false,
          list: action.payload
        }
      }
    case types.GET_LESSONS:
      return {
        ...state, lessons: {
          ...state.lessons,
          loading: true
        }
      }
    //
    case types.GET_LESSONS_SUCCESS:
      return {
        ...state, lessons: {
          ...state.lessons,
          loading: false,
          hasMore: action.payload.hasMore,
          offset: state.lessons.offset + action.payload.list.length,
          list: [...state.lessons.list, ...action.payload.list]
        }
      }
    default:
      return state;
  }
}