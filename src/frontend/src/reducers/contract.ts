import { ORIGINATE_REQUEST, ORIGINATE_RESULT, ORIGINATE_ERROR } from 'pages/Originate/Originate.actions'

export interface ContractState {
  address?: string
  error?: any
}

const contractDefaultState: ContractState = {
  address: undefined,
  error: undefined,
}

export function contract(state = contractDefaultState, action: any): ContractState {
  switch (action.type) {
    case ORIGINATE_REQUEST:
      return {
        ...state,
        address: undefined,
        error: undefined,
      }
    case ORIGINATE_RESULT:
      return {
        ...state,
        address: action.address,
        error: undefined,
      }
    case ORIGINATE_ERROR:
      return {
        ...state,
        address: undefined,
        error: action.error,
      }

    default:
      return state
  }
}
