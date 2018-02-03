import "babel-polyfill";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { searchTerm } from './actions';
import { stockDataObjectToDisplay } from '../SearchResults/actions';
import { fetchStockQuote } from '../utils/fetchHelpers';
import { symbols } from '../utils/symbols';

class Search extends Component {
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
    const filtered = symbols.filter(stock => {
      return stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())   ||
             stock.name.toLowerCase().includes(searchTerm.toLowerCase())     ||
             stock.symbol.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
             stock.name.toLowerCase().startsWith(searchTerm.toLowerCase());
    });
    if (filtered.length === 1 && filtered[0].symbol) {
      this.props.fetchStockQuote(filtered[0].symbol);
      this.setState({ search: '' });
      this.props.history.push(`/stock`);
    } else {
      this.props.setSearchTerm( searchTerm );
      this.setState({ search: '' });
      this.props.history.push(`/search`);
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
          onClick={() => {
            this.handleSearchButtonClick(this.state.search);
          }}
          src={ require('../assets/icons/icon-search-electricblue.svg') }
          alt={ `Icon of magnifying glass` }/>
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

const mapStateToProps = store => ({
  searchTerm: store.searchTerm,
  stockDataObjectToDisplay: store.stockDataObjectToDisplay
});

const mapDispatchToProps = dispatch  => ({
  fetchStockQuote: symbol => dispatch( fetchStockQuote( symbol ) ),
  setSearchTerm: term => dispatch( searchTerm( term ) ),
  setStockDataObjectToDisplay: stockData => dispatch(
    stockDataObjectToDisplay( stockData ) )
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Search)
);