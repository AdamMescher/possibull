import React, {Component} from 'react';

export default class Search extends Component {

  constructor(){
    super();
    this.state = {
      search: ''
    }
  }
  
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }

  render() {
    return (
      <div>
      <input
        className='search-input'
        type='text' 
        placeholder='search'
        onChange={this.handleChange.bind(this, 'search')} />
        <button
          className='search-button'
          onClick={ () => {
            const filtered = this.props.arrayOfStockSymbols.filter( stock => {
              return stock.symbol.toLowerCase().includes(this.state.search.toLowerCase()) || stock.name.toLowerCase().includes(this.state.search.toLowerCase())
            } )
            if(filtered.length === 1) {
              fetch(`https://api.iextrading.com/1.0/stock/${filtered[0].symbol}/quote`)
                .then( response => response.json())
                .then( parsed => ({
                  symbol: parsed.symbol,
                  name: parsed.companyName,
                  price: parsed.latestPrice,
                  change: parsed.change,
                  changePercent: parsed.changePercent
                }) )
                .then( cleanedData => console.log(cleanedData) )
            }
          } }>
          search
        </button>
      </div>
    )
  }
}