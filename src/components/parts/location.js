import React, { Component } from 'react';

class Location extends Component {

    render() {
        let location = this.props.locationObj;
        return (
            <li className="location" onClick={() => this.props.focusLocation(location)}>
                <div>
                    <div className="location-title">
                        <img src={location.icon}/>
                        <span>{location.name}</span>
                    </div>
                    <div className="location-info">
                        <p>{location.formatted_address}</p>
                    </div>
                    <div className="location-footer">
                        {location.types.map((type, index) => {
                            return (
                                <span key={index}>{type}</span>
                            )
                        })}
                    </div>
                    <div className="overlay"><span>Click and check the place on map</span></div>
                </div>
            </li>
        );
    }
}

export default Location;
