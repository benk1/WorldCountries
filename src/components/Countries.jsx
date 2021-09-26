import React from 'react';
import Country from './Country';

const Countries = ({ countries }) => {
	const countryList = countries.map((country) => {
		return (
			<>
				<Country key={country.name} country={country} />
			</>
		);
	});
	return <div className="grey lighten-3 countryList">{countryList}</div>;
};

export default Countries;
