import Chart from 'chart.js';

//===============================================================================================================================================================


let chartPage = document.querySelector('.js-chart');

if (chartPage) {
	Chart.defaults.scale.ticks.beginAtZero =  true;
	Chart.defaults.global.defaultFontFamily = 'Gilroy';
	Chart.defaults.global.defaultFontSize = 10;
	Chart.defaults.global.defaultFontColor = '#727478';

var yourPoint = new Image();
	yourPoint.src = 'assets/img/icons/grafic-point.svg';

var yourPointDark = new Image();
	yourPointDark.src = 'assets/img/icons/grafic-point-dark.svg'; 

const optionSide = {
		legend: {
			display: false,
		},
		tooltips: {
			cornerRadius: 10,
			caretSize: 0,
			xPadding: 7,
			yPadding: 7,
			backgroundColor: '#fff',
			displayColors: false,
			bodyFontColor: '#000',
			bodyFontStyle: 'bold',
			callbacks: {
				title: function() {
					return;
				},
			}
		},
		
		responsive: true, 
		maintainAspectRatio: false,
		scales: {
			 xAxes: [ {
				ticks: {
					display: false,
				},
				gridLines: {
					display:false,
				},
			}],
			yAxes: [ {
				ticks: {
					display: false
				},
				gridLines: {
					drawTicks: false,
					borderDash: [12, 8],
					
				},
			}],
			
		},
		layout: {
			padding: {
				left: 10,
				right: 10,
				top: 10,
				bottom: 0
			}
		},
		hover: {
			onHover: function(e) {
				var point = this.getElementAtEvent(e);
				if (point.length) e.target.style.cursor = 'pointer';
				else e.target.style.cursor = 'default';
			}
		}
};

const dataSide = {
	labels:['1 Dec','8 Dec','16 Dec','21 Dec', '21 Dec', '21 Dec', '21 Dec',],
	datasets: [{
			data: [1200, 1900, 3000, 5000, 2000, 3000, 6000],
			backgroundColor: 'rgba(0, 0, 0, 0.1)',
			 borderColor: '#000',
			borderWidth: 2,
			pointHitRadius: 10,
			// pointStyle: yourPoint,
			lineTension: 0,

	}],
};

const dataSideDark = {
	labels:['1 Dec','8 Dec','16 Dec','21 Dec', '21 Dec', '21 Dec', '21 Dec',],
	datasets: [{
			data: [1200, 1900, 3000, 5000, 2000, 3000, 6000],
			backgroundColor: 'rgba(255, 255, 255, 0.15)',
			 borderColor: '#fff',
			borderWidth: 2,
			pointHitRadius: 10,
			pointStyle: yourPointDark,
			lineTension: 0,
	}],
};


//===============================================================================================================================================================

var followers = document.getElementById('followers');

if (followers) {
	followers.getContext('2d');

	var myChart = new Chart(followers, {
	type: 'line',
	data: dataSideDark,
	options: optionSide,
});
}



//===============================================================================================================================================================
let lastIndex, currentIndex
	let myData = [{x: 10, y: 0}, {x: 100, y: 800}, {x: 200, y: 700},]
	let barData = [{x: 10, y: 0}, {x: 100, y: 800}, {x: 200, y: 700},]



	const optionLiftScore = {

		elements: {
            point: {
                pointStyle: new Array(myData.length).fill(""),
            }
        },

		legend: {
			display: false,
		},

		tooltips: {
			cornerRadius: 10,
			caretSize: 0,
			xPadding: 7,
			yPadding: 7,
			backgroundColor: '#fff',
			displayColors: false,
			bodyFontColor: '#000',
			bodySpacing: 10,
			bodyFontStyle: 'bold',
			bodyFontSize: 14,
			callbacks: {
				title: function() {
					return;
				},
			}
		},
		scales: {
			 xAxes: [{
				gridLines: {
					display:false,
				},
				ticks: {
					display: false,
					
				},
				barThickness: 7,
				categorySpacing: 2,
				// type: 'time',
				// time: {
				// 	min: '2020-12-01',
				// 	max: '2020-12-31',
				// 	unit: 'day',
				// 	stepSize: 5
				// }
			}],
			yAxes: [{
				gridLines: {
					color: 'rgba(0, 0, 0, 0.05)',
					borderDash: [8, 8],
					zeroLineWidth: 1,
					zeroLineBorderDash: [8, 8],
					zeroLineColor: 'rgba(0, 0, 0, 0.05)',
					// удалить рамку слева
					drawBorder: false
				},
				stacked: true,
				ticks: {
					beginAtZero: true,
					// min: 0,
					// max: 6500,	 
				},
			}],
		},
		
		responsive: true, 
		maintainAspectRatio: false,
		layout: {
			padding: {
				top: 10,
				right: 10,
			}
		},
		hover: {
			onHover: function (e) {
				let point = this.getElementAtEvent(e);

				if (point.length) e.target.style.cursor = 'pointer';
				else e.target.style.cursor = 'default';

				if (point[0] && point[0]._datasetIndex === 0) {
					currentIndex = point[0]._index
				} else {
					currentIndex = -1
				}
				this.options.elements.point.pointStyle[lastIndex] = ""
				this.options.elements.point.pointStyle[currentIndex] = yourPoint
				this.update()

				return lastIndex = currentIndex
			}
		},
};


var liftScore = document.getElementById('liftScore');

if (liftScore) {

	liftScore.getContext('2d');

	const dataLiftScore = {
		labels:['1 Dec','8 Dec','16 Dec','21 Dec', '21 Dec'],
		datasets: [
			{
				data: myData,
				backgroundColor: 'transparent',
				borderColor: '#000',
				borderWidth: 2,
				pointHitRadius: 30,
				pointBorderColor: 'rgba(0, 0, 0, 0)',
				pointBackgroundColor: 'rgba(0, 0, 0, 0)',
				order: 1,
			},
			{
				type: 'bar',
				data: barData,
				backgroundColor:'#B4BDC6',
				hoverBackgroundColor: "#BEC7D0",
				order: 2,
			},
		]
	};

	var myChart = new Chart(liftScore, {
		type: 'line',
		data: dataLiftScore,
		options: optionLiftScore,
	});
};

}
