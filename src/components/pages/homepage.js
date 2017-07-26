import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid"> 
          <h1>Instructions</h1>
          <p>Create a web app (desktop or mobile) that provides a query box and a search button and then calls the Places Library for Google Maps (https://developers.google.com/maps/documentation/javascript/places). Format the results to give a good user experience. 
          Your app must include:<br/>
          A map with location markers/pins<br/>
          A list of locations (Some interactivity is expected between the two).<br/>
          You should implement at least one of your own features to show off your abilities (for example a build system, tests, user accounts / cloud storage, in addition to other cool features... the sky is the limit!).<br/>
          Please provide your program as a zip or tar archive, with an index.html file. Use whatever libraries, documentation, tutorials, or frameworks you consider necessary. This should be a client-side app, with little or no server code. Please include a README that gives us some relevant info about your program.<br/> 
          Once complete, you can submit your finished assignment to the link provided at the bottom of this email. Or, if you have any problems with uploading, please feel free to email me directly and let me know. <br/>
          </p>
      </div>
    );
  }
}

export default Homepage;
