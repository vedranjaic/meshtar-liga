// Chart data
Chart.pluginService.register({
  beforeDraw: function(chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx,
        type = chart.config.type;

        // Put score in the middle of the doughnut
        if (type == 'doughnut') {
			ctx.restore();
			var fontSize = (height / 50).toFixed(2);
			ctx.font = fontSize + "em sans-serif";
			ctx.textBaseline = "middle";

			var text = "40/100",
				textX = Math.round((width - ctx.measureText(text).width) / 2),
				textY = height - 20;

			ctx.fillText(text, textX, textY);
			ctx.save();
    	}
	}
});

// Half doughnut chart
var ctx = document.getElementById("chart-gauge-champion");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["My points", "Champion points"],
      datasets: [
        {
          backgroundColor: ["#667eea", "#dedede"],
          data: [40,60]
        }
      ]
    },
    options: {
    	cutoutPercentage: 90,
    	rotation: 1 * Math.PI,
    	circumference: 1 * Math.PI,
		legend: {
			display: false
		},
		title: {
			display: false
		}
    }
});
var ctx = document.getElementById("chart-gauge-next");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["My points", "Next player points"],
      datasets: [
        {
          backgroundColor: ["#667eea", "#dedede"],
          data: [40,3]
        }
      ]
    },
    options: {
    	cutoutPercentage: 90,
    	rotation: 1 * Math.PI,
    	circumference: 1 * Math.PI,
		legend: {
			display: false
		},
		title: {
			display: false
		}
    }
});

// Bar chart
var cty = document.getElementById("bar-chart");
var myDoughnutChart = new Chart(cty, {
    type: 'bar',
    data: {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12', 'W13', 'W14', 'W15', 'W16', 'W17', 'W18', 'W19', 'W20','W17', 'W18', 'W19', 'W20', 'W19', 'W20'],
      datasets: [
        {
          data: [30, 56, 68, 40, 22, -20, -11, -14, -30, -22, 2, 44, 60, 6, 55, 60, 70, 33, 12, 23, 28, 33, 29, 17, 19, 4],
          backgroundColor: 'rgba(255, 255, 255, 0.2)'
        }
      ]
    },
    options: {
    	scales: {
			xAxes: [{
				display: false,
				barPercentage: 0.6
			}],
			yAxes: [{
				display: false,
				ticks : {
					max : 80,    
					min : -40
				}
			}]
		},
		legend: {
			display: false
		},
		title: {
			display: false
		}
    }
});