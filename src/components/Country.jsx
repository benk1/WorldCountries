import React from 'react';
const Country = ({ country }) => {
	// const { flags, name, capital, languages, population } = country;
	// console.log('wewee',currencies);
	const languages = country.languages
		.map((c) => (c.length > 1 ? c.name : c.name))
		.join(',');
	const currencyName =
		country.currencies && country.currencies.map((c) => c.name).join(',');
	const currencySymbol =
		country.currencies && country.currencies.map((c) => c.symbol).join(',');

	return (
		<div className="row card ">
			<div className="col s12 m12 l12 ">
				<div className="card white lighten-5">
					<div className="card-content dark-text darken-2">
						<div className="countryFlag">
							<img src={country.flag} alt="country_flag" />
						</div>
						<span className="card-title orange-text darken-2 center">
							{country.name}
						</span>
						<p className="color">
							{' '}
							<b>Capital</b>: {country.capital}
						</p>
						<p className="language">
							{' '}
							<b>Languages Spoken</b>: {languages}{' '}
						</p>
						<p className="currency">
							{' '}
							<b>Currencies</b>: {currencyName} - ({currencySymbol}){' '}
						</p>
						<p className="population">
							{' '}
							<b>Population</b>: {country.population}{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Country;
