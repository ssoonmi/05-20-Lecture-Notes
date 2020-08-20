import React from 'react';
import { toQueryString } from './util';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  }

  pollWeather = (location) => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    const params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };

    // This is our API key; please use your own!
    const apiKey = '1c4863a3e8b877f90c3889513cf3635a';
    
    url += toQueryString(params);
    url += `&APPID=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((weather) => this.setState({ weather }));
  }

  render() {
    const weather = this.state.weather;
    let content = <div className='loading'>loading weather...</div>;
    
    if (weather) {
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
        <p>{weather.name}</p>
        <p>{temp.toFixed(1)} degrees</p>
      </div>;
    }

    return (
      <div>
        <h1>Weather</h1>
        <div className='weather'>
          {content}
        </div>
      </div>
    );
  }
}

export default Weather;
