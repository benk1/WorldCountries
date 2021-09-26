import React, { Component } from 'react';

//import {countriesData} from './data/countries'

import './App.css';
import Header from './components/Header';
import Countries from './components/Countries';
import SearchCountry from './components/SearchCountry';
import _ from 'lodash';
import SortBy from './components/SortBy';
import axios from 'axios';
import { countriesData } from './data/countries';

const urlAPI = 'https://restcountries.com/v2/all ';
class App extends Component {
	state = {
		text: '',
		// countries: countriesData,
		countries: [],
		isLoading: false,
		sortColumn: { path: 'name', order: 'asc' },
	};

	async componentDidMount() {
		//this.fetchCountryData()
		try {
			const { data: countries } = await axios.get(urlAPI);

			this.setState({
				countries,
			
			});
		} catch (error) {
			console.log(error);
		}
		this.setState({
			isLoading: false
		})
	}

	handleSort = (sortColumn) => {
		this.setState({
			sortColumn,
		});
	};

	handleChange = (e) => {
		const { value } = e.target;
		this.setState({
			text: value.toLowerCase(),
		});
	};

	render() {
		const { text, countries, sortColumn, isLoading } = this.state;

		const filteredCountryByName = countries.filter((c) =>
			c.name.toLowerCase().startsWith(text)
		);

		const sorted = _.orderBy(
			filteredCountryByName,
			[sortColumn.path],
			[sortColumn.order]
		);

		const hideDiv = !(text === '') ? (
			sorted.length > 1 ? (
				<p className="center  orange-text darken-5">
					{sorted.length} Countries found which starts with letter{' '}
					<b className="black-text">{text}</b>{' '}
				</p>
			) : (
				<p className="center  orange-text darken-5">
					{sorted.length} Country found which starts with letter{' '}
					<b className="black-text">{text}</b>{' '}
				</p>
			)
		) : null;

		if (isLoading) return <p>Data is Loading...</p>;

		return (
			<div className="container">
				<Header countries={countries} />
				{hideDiv}
				<SearchCountry handleChange={this.handleChange} />
				<SortBy
					sortColumn={sortColumn}
					onSort={this.handleSort}
					onRenderSortIcon={this.renderSortIcon}
				/>

				<Countries countries={sorted} />
			</div>
		);
	}
}

export default App;
