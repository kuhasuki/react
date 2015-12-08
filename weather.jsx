var React = require('react');
// var geo = navigator.geolocation;
// console.log(geo);

var Weather = React.createClass({
  getInitialState: function(){
    return {weather: []};
  },
  componentDidMount: function(){
    navigator.geolocation.getCurrentPosition(function(position) {
      this.getWeather(position.coords.latitude, position.coords.longitude);
    }.bind(this));
  },
  getWeather: function(lat, lon){
    var request = new XMLHttpRequest();
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + String(lat) + '&lon=' + String(lon) + '&APPID=645c5d39c7603f17e23fcaffcea1a3c1';
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!

        var resp = JSON.parse(request.responseText);
        // console.log(resp);
        var tempK = resp["main"]["temp"];
        var tempC = Math.floor(tempK - 273.15);
        var weather = resp["weather"][0]["main"];
        this.setState({ weather: [tempC, weather]});
      } else {
        // We reached our target server, but it returned an error

      }
    }.bind(this);

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  },
  render: function () {
    return(
      <div>
        {this.state.weather[0] + "C " + this.state.weather[1]}
      </div>
    );
  }
});

module.exports = Weather;
