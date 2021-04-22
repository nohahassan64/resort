import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRooms.js/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar/Navbar'
import { GlobalStyle } from './globalStyle'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <GlobalStyle />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path="/resort" component={Home} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route exact component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}
export default App
