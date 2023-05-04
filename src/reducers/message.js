import { CLEAR_MESSAGE, SET_MESSAGE } from '../actions/type'

const initialState = {}

export default function messageReducers(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_MESSAGE:
      return { message: payload }

    case CLEAR_MESSAGE:
      return { message: '' }

    default:
      return state
  }
}
