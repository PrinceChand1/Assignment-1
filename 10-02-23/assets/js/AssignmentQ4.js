//Create a javascript array to store the names of students in a class. On loading the page, the script should pick up a random student and display his name in the alert box.
const arr = ["Prince", "Bandhan", "Komal", "GurSingh", "Sahil", "Idrees", "Rahul", "Neha", "Deepak", "Deepika"];

const ran = Math.random();
const floorFromRandom = Math.floor(ran*10);

window.alert(arr[floorFromRandom]);