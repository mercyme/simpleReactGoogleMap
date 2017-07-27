import React, { Component } from 'react';
import SearchField from '../parts/searchField';
import LocationContainer from '../parts/locationContainer';

let GoogleMap = window.google;
let map, service, request, myLatLng, infoWindow, markers;
let zenefits = new GoogleMap.maps.LatLng(37.785341, -122.395377);
let boston = new GoogleMap.maps.LatLng(42.361145, -71.057083);

class MapPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      query : null,
      markers: [],
      locations: [],
      index: 0
    };
  }
  componentDidMount(){
        myLatLng = boston;
        const mapOptions = {
            zoom: 15,
            center: myLatLng,
            mapTypeId: GoogleMap.maps.MapTypeId.ROADMAP
        };
        map = new GoogleMap.maps.Map(this.refs.map, mapOptions);
        infoWindow = new GoogleMap.maps.InfoWindow();
  }

  shouldComponentUpdate(nextProps, nextState){
      return nextState.center !== this.state.center;
  }
  componentDidUpdate(){
      let center = this.state.center ? this.state.center.geometry.location : zenefits;
      let locations = this.state.locations;
      map.setCenter(new GoogleMap.maps.LatLng(center.lat(),center.lng()));
      for(let i = 0;i <locations.length; i++){
          this.createMarker(locations[i]);
      }
  }

  getLocations = (e) => {
      this.clearMarkers();
      let query = e.target.value;
        if(query.length){
            request = {
                location: myLatLng,
                radius: '500',
                query: query
            };
            service = new GoogleMap.maps.places.PlacesService(map);
            service.textSearch(request, (results, status)=>{
                if(status === GoogleMap.maps.places.PlacesServiceStatus.OK){
                    this.setState({center: results[0], locations: results, query: query});
                    GoogleMap.maps.event.trigger(markers[this.state.index], 'click');
                }
            });
        } else {
            this.setState({center: null, locations: [], query: null});
        }
    }

  focuslocation = (loc, index) => {
      this.setState({center: loc, index: index});
      console.log(loc);
  }

  createMarker = (place) =>{
      let placeLoc = place.geometry.location;
      let marker = new GoogleMap.maps.Marker({
        position: placeLoc,
        title: place.name,
        map: map
      });
      // GoogleMap.maps.event.addListener(marker, 'click', function() {
      //   infoWindow.close();
      //   infoWindow = new GoogleMap.maps.InfoWindow();
      //   infoWindow.setContent('<div><strong>' + marker.title + '</strong><br>' +
      //          '</div>');
      //   infoWindow.open(map, this);
      // });
      markers.push(marker);
  }

  clearMarkers = () => {
    markers = this.state.markers;
    for(let j = 0;j < markers.length;j++){
      markers[j].setMap(null);
    }
  }

  render() {
    return (
      <div className="container">
        <SearchField handleQuery={this.getLocations}/>
        <div ref="map" className={`map ${this.state.query ? 'smaller': ''}`}></div>
          {this.state.center ? (
              <LocationContainer locations={this.state.locations} focusLocation={this.focuslocation} query={this.state.query} currentIndex={this.state.index}/>
          ) : (null)}
      </div>
    );
  }
}

export default MapPage;
