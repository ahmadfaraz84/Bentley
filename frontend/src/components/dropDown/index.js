import React from "react";
import "./style.css";
import downkey from "../../icons/downkey.png";
export default class DropDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			colorArray: [],
			yellow: false,
			red: false,
			gree: false,
			blue: false,
		};
	}

	open = () => {
		this.setState({
			expanded: !this.state.expanded,
		});
	};

	addColor = (color) => {
		this.setState({
			colorArray: this.state.colorArray.concat({ color }),
		});
	};

	removeColor = (color) => {
		this.setState({
			colorArray: this.state.colorArray.filter((item) => {
				return item.color !== color;
			}),
		});
	};

	onChange = (color) => {
		console.log(color);
		if (this.state.colorArray.some((item) => item.color === color)) {
			this.setState({ [color]: false }, this.removeColor(color));
		} else {
			this.setState({ [color]: true }, this.addColor(color));
		}
	};

	render() {
		const { expanded } = this.state;

		return (
			<div>
				<div className="mainDiv">
					<p>
						This expandes and shrinks on click rather than checking
						options
					</p>
					<div className="dropDown">
						<div className="select" onClick={this.open}>
							Select a Color{" "}
							<img
								src={downkey}
								alt="down"
								style={{
									verticalAlign: "middle",
									marginLeft: "100px",
								}}
							/>
						</div>
						{expanded ? (
							<div className="options">
								<label for="one" className="label">
									<input
										type="checkbox"
										checked={this.state.red}
										onClick={() => {
											this.onChange("red");
										}}
									/>
									Red
								</label>

								<label for="two" className="label">
									<input
										type="checkbox"
										checked={this.state.yellow}
										onClick={() => {
											this.onChange("yellow");
										}}
									/>
									Yellow
								</label>

								<label for="three" className="label">
									<input
										type="checkbox"
										checked={this.state.green}
										onClick={() => {
											this.onChange("green");
										}}
									/>
									Green
								</label>

								<label for="three" className="label">
									<input
										type="checkbox"
										checked={this.state.blue}
										onClick={() => {
											this.onChange("blue");
										}}
									/>
									Blue
								</label>
							</div>
						) : null}
					</div>

					<div className="colorDiv">
						{this.state.colorArray.map((item) => {
							return (
								<div
									className="colorTab"
									style={{ backgroundColor: `${item.color}` }}
								></div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
