import React from 'react'
import Notification from "./components/Notification";
import MenuView from "./components/MenuView";
import Init from './components/Init'

const App = () => {


  return (
    <div>
        <Init />
        <Notification />
        <MenuView />
    </div>
  )
}

export default App
