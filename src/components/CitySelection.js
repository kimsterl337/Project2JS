import React, { Component } from 'react';
import Container from './Container'

const cityLocation = {
	Toronto: { 
		lat: 43.6532,
		long: -79.3832
	},
	Montreal: {
		lat: 45.5017,
		long: 73.5673
	},
	Vancouver: {
		lat: 49.2827,
		long: 123.1207
	}
}

class CitySelection extends Component {

		// access the function passed from the app via props
		// where you handle your change, call that function and pass in the current city as an argument

		constructor () {
			super()

			this.state = {
				value: ''
				}
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);

		}

		handleChange = (event) => {

		  this.setState({value: event.target.value});
		}

		handleSubmit(event) {
		  console.log(this);
		  event.preventDefault()
		  alert('Your selected city is: ' + this.state.value)
		  console.log(this.state.value);
		}

		findLat(city) {
			const lat = cityLocation[city]['lat'];
			console.log(lat)
			return lat
		}

		findLong(city) {
			const long = cityLocation[city]['lat'];
			console.log(long)
			return long
		}
 
		render () {
			return (
			<div>
				<form onSubmit={this.handleSubmit}>
				  <label>
				    Pick your City
				    <select value={this.state.value} onChange={this.handleChange}>
				      <option value="Toronto">Toronto</option>
				      <option value="Montreal">Montreal</option>
				      <option value="Vancouver">Vancouver</option>
				    </select>
				  </label>
				  <input type="submit" value="Submit" />
				</form>	
				<Container lat = { this.findLat(this.state.value) } long = { this.findLong(this.state.value) }/>
			</div>
			)
		}
	}

export default CitySelection
