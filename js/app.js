//* variables for notification bell
const bellDiv = document.getElementById('bellMenu');
//*variables for graphs//
const magnaGlass = document.getElementById('magnifying-g');
const alertbanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-users');
//*variables for linegraph//
let hourly = document.getElementById('hourly');
let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');
//* variable for auto-complete //
let namesDiv = document.querySelector('.names-list');
//* variables for messaage form //
const div = document.getElementById('searchDiv');
const userInput = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');
const delivered = document.getElementById('message-delivered');
//* variables for local storage//
const emailNotification = document.getElementById('email');
const publicProfile = document.getElementById('profile');
const saveTimezone = document.getElementById('timezone');
const btnSave = document.getElementById('saveBtn');
const btnCancel = document.getElementById('cancelBtn');

//*notification drop down */
document.getElementById('notifications').addEventListener('click',(e) => {
    if(bellDiv.style.opacity == 1){
        bellDiv.style.opacity = 0;
    } else {
    bellDiv.innerHTML = `
    <div class="menuList">
        <ul>
        <a href="#"><li> New Messages </li></a>
        <a href="#"><li> Viewed </li></a>
        <a href="#"><li> Sent </li></a>
        </ul>
    </div>
    `;
    bellDiv.style.opacity = 1;
    }
    
});

//********************//
//*functions for Linegraph// 
//*********************//
function addData(chart, label, data){
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset)=>{
        dataset.data.push(data);
    });
    chart.update();
};
function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
};

//********************//
//*creates Alertbanner and inserts in element// 
//*********************//
alertbanner.innerHTML = `
<div class="alert-banner">
<p> <strong> Alert: </strong> You have <strong>6</strong> overdue tasks to complete!</p>
</div>
<p class="alert-banner-close"> x </p>
`;

//*******************//
//*closes banner when clicked//
//*********************//

alertbanner.addEventListener('click', e =>{
    const div = e.target;
    if(div.classList.contains("alert-banner-close")){
        alertbanner.style.display="none";
    }
});

//*************//
//* Hourly line-chart data//
//*************//
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
            data: [660, 
                   400,
                   600, 
                   568, 
                   400, 
                   450, 
                   550,
                   780,
                   550,
                   420,
                   320, 
                   200, 
                   380, 
                   500, 
                   220, 
                   159, 
                   120, 
                   300, 
                   430, 
                   278, 
                   600, 
                   370, 
                   240, 
                   200],
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
let hourlyChart = new Chart(trafficCanvas,{
    type: 'line',
    data: hourlyTraffic,
    options: trafficOptions
});
 

//*************//
//* daily line-chart data//
//*************//
let dailyT = {
    labels: ["Monday",
             "Tuesday",
             "Wednseday",
             "Thursday",
             "Friday",
             "Saturday",
             "Sunday",
            ],
    datasets: [
        {
            data: [560, 1000, 450, 660, 1200, 900, 775],
            backgroundColor: 'rgba(116,119,191,.3)',
            borderWidth:1,
        }
    ]
};  

//*************//
//* weekly line-chart data//
//*************//
let weeklyTraff = {
    labels: ["1-7",
             "8-17",
             "18-25",
             "26-34",
             "35-42",
             "43-50",
             "51-58",
            ],
    datasets: [
        {
            data: [260, 660, 450, 260, 720, 900, 555],
            backgroundColor: 'rgba(116,119,191,.3)',
            borderWidth:1,
        }
    ]
}; 

//*************//
//* monthly line-chart data//
//*************//
let monthlyTraff = {
    labels: ["January",
             "February",
             "March",
             "April",
             "May",
             "June",
             "July",
             "August",
             "September",
             "October",
             "November",
             "December"

            ],
    datasets: [
        {
            data: [70, 360, 650, 260, 720, 440, 800, 678, 467, 754, 932, 456],
            backgroundColor: 'rgba(116,119,191,.3)',
            borderWidth:1,
        }
    ]
};
//*****************//
//* line-graph//
//*****************//

hourly.addEventListener('click', (e) =>{
    let trafficChart = new Chart(trafficCanvas,{
        type: 'line',
        data: hourlyTraffic,
        options: trafficOptions
    });
    addData(trafficChart, hourlyTraffic.labels, hourlyTraffic.dataset[0].data);
});   
daily.addEventListener('click', (e) =>{
    let trafficdaily = new Chart(trafficCanvas,{
        type: 'line',
        data: dailyT,
        options: trafficOptions
    });
    addData(trafficdaily, dailyT.labels, dailyT.dataset[0].data);
});
weekly.addEventListener('click', (e) =>{
    let trafficWeekly = new Chart(trafficCanvas,{
        type: 'line',
        data: weeklyTraff,
        options: trafficOptions
    });
    addData(trafficWeekly, weeklyTraff.labels, weeklyTraff.dataset[0].data);
});
monthly.addEventListener('click', (e) =>{
    let trafficMonthly = new Chart(trafficCanvas,{
        type: 'line',
        data: monthlyTraff,
        options: trafficOptions
    });
    addData(trafficMonthly, monthlyTraff.labels, monthlyTraff.dataset[0].data);
});

//*************//
//* bar graph//
//*************//
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

//*************//
//*Donut-graph//
//*************//

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

//********************************************//
//* Ensures Message Fields are filled out
//******************************************//
send.addEventListener('click', (e)=>{
    if(userInput.value === "" && message.value === ""){
        e.preventDefault();
        alert("Search field and Message field are empty"); //!alert
    }else if(userInput.value === ""){
        e.preventDefault();
        alert("Input field empty"); //!alert
    }else if(message.value === ""){
        e.preventDefault();
        alert("Message field Is empty"); //!alert
    }else{
        alert(`Message was Successfully sent to ${userInput.value}`); //!alert
        userInput.value = "";
        message.value = "";
    }
});

//********************************************//
//* auto-complete function *//
//******************************************//
//?creates a auto complete function
const namesArray = [
"Victoria Chambers",
"Dale Byrd",
"Dawn Wood",
"Dan Oliver"
];
userInput.addEventListener('keyup', (e) =>{
    namesDiv.innerHTML= "";
    namesDiv.style.display = "block";
    const ul = document.createElement("ul");
    namesDiv.append(ul);
    let search = e.target.value.toLowerCase();
    if(search !== ""){
        namesArray.forEach(name =>{
            if(name.toLowerCase().includes(search)){
                const li = document.createElement("li")
                li.textContent = name;
                ul.append(li);
                li.addEventListener('click', (e) =>{
                    userInput.value = li.textContent;
                    namesDiv.style.display = "none";
                });
            }
        })
    }else{
        namesDiv.textContent = "";
        namesDiv.style.display = "none";
    }
})

//******************/
//*  local storage *//
//******************/
//? Adds local storage
btnSave.addEventListener('click', ()=>{
    if(emailNotification.checked){
        localStorage.setItem('switchOne', emailNotification.value);
    } 
    if(publicProfile.checked){
        localStorage.setItem('switchTwo', publicProfile.value);
    } 
    if(saveTimezone.value){
        localStorage.setItem('Tzone', saveTimezone.value);
    } 
})


//? removes local storage
btnCancel.addEventListener('click', () =>{
    localStorage.removeItem('switchOne');
    localStorage.removeItem('switchTwo');
    localStorage.removeItem('Tzone' );
});

//? Retrieves local storage
const settingsONE = localStorage.getItem('switchOne');
const settingsTwo = localStorage.getItem('switchTwo');
const settingsThree = localStorage.getItem('Tzone');

//? Checks for local Storage and displays saved settings
function display (){
    if(emailNotification.value === settingsONE){
        emailNotification.checked = true;
    }
    if(publicProfile.value === settingsTwo){
        publicProfile.checked = true;
    }
    if(settingsThree.value !== ""){
        saveTimezone.value = settingsThree;
    }
    return;
}
display();
