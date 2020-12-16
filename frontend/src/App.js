import React from "react";
import "./App.css";
import DropDown from "./components/dropDown";
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			findMaxArray: "",
			highestElement: "",
		};
	}

	onChange = (e) => {
		console.log("onChange");
		this.setState({
			findMaxArray: e.target.value,
		});
	};

	//Array being sent to API for finding highest Element
	findMaxFromAPI = () => {
		const { findMaxArray } = this.state;
		fetch("http://localhost:4000/findMax", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				array: findMaxArray.slice(0, findMaxArray.length - 1),
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					highestElement: response.highest,
				});
			});
	};

	render() {
		const { highestElement } = this.state;
		return (
			<div className="App" style={{ backgroundColor: "white" }}>
				<h1 className="f1">Task App</h1>
				{/* Custom DropDown Component */}
				<DropDown />

				{/* Insert Array of numbers separated by commas */}
				<div>
					<input
						style={{ width: "500px", height: "30px" }}
						type="text"
						placeholder="Please fill this Field with comma separated numbers to find highest Element"
						onChange={this.onChange}
					></input>
					<br />
					<button
						className="mButton"
						onClick={() => {
							this.findMaxFromAPI();
						}}
					>
						Submit{" "}
					</button>
					<br />
					{highestElement !== "" ? (
						<p>{`Highest Element: ${highestElement}`}</p>
					) : null}
				</div>
			</div>
		);
	}
}

export default App;
