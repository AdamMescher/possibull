import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { symbols } from '../utils/symbols';

export default class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }

  handleSearchButtonClick = () => {
    const filtered = symbols.filter(stock => {
      return stock.symbol.toLowerCase().includes(this.state.search.toLowerCase()) || stock.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    if (filtered.length === 1) {
      fetch(`https://api.iextrading.com/1.0/stock/${filtered[0].symbol}/quote`)
        .then(response => response.json())
        .then(parsed => ({
          symbol: parsed.symbol,
          name: parsed.companyName,
          price: parsed.latestPrice,
          change: parsed.change,
          changePercent: parsed.changePercent
        }))
        .then(stockSymbol => this.props.history.push(`/stock`))
    } else {
      this.props.setSearchTerm(this.state.search)
      this.props.history.push(`/search`)
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      console.log('pressed enter');
    }
  }

  render() {
    return (
      <div>
      <input
        className='search-input'
        type='text' 
        placeholder='search'
        onChange={ this.handleChange.bind(this, 'search') } 
        onKeyDown={ this.handleKeyPress }/>
        <button
          className='search-button'
          onClick={ this.handleSearchButtonClick }>
          search
        </button>
      </div>
    )
  }
}