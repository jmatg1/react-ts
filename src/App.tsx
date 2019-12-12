import React from 'react'
import { connect } from 'react-redux'

import logo from './logo.svg'
import './App.css'

interface Test {
  test: any
}

const App: React.FC = () => {
  // const { text } = props
  const a = {
    a: 2,
    b: 2,
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        />
        {/*{text}*/}
      </header>
    </div>
  )
}

// const mapStateToProps = (state: any) => ({
//   text: state.test.test
// })

export default connect()(App)
