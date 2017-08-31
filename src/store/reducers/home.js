import * as types from '../action-types';
let initState = {
  currentLesson: 0
}
export default function (state = initState, action) {
  switch (action.type) {
    case types.CHANGE_LESSON:
      return {currentLesson:action.currentLesson}
    default:
      return state;
  }
}