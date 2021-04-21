import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRooms.js/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar/Navbar'
import { GlobalStyle } from './globalStyle'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}
export default App
