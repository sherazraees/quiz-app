import {createActionsAndTypes} from './actionHandler';
export let loginUser = createActionsAndTypes('LOGIN_USER');
export let getAssignment = createActionsAndTypes('GET_ASSIGNMENT');
export let setAssignmentScore = createActionsAndTypes('SET_SCORE');
export let quizStatus = createActionsAndTypes('CHECK_QUIZ_STATUS');

export const getLogin = data => ({type: loginUser.REQUEST, payload: data});

export const setScore = data => ({
  type: setAssignmentScore.REQUEST,
  payload: data,
});

export const clearUserReducer = () => ({type: 'CLEAR'});

export const clearAssignment = () => ({type: 'CLEAR_ASSIGNMENT'});
