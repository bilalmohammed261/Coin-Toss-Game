import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossValue: 0,
    heads: 0,
    tails: 0,
  }

  tossCoin = () => {
    const tossValue = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      tossValue,

      heads: tossValue === 0 ? prevState.heads + 1 : prevState.heads,
      tails: tossValue !== 0 ? prevState.tails + 1 : prevState.tails,
    }))
  }

  render() {
    const {tossValue, heads, tails} = this.state
    const total = heads + tails

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="details">Heads (or) Tails</p>

          {tossValue === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="img"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="img"
            />
          )}

          <button type="button" className="btn" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
