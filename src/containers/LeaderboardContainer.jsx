import { connect } from 'react-redux';
import { searchTerm } from '../actions/LeaderboardActions';
import Leaderboard from '../components/Leaderboard';

const mapStateToProps = store => ({
  searchTerm: store.searchTerm
});

const mapDispatchToProps = dispatch => ({
  setSearchTerm: (term) => dispatch( searchTerm( term ) )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);