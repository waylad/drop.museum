import { useDispatch, useSelector } from 'react-redux'

import { State } from 'reducers'
import { originate } from './Originate.actions'
import { OriginateView } from './Originate.view'

export const Originate = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  const { wallet, ready, tezos, accountPkh } = useSelector((state: State) => state.wallet)

  const originateCallback = () => {
    dispatch(originate())
  }

  return <OriginateView originateCallback={originateCallback} loading={loading} accountPkh={accountPkh} />
}
