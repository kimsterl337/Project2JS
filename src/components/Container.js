import React, { Component } from 'react';
import axios from 'axios';



class Container extends Component {

		constructor (props) {
			super(props)

			this.state = {
				weather: {
					data: []
				}
			}
			this.sampleKey = '7ae74236b4e2e58155be1c0b93204d31'

			this.url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + this.sampleKey + '/' + this.props.lat + ',' + this.props.long;
		}
		componentDidMount() {
			this.getWeatherData();
		}

		componentDidUpdate() {
			console.log(this.state.weather);
		}


		async getWeatherData() {

			try {
				const weatherData = await axios (this.url
				);
				
				const { daily: weather } = weatherData.data;

				this.setState({
					weather: weather

				});

			} catch(err) {

				console.log(err.message);

			}
		}

		renderWeather() {
			const { weather } = this.state

			console.log(weather);

			const weatherHtml = weather.data.map(item => {
				
				const { 
					time, 
					icon, 
					temperatureHigh, 
					temperatureLow
				} = item;


				return (
					<div key = { time } className="weatherCard">
						<p className="weatherIcon"> OUTLOOK: { icon }</p>
						<p className="weatherTime"> Date: {time} </p>
						<p className="weatherTemperatureHigh"> High Temperature: { temperatureHigh }</p>
						<p className="weatherTemperatureLow"> Low Temperature: { temperatureLow }</p>
					</div>	
				);
			});

			return weatherHtml;
		}

		renderLoader() {
			return <p> ...Loading</p>
		}

		render () {
			return (
				<section className="weatherListComponent">
					<div className="weatherList">
						{
							this.state.weather.data.length 
							? this.renderWeather()
							: this.renderLoader()
						}
					</div>
				</section>
			)
		}
	}

export default Container;

