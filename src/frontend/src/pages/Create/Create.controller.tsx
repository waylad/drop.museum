import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { State } from 'reducers'
import { create } from './Create.actions'
import { CreateView } from './Create.view'

export const Create = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  const { wallet, ready, tezos, accountPkh } = useSelector((state: State) => state.wallet)
  const { address } = useSelector((state: State) => state.contract)

  const createCallback = (name: string, description: string, image: string) => {
    dispatch(create(name, description, image))
  }

  return <CreateView address={address} createCallback={createCallback} loading={loading} accountPkh={accountPkh} />
}
