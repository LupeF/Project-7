//*notifications//
const notification = document.getElementById('notifications');


//*creates Alertbanner// 
const alertbanner = document.getElementById('alert');
alertbanner.innerHTML = `
<div class="alert-banner">
<p> <strong> Alert: </strong> You have <strong>6</strong> overdue tasks to complete!</p>
</div>
<p class="alert-banner-close"> x </p>
`;
alertbanner.addEventListener('click', e =>{
    const div = e.target;
    if(div.classList.contains("alert-banner-close")){
        alertbanner.style.display="none";
    }
});

//?variables for exceeds expectations//
let hourly = document.getElementById('hourly').textContent;
let daily = document.getElementById('daily').textContent;
let weekly = document.getElementById('weekly').textContent;
let monthly = document.getElementById('monthly').textContent;


//* line-chart//
const trafficCanvas = document.getElementById('traffic-chart');
let hourlyTraffic = {
    labels: ["1:00",
             "2:00",
             "3:00",
             "4:00",
             "5:00",
             "6:00",
             "7:00",
             "8:00",
             "9:00",
             "10:00",
             "11:00",
             "12:00",
             "13:00",
             "14:00",
             "15:00",
             "16:00",
             "17:00",
             "18:00",
             "19:00",
             "20:00",
             "21:00",
             "22:00",
             "23:00",
             "24:00",
            ],
    datasets: [
        {
            data: [660, 400, 600, 568, 400, 450, 550,780,550,420,320, 200, 380, 500, 220, 159, 120, 300, 430, 278, 600, 370, 240, 200],
            backgroundColor: 'rgba(116,119,191,.3)',
            borderWidth:1,
        }
    ]
}
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend: {
        display: false
    }
};
let trafficChart = new Chart(trafficCanvas,{
    type: 'line',
    data: hourlyTraffic,
    options: trafficOptions
});
// top is original

//? adding new objects for the exceeding expectations
// let dailyTraffic = {
//     labels: ["Monday",
//              "Tuesday",
//              "Wednseday",
//              "Thursday",
//              "Friday",
//              "Saturday",
//              "Sunday",
//             ],
//     datasets: [
//         {
//             data: [1500, 3000, 4500, 6000, 7500, 9000, 10500],
//             backgroundColor: 'rgba(116,119,191,.3)',
//             borderWidth:1,
//         }
//     ]
// }

// hourly.addEventListener('click', () =>{
//     trafficChart = new Chart(trafficCanvas,{
//         type: 'line',
//         data: hourlyTraffic,
//         options: trafficOptions
//     });
// });

// daily.addEventListener('click', () =>{
//     trafficChart = new Chart(trafficCanvas,{
//         type: 'line',
//         data: dailyTraffic,
//         options: trafficOptions
//     });
// });



//* bar graph//
const dailyCanvas = document.getElementById('daily-chart');
let dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
        {
        label: '# of Hits',
        backgroundColor: ' #7477bf',
        borderWidth: 1,
        data: [7, 115, 175, 125, 225, 200, 100]
        }
    ]
};
const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend: {
        display: false
    }
}

let dailyChart = new Chart(dailyCanvas,{
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

//*Donut-graph//
const mobileCanvas = document.getElementById('mobile-users');
let mobileData = {
    labels: ['Phones', 'Tablets', 'Desktop',],
    datasets: [{
            label: '# Of Users',
            borderWidth: 0,
            data: [2000, 550, 500],
            backgroundColor: [
                '#7477bf',
                '#78cf82',
                '#51b6c8'
            ]
        }]
};
let mobileOptions = {
    legend: {
        positions: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    } 
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});



//* Messaging Section 
const userInput = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

//* Ensures Fields are filled out
send.addEventListener('click', ()=>{
    if(userInput.value === "" && message.value === ""){
        alert("Search field and Message field are empty"); //!alert
    }else if(userInput.value === ""){
        alert("Input field empty"); //!alert
    }else if(message.value === ""){
        alert("Message field Is empty"); //!alert
    }else{
        alert(`Message was Successfully sent to ${userInput.value}`); //!alert
    }
});