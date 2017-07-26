import React, { Component } from 'react';

class SearchField extends Component {

  render() {
    return (
      <div className="search">
        <input
        type="text"
        placeholder="search for any location..."
        onChange={(e) => this.props.handleQuery(e)}/>
      </div>
    );
  }
}

export default SearchField;
