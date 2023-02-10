//Assignment 2. Create a html page which asks a question like 3+4? and shows an input box to enter the answer. if the answer is correct, then the script shows a dialog box to tell if the answer is correct or not.
function myfunction() {
    var x = document.getElementById("inp").value;
    console.log(x);
    const d1 = 3 + 4;
    // console.log(d);
    // console.log(d1);

    if (x == d1) {
        window.alert("correct");
    }

    else {
        window.alert("not correct");
    }

}