

const alertbanner = document.getElementById('alert');
//cr eating the html for the banner
alertbanner.innerHTML = `
<div class="alert-banner">
<p><strong>Alert: </strong> You have <strong>6</strong> overdue tasks to complete!</p>
</div>
<p class="alert-banner-close"> x </p>
`;
alertbanner.addEventListener('click', e =>{
    const div = e.target;
    if(div.classList.contains("alert-banner-close")){
        alertbanner.style.display="none";
    }
});
//////line graph chart//////
const trafficCanvas = document.getElementById('traffic-chart').getContext('2d');
​let​ trafficData = {
    labels: [​"16-22"​, ​"23-29"​, ​"30-5"​, ​"6-12"​, ​"13-19"​, ​"20-26"​, ​"27-3"​,
    "4-10"​, ​"11-17"​, ​"18-24"​, ​"25-31"​], 
    datasets: [{
    data: [​750​, ​1250​, ​1000​, ​2000​, ​1500​, ​1750​, ​1250​, ​1850​, ​2250​, ​1500​, 2500​],
    backgroundColor: ​'rgba(116, 119, 191, .3)'​,
    borderWidth: ​1​, }]
    };
let​ trafficOptions = { 
        aspectRatio: ​2.5​, 
        animation: {
        duration: ​0 },
          scales: {
            yAxes: [{
        ticks: {
        beginAtZero:​true }
        }] },
        legend : {
        display: ​false }
        };
​let​ trafficChart = ​new​ Chart(trafficCanvas, { 
        type: ​'line'​,
        data: trafficData,
        options: trafficOptions
        });        
// var ctx = document.getElementById('traffic-chart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['16-22',
//                  '23-29', 
//                  '10-5', 
//                  '6-12', 
//                  '13-19', 
//                  '20-26', 
//                  '27-3', 
//                  '4-10',
//                  '11-17',
//                  '18-24',
//                  '25-31'],
//         datasets: [{
            
//             backgroundColor: 'rgba(116, 119, 191, .3',
//             borderWidth: 1,
//             data: [{
//                 x:100,
//                 y:500},{
//                 x:10,
//                 y:1000},{
//                 x:5,
//                 y:1500},{
//                 x:2,
//                 y:2000},{
//                 x:20,
//                 y:2500    
//                 }
//             ]
//             // data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });

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
            backgroundColor: ' #bdcddd',
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
            backgroundColor: ' #bdcddd',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
