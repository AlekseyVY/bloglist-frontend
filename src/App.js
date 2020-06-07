import React from 'react'
import Notification from "./components/Notification";
import MenuView from "./components/MenuView";
import Init from './components/Init'
import Container from "@material-ui/core/Container";

const App = () => {


  return (
      <Container>
          <div>
              <Init />
              <Notification />
              <MenuView />
          </div>
      </Container>
  )
}

export default App
