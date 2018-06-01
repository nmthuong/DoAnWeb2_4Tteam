import React, { Component } from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import RouterURL from '../RouterURL/RouterURL';

class App extends Component {
  render() {
    return (
	      	<div>
		        <Nav/>
            	<RouterURL/>
				<Footer/>
	      	</div>
      );
  }
}

export default App;
