const initialState = {
  
}

const tasksReducer = (state=initialState, action) => {
  switch (action.type){
    case "SET_SELECTED_SERVICE":
      return {
        ...state,
        selectedTask: action.payload}
    default:
      return {...state}
  }
}


export default tasksReducer;