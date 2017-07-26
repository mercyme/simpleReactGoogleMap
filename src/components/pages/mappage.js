import React, { Component } from 'react';
import SearchField from '../parts/searchField';
import LocationContainer from '../parts/locationContainer';

var GoogleMap = window.google;
var map, service, request, myLatLng;
class MapPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      query : null,
      markers: []
    };
  }
  printResult = (results, status) => {
    if(status == GoogleMap.maps.places.PlacesServiceStatus.OK){
      for(var i = 0;i < results.length; i++){
        var place = results[i];
        this.createMarker(results[i]);
      }
    }
  }
  createMarker = (place) =>{
      var placeLoc = place.geometry.location;
      var marker = new GoogleMap.maps.Marker({
        map: map,
        position: place.geometry.location
      });
      GoogleMap.maps.event.addListener(marker, 'click', function() {
        GoogleMap.maps.infowindow.setContent(place.name);
        GoogleMap.maps.infowindow.open(map, this);
      });
  }
  getLocations = (e) => {
    if(e.target.value.length > 3){
      request = {
        location: myLatLng,
        radius: '500',
        query: e.target.value
      };
      service = new GoogleMap.maps.places.PlacesService(map);
      service.textSearch(request, this.printResult);
    }
  }

  componentDidMount(){
    myLatLng = new GoogleMap.maps.LatLng(42.361145, -71.057083);
    const mapOptions = {
  		zoom: 15,
  		center: myLatLng,
  		mapTypeId: GoogleMap.maps.MapTypeId.ROADMAP
  	};
    map = new GoogleMap.maps.Map(this.refs.map, mapOptions);
  	// var Latlng_0 = new GoogleMap.maps.LatLng(41.057814980291,-85.329851919709);
    // var marker_0 = new GoogleMap.maps.Marker(
    //     {
    //         position: Latlng_0,
    //         title:"0"
    //     }
    // );
    // var Latlng_1 = new GoogleMap.maps.LatLng(41.065294480291,-85.330151019708);
    // var marker_1 = new GoogleMap.maps.Marker(
    //     {
    //         position: Latlng_1,
    //         title:"1"
    //     }
    // );
    // var markers = [marker_0, marker_1];
    // markers.forEach((marker) => {
    //   marker.setMap(map);
    // })
  }
  render() {
    return (
      <div className="container">
        <SearchField handleQuery={this.getLocations}/>
        <LocationContainer />
        <div style={{width: 600, height: 600, background: 'transparent'}}>
          <div ref="map" style={{ width: '100%', height: '100%', border: '1px solid grey'}}></div>
        </div>
      </div>
    );
  }
}

export default MapPage;
