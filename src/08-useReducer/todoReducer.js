

export const todoReducer = ( initialState, action = {} ) => {

  switch ( action.type ) {
    case 'ABC':
      throw new Error ('Not implemented yet');
  
    default:
      return initialState;
  }

}