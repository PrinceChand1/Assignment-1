//Take a static integer array. The script show the average of the integers in the alert box.

const arr = [2, 4, 5, 6, 8, 40, 3, 45, 79, 34, 12];
// console.log(arr.length);
// document.write(arr)

let avg = 0;
for(let x = 0; x < arr.length; x++){
    avg += arr[x];
}

console.log(avg);
const showAvg = avg/arr.length;

window.alert(`The sum of average of array number is ${showAvg}`);