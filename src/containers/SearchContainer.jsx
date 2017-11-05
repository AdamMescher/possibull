import { dispatch } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';

const mapStateToProps = store => ({
  searchTerm: store.searchTerm
});

const mapDispatchToProps = dispatch => ({
  setSearchTerm: (term) => dispatch( searchTerm(term) )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);