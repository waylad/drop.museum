import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { State } from 'reducers'
import { tempTx } from './New.actions'
import { NewView } from './New.view'

export const New = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  const { wallet, ready, tezos, accountPkh } = useSelector((state: State) => state.wallet)

  const tempTxCallback = (amount: number) => {
    dispatch(tempTx(amount))
  }

  return <NewView tempTxCallback={tempTxCallback} loading={loading} accountPkh={accountPkh} />
}
