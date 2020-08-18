import {
  ALL_VISIBILITY_FILTER,
  ADD_TODO,
  FILTER,
  MARK_COMPLETE,
} from "./actions";
import { combineReducers } from "redux";

const initialState = {
  todos: [
    {
      name: "TODO",
      completed: 0,
    },
  ],
  filter: ALL_VISIBILITY_FILTER.SHOW_ALL,
};

const todos = (state = initialState.todos, action) => {
  if (action.type === ADD_TODO) {
    return [
      ...state,
      {
        name: action.name,
        completed: 0,
      },
    ];
  }
  if (action.type === MARK_COMPLETE) {
    return state.map((todo, index) => {
      if (index === action.id) {
        return {
          ...todo,
          completed: true,
        };
      }
      return todo;
    });
  }
  return state;
};

const visibilityFilter = (state = initialState.filter, action) => {
  if (action.type === FILTER) {
    state = action.filter;
  }
  return state;
};

export const app = combineReducers({
  todos,
  filter: visibilityFilter,
});
