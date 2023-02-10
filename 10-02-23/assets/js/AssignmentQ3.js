// Modify date and time script to show UTC time as well.

// India standard Time
// const dt = new Date();
// document.getElementById("isotime").innerHTML = dt;
const dateTime = new Date();

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

//for date only
const date = monthNames[dateTime.getMonth()]+" "+dateTime.getDate()+" "+dateTime.getFullYear();

document.getElementById("dt").innerHTML = date;


//for time only
const t = dateTime.getHours()+":"+dateTime.getMinutes()+":"+dateTime.getSeconds();
document.getElementById("tm").innerHTML = t;


// Universal Time coordinated
// const utcdt = dateTime.toISOString();
// document.getElementById("utctime").innerHTML = utcdt;


const date1 = monthNames[dateTime.getUTCMonth()]+" "+dateTime.getUTCDate()+" "+dateTime.getUTCFullYear();

document.getElementById("utcdt").innerHTML = date1;

const t1 = dateTime.getUTCHours()+":"+dateTime.getUTCMinutes()+":"+dateTime.getUTCSeconds();
document.getElementById("utctm").innerHTML = t1;