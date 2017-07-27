import React, { Component } from 'react';
import Location from './location';

class LocationContainer extends Component {
  constructor(props){
    super(props);
    this.state={index : 1};
  }

  render() {
    return (
        <div className="location-container">
            {this.props.query ? (
                <div>
                    <h2>Showing location results for "<i className="title">{this.props.query}</i> "</h2>
                    <p className="margin-horizontal">Currently focus on No. <span className="highlight">{this.props.currentIndex + 1}</span> result</p>
                </div>
                ) : (null)}
          <ul className="locations">
              {this.props.locations.map((location, index)=>{
                  return (
                      <Location locationObj={location} key={index} focusLocation={this.props.focusLocation} index={index}>
                      </Location>
                  )
              })}
          </ul>
        </div>
    );
  }
}

export default LocationContainer;
