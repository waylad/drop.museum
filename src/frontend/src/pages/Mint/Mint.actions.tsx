import { MichelsonMap } from '@taquito/taquito'
import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { ERROR, SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { State } from 'reducers'

export const MINT_REQUEST = 'MINT_REQUEST'
export const MINT_RESULT = 'MINT_RESULT'
export const MINT_ERROR = 'MINT_ERROR'
export const mint = (name: string, description: string, image: string) => async (dispatch: any, getState: any) => {
  const state: State = getState()

  if (!state.wallet.tezos) {
    dispatch(showToaster(ERROR, 'Please connect your wallet', 'Please return to homepage'))
    return
  }

  if (!state.wallet.accountPkh) {
    dispatch(showToaster(ERROR, 'Please connect your wallet', 'Please return to homepage'))
    return
  }

  if (state.loading) {
    dispatch(showToaster(ERROR, 'Cannot send transaction', 'Previous transaction still pending...'))
    return
  }

  if (!state.contract.address) {
    dispatch(showToaster(ERROR, 'Contract not found', 'Please return to homepage'))
    return
  }

  if (!(name && description && image)) {
    dispatch(showToaster(ERROR, 'Please fill all infos', 'Name, Description and Image'))
    return
  }

  try {
    dispatch({
      type: MINT_REQUEST,
    })
    dispatch(showToaster(SUCCESS, 'Creating token...', 'Please wait 30s'))

    const contract = await state.wallet.tezos?.wallet.at(state.contract.address)
    const token_id = 0
    const token_info = MichelsonMap.fromLiteral({
      name: Buffer.from('TEST').toString('hex'),
      symbol: Buffer.from('TEST').toString('hex'),
      description: Buffer.from('0').toString('hex'),
    })
    const mintTransaction = await contract.methods.mint_token(token_id, token_info, token_id).send()
    const mintDone = await mintTransaction.confirmation()
    console.log('done', mintDone)

    dispatch(showToaster(SUCCESS, 'Token minted', 'Airdrop ready for use!'))

    dispatch({
      type: MINT_RESULT,
      mintConfirmation: mintDone,
    })
  } catch (error: any) {
    console.error(error)
    dispatch(showToaster(ERROR, 'Error', error.message))
    dispatch({
      type: MINT_ERROR,
      error,
    })
  }
}
