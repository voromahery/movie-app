import React from 'react';
import "./App.css";
import PropTypes from 'prop-types';
import {Counter} from './Counter.js';
import { Accordion } from './Accordion.js';
import { Input } from './Input.js';


function App() {
	return (<div className="App">
	<header className="App-header">
	  <HelloWorld greeting="Hello" name="H. Daniel Fabrice🤡"/>
	  <HelloWorld name="all"/>
	  {<Counter />}
	  {<Accordion />}
	  <Input/>
	</header>
  </div>);
}

function HelloWorld({name, greeting="Hello"}) {
return <h1>{greeting} {name}!</h1>
  }

HelloWorld.propTypes = {
name: PropTypes.string,
greeting: PropTypes.string,
}

export default App;
