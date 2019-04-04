import React from 'react';

let url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss?format=json';

fetch(url, {
	mode: 'no-cors',
}).then(function(response) {
      return response.json(); // This method is part of the fetch API and returns another promise
  })
  .then(function(data) {
      console.log(data);
  })
  .catch(function(err) {
      console.error(err);
  });

class Container extends React.Component {

		render () {
			return (
				<h1>Hi</h1>
			);
		}
	}

export default Container;