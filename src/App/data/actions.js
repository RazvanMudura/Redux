export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const MARK_COMPLETE = "MARK_COMPLETE";
export const FILTER = "FILTER";

export const ALL_VISIBILITY_FILTER = {
  SHOW_ALL: "ALL",
  SHOW_COMPLETED: "COMPLETED",
  SHOW_ACTIVE: "ACTIVE",
};

export const addTodo = (name) => {
  return {
    type: ADD_TODO,
    name,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const markComplete = (id) => {
  return {
    type: MARK_COMPLETE,
    id,
  };
};

export const setFilter = (filter) => {
  return {
    type: FILTER,
    filter,
  };
};
