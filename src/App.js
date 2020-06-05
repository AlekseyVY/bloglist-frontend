import React from 'react'
import Notification from "./components/Notification";
import MenuView from "./components/MenuView";
import ConditionalLogin from "./components/ConditionalLogin";

const App = () => {

  return (
    <div>
        <Notification />
        <ConditionalLogin />
        <MenuView />
    </div>
  )
}

export default App
