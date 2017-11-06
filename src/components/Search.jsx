import "babel-polyfill";
import React, {Component} from 'react';
import { symbols } from '../utils/symbols';
import PropTypes from 'prop-types';

export default class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      search: ''
    };
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleSearchButtonClick = searchTerm => {
    const filtered = symbols.filter( stock => {
      return stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())   ||
             stock.name.toLowerCase().includes(searchTerm.toLowerCase())     ||
             stock.symbol.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
             stock.name.toLowerCase().startsWith(searchTerm.toLowerCase());
    });
    if ( filtered.length === 1 && filtered[0].symbol ) {
      this.props.fetchStockQuote( filtered[0].symbol );
      this.setState({ search: '' });
      this.props.history.push( `/stock` );
    } else {
      this.props.setSearchTerm( searchTerm );
      this.setState( { search: '' } );
      this.props.history.push( `/search` );
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
          onClick={ () => {
            this.handleSearchButtonClick(this.state.search)
          } }
          src={require('../assets/icons/icon-search-electricblue.svg')}
          alt={`Icon of magnifying glass`}/>
      </div>
    );
  }
}

Search.propTypes = {
  fetchStockQuote: PropTypes.func,
  history: PropTypes.object,
  setSearchTerm: PropTypes.func,
  setStockDataObjectToDisplay: PropTypes.func
};
