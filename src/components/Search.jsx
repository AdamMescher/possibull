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
          onClick={ () => console.log(this.state) }>
          search
        </button>
      </div>
    )
  }
}