import React, { Component } from 'react';
import Location from './location';

class LocationContainer extends Component {
  render() {
    return (
        <div className="location-container">
            {this.props.query ? (
                <h2>Showing location results for "<i className="title">{this.props.query}</i> "</h2>
            ) : (null)}
          <ul className="locations">
              {this.props.locations.map((location, index)=>{
                  return (
                      <Location locationObj={location} key={index} focusLocation={this.props.focusLocation}>
                      </Location>
                  )
              })}
          </ul>
        </div>
    );
  }
}

export default LocationContainer;
