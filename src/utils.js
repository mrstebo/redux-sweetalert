export function createReducer(initialState, fnMap) {
  return (state = initialState, action) => {
    const {type, payload} = action;
    const handle = fnMap[type];
    return handle ? handle(state, payload) : state;
  };
}
