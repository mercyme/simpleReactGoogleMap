import React, { Component } from 'react';
import SearchField from '../parts/searchField';
import LocationContainer from '../parts/locationContainer';

let GoogleMap = window.google;
let map, service, request, myLatLng, infoWindow, markers;
let boston = new GoogleMap.maps.LatLng(42.361145, -71.057083);
const infoWindowTemplate = '<div id="info" >'+
                    'infowindow'+
                    '</div>';

class MapPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      query : null,
      markers: [],
      locations: []
    };
  }

  createMarker = (place) =>{
      let placeLoc = place.geometry.location;
      let marker = new GoogleMap.maps.Marker({
        position: placeLoc,
        title: place.name,
        map: map
      });
      GoogleMap.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
      });
      markers.push(marker);
  }

  getLocations = (e) => {
      this.clearMarkers();
      let query = e.target.value;
      this.setState({query: e.target.value});
      if(query.length >= 1){
          request = {
              location: myLatLng,
              radius: '500',
              query: query
          };
          service = new GoogleMap.maps.places.PlacesService(map);
          service.textSearch(request, (results, status)=>{
              if(status === GoogleMap.maps.places.PlacesServiceStatus.OK){
                  this.setState({locations: results});
                  for(let i = 0;i <results.length; i++){
                      this.createMarker(results[i]);
                  }
                  this.setState({markers: markers});
                  map.setCenter(results[0].geometry.location);
              }
          });
      }
  }
  clearMarkers = () => {
    markers = this.state.markers;
    for(let j = 0;j < markers.length;j++){
      markers[j].setMap(null);
    }
  }

  focuslocation = (loc) => {
     map.setCenter(loc.geometry.location);
  }

  componentDidMount(){
    myLatLng = boston;
    const mapOptions = {
  		zoom: 15,
  		center: myLatLng,
  		mapTypeId: GoogleMap.maps.MapTypeId.ROADMAP
  	};
    map = new GoogleMap.maps.Map(this.refs.map, mapOptions);
    infoWindow = new GoogleMap.maps.InfoWindow({
        content: infoWindowTemplate
    });
  }

  render() {
    return (
      <div className="container">
        <SearchField handleQuery={this.getLocations}/>
        <div className={`map ${this.state.query ? 'smaller': ''}`}>
          <div ref="map" style={{ width: '100%', height: '100%', border: '1px solid grey'}}></div>
        </div>
          {this.state.query ? (
              <LocationContainer locations={this.state.locations} focusLocation={this.focuslocation} query={this.state.query}/>
          ) : (null)}
      </div>
    );
  }
}

export default MapPage;
