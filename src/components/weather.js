import React from "react";

class Weather extends React.Component {
    render() {
        return(
            <div>
            {this.props.city &&
                <div>
                    <p>Местоположение: {this.props.city}</p>
                    <p>Температура: {this.props.temp}</p>
                    <p>Восход солнца: {this.props.sunrise}</p>
                    <p>Заход солнца: {this.props.sunset}</p>
                </div>                
            }
            <p class='error'>{this.props.error}</p>
            </div>
        );
    }
}

export default Weather;