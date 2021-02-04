//////line graph chart//////
var ctx = document.getElementById('traffic-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22',
                 '23-29', 
                 '10-5', 
                 '6-12', 
                 '13-19', 
                 '20-26', 
                 '27-3', 
                 '4-10',
                 '11-17',
                 '18-24',
                 '25-31'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#c6c4f0',
            borderColor: 'rgb(255, 99, 132)',
            data: [{
                x:100,
                y:500},{
                x:10,
                y:1000},{
                x:5,
                y:1500},{
                x:2,
                y:2000},{
                x:20,
                y:2500    
                }
            ]
            // data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

///////bar graph////////
var ctx = document.getElementById('daily-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',


    // The data for our dataset
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ' #514efa',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

////donut graph
var ctx = document.getElementById('mobile-users').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',


    // The data for our dataset
    data: {
        labels: ['Phones', 'Tablets', 'Desktop',],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ' #514efa',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
