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

//* line-chart//
const trafficCanvas = document.getElementById('traffic-chart');
let trafficData = {
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
             "11:00"],
    datasets: [
        {
            data: [0, 100, 300, 48, 100, 250, 450,380,550,500,370],
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
    data: trafficData,
    options: trafficOptions
});

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