import {createActionsAndTypes} from './actionHandler';
export let createAssignment = createActionsAndTypes('CREATE_ASSIGNMENT');

export const uploadAssignment = data => ({
  type: createAssignment.REQUEST,
  payload: data,
});

export const setQuestion = data => ({type: 'SET_QUESTION', payload: data});

export const clearAssignmentReducer = () => ({
  type: 'CLEAR_ASSIGNMENT_REDUCER',
});
