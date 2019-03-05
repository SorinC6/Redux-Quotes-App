import React, { Component } from 'react';
import './App.css';
import QuotesList from './components/QuotesList';
import QuoteForm from './components/QuoteForm';

class App extends Component {
	render() {
		return (
			<div className="App">
				<QuotesList />
				<QuoteForm />
			</div>
		);
	}
}

export default App;
