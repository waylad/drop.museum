import { GET_NEW_DROP_STORAGE, TEMP_TX_REQUEST, TEMP_TX_RESULT, TEMP_TX_ERROR } from 'pages/New/New.actions'

export interface NewDropState {
  tempInput: number
  newDropStorage: any
  error?: any
}

const newDropDefaultState: NewDropState = {
  tempInput: 0,
  newDropStorage: {},
  error: undefined,
}

export function newDrop(state = newDropDefaultState, action: any): NewDropState {
  switch (action.type) {
    case GET_NEW_DROP_STORAGE:
      return {
        ...state,
        newDropStorage: action.newDropStorage,
      }
    case TEMP_TX_REQUEST:
      return {
        ...state,
        tempInput: action.tempInput,
        error: undefined,
      }
    case TEMP_TX_RESULT:
      return {
        ...state,
        tempInput: 0,
        error: undefined,
      }
    case TEMP_TX_ERROR:
      return {
        ...state,
        tempInput: 0,
        error: action.error,
      }

    default:
      return state
  }
}
