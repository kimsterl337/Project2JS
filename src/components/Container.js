import React from 'react';

const sampleKey = '7ae74236b4e2e58155be1c0b93204d31';
const location = [
	{ 
		name: 'Toronto',
		lat: 43.6532,
		long: 79.3832
	}
];

const url = 'https://api.darksky.net/forecast/'+ {sampleKey} + '/' + location.lat +',' + location.long

fetch(url, {
	mode: 'no-cors',
	headers: {
                "Content-Type": "application/json"
            }
})
.then(function(response) {
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