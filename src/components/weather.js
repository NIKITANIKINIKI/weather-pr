import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && (
          <>
            <div className="weather-content">
              <p>Местоположение: {this.props.city}</p>
              <p>Температура: {Math.round(this.props.temp - 273)} ℃</p>
              <p>Восход солнца: {this.props.sunrise}</p>
              <p>Заход солнца: {this.props.sunset}</p>
            </div>
            <img></img>
          </>
        )}
        <p class="error">{this.props.error}</p>
      </div>
    );
  }
}

export default Weather;
