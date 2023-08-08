


// When a dropdown is opened
$('#menu-content .collapse').on('show.bs.collapse', function(e) {
    if ($('.menu-content .collapsing').length) {
        e.preventDefault();
        return;
    }
    $(this).prev().addClass('active');
    $('#menu-content .sub-menu').collapse('hide');
});

// When a dropdown is closed
$('#menu-content .collapse').on('hide.bs.collapse', function(e) {
    $(this).prev().removeClass('active');
});



// ============================================
// As of Chart.js v2.5.0
// http://www.chartjs.org/docs
// ============================================

var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);
    gradientd = chart.createLinearGradient(0, 0, 0, 450);


gradient.addColorStop(0, 'rgba(242, 87,116, 0.5)');
gradient.addColorStop(0.5, 'rgba(242, 87,116, 0.25)');
gradient.addColorStop(1, 'rgba(242, 87,116, 0)');
gradientd.addColorStop(0, 'rgba(242, 202, 80, 0.5)');
gradientd.addColorStop(0.5, 'rgba(242, 202, 80, 0.25)');
gradientd.addColorStop(1, 'rgba(242, 202, 80, 0)');

var data  = {
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ],
    datasets: [{
			label: 'بازدید',
			backgroundColor: gradient,
			pointBackgroundColor: '#F25774',
			borderWidth: 1,
            direction:"rtl",
          
			borderColor: '#F25774',
			data: [3616.49, 2853.34, 2554.41, 1510.16, 2024.81, 1706.82, 2057.85, 0, 0, 0, 0, 0]
    },{
			label: 'Google',
			backgroundColor: gradientd,
			pointBackgroundColor: '#F2CA50',
			borderWidth: 1,
			borderColor: '#F2CA50',
			data: [669, 770, 555, 254, 181, 240, 0, 0, 0, 0, 0, 0]
    }
							
		]
};




var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.05)',
				lineWidth: 1
			}
		}],
		yAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.08)',
				lineWidth: 1
			}
		}]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'blue'
	},
	tooltips: {
		titleFontFamily: 'isans',
		backgroundColor: '#000',
		titleFontColor: 'white',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10,
        direction:'rtl'
	}
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});




//form1