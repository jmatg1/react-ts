import * as actionTypes from '../actions/actionTypes'

export const initialState = {
  test: 'Text test'
}

const getTest = (state, action) => {
  return {
    ...state,
  }
}

const test = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST: return test(state, action)
    default: return state
  }
}

export default test
