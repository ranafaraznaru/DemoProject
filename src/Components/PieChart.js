import React, { Component } from "react";
import CanvasJSReact from "../Components/assets/canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
	render() {
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "my income , €3000",
			},
			data: [
				{
					type: "pie",
					startAngle: 75,
					toolTipContent: "<b>{label}</b>: {y}%",
					showInLegend: "true",
					legendText: "{label}",
					indexLabelFontSize: 16,
					indexLabel: "{label} - {y}%",
					dataPoints: [
						{ y: 18, label: "Direct" },
						{ y: 49, label: "Recherche Organique" },
						{ y: 9, label: "Recherche payante" },
						{ y: 5, label: "Référence" },
						{ y: 19, label: "Sociale" },
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

export default PieChart;
