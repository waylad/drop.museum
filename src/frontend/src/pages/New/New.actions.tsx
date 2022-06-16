import { TezosToolkit } from '@taquito/taquito'
import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { ERROR, INFO, SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { State } from 'reducers'

export const GET_NEW_DROP_STORAGE = 'GET_NEW_DROP_STORAGE'
export const getNewStorage = (accountPkh?: string) => async (dispatch: any, getState: any) => {
  const state: State = getState()

  if (!accountPkh) {
    dispatch(showToaster(ERROR, 'Public address not found', 'Make sure your wallet is connected'))
    return
  }

  const contract = accountPkh
    ? await state.wallet.tezos?.wallet.at('<INSERT_CONTRACT_ADDRESS>')
    : await new TezosToolkit((process.env.REACT_APP_RPC_PROVIDER as any) || 'https://hangzhounet.smartpy.io').contract.at(
        '<INSERT_CONTRACT_ADDRESS>',
      )

  const newStorage = await (contract as any).storage()

  dispatch({
    type: GET_NEW_DROP_STORAGE,
    newStorage,
  })
}

export const TEMP_TX_REQUEST = 'TEMP_TX_REQUEST'
export const TEMP_TX_RESULT = 'TEMP_TX_RESULT'
export const TEMP_TX_ERROR = 'TEMP_TX_ERROR'
export const tempTx = (amount: number) => async (dispatch: any, getState: any) => {
  const state: State = getState()

  if (!state.wallet.ready) {
    dispatch(showToaster(ERROR, 'Please connect your wallet', 'Click Connect in the left menu'))
    return
  }

  if (!(amount > 0)) {
    dispatch(showToaster(ERROR, 'Incorrect amount', 'Please enter an amount superior to zero'))
    return
  }

  if (state.loading) {
    dispatch(showToaster(ERROR, 'Cannot send transaction', 'Previous transaction still pending...'))
    return
  }

  try {
    const contract = await state.wallet.tezos?.wallet.at('<INSERT_CONTRACT_ADDRESS>')
    console.log('contract', contract)
    const transaction = await contract?.methods.tempTx(amount * 1000000).send()
    console.log('transaction', transaction)

    dispatch({
      type: TEMP_TX_REQUEST,
      amount,
    })
    dispatch(showToaster(INFO, 'Processing...', 'Please wait 30s'))

    const done = await transaction?.confirmation()
    console.log('done', done)
    dispatch(showToaster(SUCCESS, 'Transation done', 'All good :)'))

    dispatch({
      type: TEMP_TX_RESULT,
    })

    dispatch(getNewStorage(state.wallet.accountPkh))
  } catch (error: any) {
    console.error(error)
    dispatch(showToaster(ERROR, 'Error', error.message))
    dispatch({
      type: TEMP_TX_ERROR,
      error,
    })
  }
}
