// Create a script to show date and time on javascript page.

//for date only
const dateTime = new Date();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

const date = monthNames[dateTime.getMonth()]+" "+dateTime.getDate()+" "+dateTime.getFullYear();
document.getElementById("dt").innerHTML = date;


//for time only
const t = dateTime.getHours()+":"+dateTime.getMinutes()+":"+dateTime.getSeconds();
document.getElementById("tm").innerHTML = t;

