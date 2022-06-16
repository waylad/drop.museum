import { combineReducers } from 'redux'

import { loading, LoadingState } from './loading'
import { newDrop, NewDropState } from './newDrop'
import { popup, PopupState } from './popup'
import { progressBar, ProgressBarState } from './progressBar'
import { toaster, ToasterState } from './toaster'
import { wallet, WalletState } from './wallet'

export const reducers = combineReducers({
  loading,
  progressBar,
  toaster,
  popup,
  newDrop,
  wallet,
})

export interface State {
  loading: LoadingState
  progressBar: ProgressBarState
  toaster: ToasterState
  popup: PopupState
  newDrop: NewDropState
  wallet: WalletState
}
