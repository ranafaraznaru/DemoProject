import React, { Component } from "react";
import CanvasJSReact from "../Components/assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
	render() {
		const options = {
			title: {
				text: "my cashflow €3000",
			},
			animationEnabled: true,
			data: [
				{
					// Change type to "doughnut", "line", "splineArea", etc.
					type: "column",
					dataPoints: [
						{ label: "Revenus", y: 6000 },
						{ label: "Dépenses", y: 2600 },
						// { label: "Banana", y: 25 },
						// { label: "Mango", y: 30 },
						// { label: "Grape", y: 28 },
					],
				},
			],
		};

		return (
			<div>
				<CanvasJSChart
					options={options}
					/* onRef={ref => this.chart = ref} */
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}

export default ColumnChart;
