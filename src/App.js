import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "5ee584d99e185a3b96892852b7eb5f95";
// uhttp://api.openweathermap.org/data/2.5/weather?q=Malda,India&appid=5ee584d99e185a3b96892852b7eb5f95&units=metric

class App extends React.Component {

	getWeather = async () => {
		const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Malda,India&appid=${API_KEY}&units=metric');
		const data = await api_call.json();
		console.log(data);
	}

	render() {
		return (
			<div>
				<Titles />
				<Form />
				<Weather />
			</div>
		);
	}
}

export default App;