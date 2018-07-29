import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Stock Market App</h1>
  </header>
)

const Main = (props) => (
  <div className='main'>

    

  </div>
)

const Menu = () => (
  <div className='menu'>

      

  </div>
)

class StockMarketApp extends Component {
  
  state = {
    
  }



  componentDidMount() {
    const url = 'https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,news,chart&range=1m&last=10'

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }


      render () {
    return (
      <div className='App-container'>

        <Menu />
        <Main />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <StockMarketApp />

  </div>
)

export default App

