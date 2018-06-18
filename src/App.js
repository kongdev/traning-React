import React, { Component } from 'react'

import styled from 'styled-components'
import GuestBookApp from './components/GuestBookApp'

/*
injectGlobal`
  body {
    background : green;
  }
`*/
/*
const Container = styled.div`
  width : 640px;
  margin: 0 auto;
  background : ${(props)=> props.background}
`
Container.defaultProps = {
  background : 'red'
}*/

class App extends Component {
  render () {
    return (
      <div>
        <GuestBookApp/>
      </div>
    )
  }
}

export default App
