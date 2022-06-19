import { MichelsonMap } from '@taquito/taquito'
import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { ERROR, INFO, SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { State } from 'reducers'

import code from './FA2_NFT.json'

export const ORIGINATE_REQUEST = 'ORIGINATE_REQUEST'
export const ORIGINATE_RESULT = 'ORIGINATE_RESULT'
export const ORIGINATE_ERROR = 'ORIGINATE_ERROR'
export const originate = () => async (dispatch: any, getState: any) => {
  const state: State = getState()

  if (!state.wallet.tezos) {
    dispatch(showToaster(ERROR, 'Please connect your wallet', 'Return to homepage'))
    return
  }

  if (!state.wallet.accountPkh) {
    dispatch(showToaster(ERROR, 'Please connect your wallet', 'Return to homepage'))
    return
  }

  if (state.loading) {
    dispatch(showToaster(ERROR, 'Cannot send transaction', 'Previous transaction still pending...'))
    return
  }

  try {
    const storage = {
      ledger: MichelsonMap.fromLiteral({}),
      token_metadata: MichelsonMap.fromLiteral({}),
      operators: MichelsonMap.fromLiteral({}),
      admin: state.wallet.accountPkh,
    }

    dispatch({
      type: ORIGINATE_REQUEST,
    })
    dispatch(showToaster(INFO, 'Originating...', 'Please wait 30s'))

    const op = await state.wallet.tezos.wallet.originate({ code, storage }).send()
    console.log(op)

    // const op = await state.wallet.tezos.contract.originate({ code, storage })
    // await op.confirmation()
    // console.log(`Deployed at ${op.contractAddress}`)

    // dispatch(showToaster(SUCCESS, 'Smart contract deployed', op.contractAddress || ''))

    // dispatch({
    //   type: ORIGINATE_RESULT,
    //   address: op.contractAddress,
    // })
  } catch (error: any) {
    console.error(error)
    dispatch(showToaster(ERROR, 'Error', error.message))
    dispatch({
      type: ORIGINATE_ERROR,
      error,
    })
  }
}
