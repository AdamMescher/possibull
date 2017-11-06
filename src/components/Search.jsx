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

  handleSearchButtonClick = searchTerm => {
    const filtered = symbols.filter( stock => {
      return stock.symbol.toLowerCase().includes(this.state.search.toLowerCase())   || 
             stock.name.toLowerCase().includes(this.state.search.toLowerCase())     || 
             stock.symbol.toLowerCase().startsWith(this.state.search.toLowerCase()) ||
             stock.name.toLowerCase().startsWith(this.state.search.toLowerCase())
      })
    if (filtered.length === 1 && filtered[0].symbol) {
      this.props.fetchStockQuote( filtered[0].symbol );
      this.setState({ search: '' })
      this.props.history.push( `/stock` );
    } else {
      this.props.setSearchTerm( this.state.search );
      this.setState({ search: '' })
      this.props.history.push( `/search` );
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      
    }
  }

  render() {
    return (
      <div className='search-container'>
      <input
        id='searchInput'
        className='search-input'
        type='text' 
        placeholder='search'
        onChange={ this.handleChange.bind(this, 'search') } 
        onKeyDown={ this.handleKeyPress }/>
        <input
          type='image'
          className='search-button'
          onClick={ this.handleSearchButtonClick }
          src={require('../assets/icons/icon-search-electricblue.svg')}/>
      </div>
    )
  }
}