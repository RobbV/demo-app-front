import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

// components
import Games from './components/games';
import AddGame from './components/addGame'


// configure apollo client
const client = new ApolloClient({
	uri: 'https://demo-app-robbv.herokuapp.com/graphql'
});

class App extends Component {
  render() {
    return (
			<ApolloProvider client={client}>
      	<div id='content'>
				<header>
					<h1>Robbs Demo App</h1>
					<a role="button" href="#popup1" >Add a New Game</a>
				</header>
				<main>
						<Games/>
						<AddGame/>
				</main>
      	</div>
			</ApolloProvider>
    );
  }
}

export default App;
