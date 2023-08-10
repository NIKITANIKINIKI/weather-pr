import React from 'react';
import Form from './components/form';
import Weather from './components/weather';


const API_KEY='95b1470aaade307a4f22285f12fc65a6';

class App extends React.Component {


    state={
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }


    good_time(time) {

      var date=new Date();
      date.setTime(time*1000);
      return date.getHours()+':'+date.getMinutes();
    };

    gettingWeather= async (e)=>{
        e.preventDefault();
        const city=e.target.elements.city.value;
        
        if(city){
            const api_url= await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await api_url.json();
            console.log(data);
            
            var sunset=this.good_time(data.sys.sunset);
            var sunrise=this.good_time(data.sys.sunrise);

            // var date1=new Date();
            // var date2=new Date();
            // date1.setTime(sunset); //отслеживаемая дата 
            // var sunset_date=date1.getHours()+':'+date1.getMinutes()+':'+date1.getSeconds();
            // date2.setTime(sunrise); //отслеживаемая дата 
            // var sunrise_date=date2.getHours()+':'+date2.getMinutes()+':'+date2.getSeconds()

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise,
                sunset: sunset,
                error: undefined            
            });
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: 'Введите название города'                 
            });
        }
    }

    render(){
        return(
            <div class='form-container' >
                <Form weatherMethod={this.gettingWeather}/>
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunrise={this.state.sunrise}                    
                    sunset={this.state.sunset}
                    error={this.state.error}                
                />
            </div>
        );
    }
}

export default App;