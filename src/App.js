import React from 'react'
import { Router } from '@reach/router'

import { Provider } from './context'


import { Home } from './pages/Home'
// import { Detail } from './pages/Detail'

import { Helmet } from 'react-helmet'

export default function App () {
  return (
    <Provider>
      <Helmet>
        <title>Leonardo Ruiz Diaz - Web UI developer</title>
        <meta name='description' content='Web UI developer, with expirience in: ReactJs and VueJs mainly. This is my portfolio' />
      </Helmet>
      <Router>
        <Home path='/' />
        {/* <Detail path='detail/:id' /> */}
      </Router>

    </Provider>
  )
}
