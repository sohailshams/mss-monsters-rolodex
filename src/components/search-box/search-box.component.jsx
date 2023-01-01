import React, { Component } from 'react'

class SearchBox extends Component {
  render() {
    return (
        <input className='border-0 outline-none p-3 mb-10'
        type='search' 
        // className={this.props.className}
        placeholder={this.props.placeholder} 
        onChange={this.props.onChangeHandler} 
        />
    )
  }
}

export default SearchBox;