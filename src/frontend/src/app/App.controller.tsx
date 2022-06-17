import { TempleWallet } from '@temple-wallet/dapp'
import { Home } from 'pages/Home/Home.controller'
import { Mint } from 'pages/Mint/Mint.controller'
import { New } from 'pages/New/New.controller'
import { QrCode } from 'pages/QrCode/QrCode.controller'
import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from './App.components/Footer/Footer.view'
import { setWallet } from './App.components/Menu/Menu.actions'
import { Menu } from './App.components/Menu/Menu.controller'
import { Toaster } from './App.components/Toaster/Toaster.controller'
import { configureStore } from './App.store'
import { AppView } from './App.style'

export const store = configureStore({})

export const AppContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    return TempleWallet.onAvailabilityChange((available) => {
      if (available) dispatch(setWallet(new TempleWallet(process.env.REACT_APP_NAME || 'LIGOLIG')))
    })
  }, [dispatch])

  return (
    <BrowserRouter>
      <AppView>
        {/* <Menu /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/new/:address" element={<QrCode />} />
          <Route path="/mint/:address" element={<Mint />} />
        </Routes>
      </AppView>
      {/* <Footer /> */}
      <Toaster />
    </BrowserRouter>
  )
}

export const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
