import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { State } from 'reducers'
import { tempTx } from './Mint.actions'
import { MintView } from './Mint.view'

export const Mint = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  const { wallet, ready, tezos, accountPkh } = useSelector((state: State) => state.wallet)
  const params = useParams()
  const address = params.address

  const tempTxCallback = (amount: number) => {
    dispatch(tempTx(amount))
  }

  return <MintView address={address} tempTxCallback={tempTxCallback} loading={loading} accountPkh={accountPkh} />
}
