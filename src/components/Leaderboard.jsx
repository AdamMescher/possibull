import React from 'react';
import Header from './Header';
import { setSearchTerm } from '../containers/LeaderboardContainer';

const Leaderboard = (props) => {
  return (
    <div className='leaderboard-container'>
      <Header 
        history={props.history}
        setSearchTerm={props.setSearchTerm.bind(this)} />
      <section>
      <h1>LEADERBOARD</h1>
      <p>this is where the scores will go...eventually</p>
      </section>
    </div>
  )
}

export default Leaderboard;
