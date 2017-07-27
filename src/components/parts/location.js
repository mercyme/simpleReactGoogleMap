import React, { Component } from 'react';

class Location extends Component {

    render() {
        let location = this.props.locationObj;
        let address = location.formatted_address.split(',');
        return (
            <li className="location" onClick={() => this.props.focusLocation(location, this.props.index)}>
                <div>
                    <div className="location-title">
                        <span>{this.props.index+1}. {location.name}</span>
                        <div className="overlay"><span>Click and check the place on map</span></div>
                        <img src={location.icon} alt="icon"/>
                    </div>
                    <div className="location-info">
                        <p><b>Street: </b>{address[0]}</p>
                        <p><b>City: </b>{address[1]}</p>
                        <p><b>State and Zip Code: </b>{address[2]}</p>
                        <p><b>Country: </b>{address[3]}</p>
                    </div>
                    <div className="location-footer">
                        {location.types.length > 1 ? (<p>Location Types:</p>) : (<p>Location Type:</p>)}
                        {location.types.map((type, index) => {
                            let typeString = type.split('_').join(' ');
                            return (
                                <span key={index}>{index + 1}
                                  <span className="type">{typeString}</span>
                                </span>
                            )
                        })}
                    </div>
                </div>
            </li>
        );
    }
}

export default Location;
