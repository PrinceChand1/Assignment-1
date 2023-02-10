//Assignment 9. Give two textboxes for rows, columns and place a button. Enter the numeric value in textboxes(4,5). When user click on button then create a table using the values provided in the textboxes.
function myfunction() {
    let r = document.getElementById("rw").value;
    let c = document.getElementById("col").value;
    console.log(r);
    console.log(c);

    // var html = "";
    // for(let x = 0 ; x < r ; x++){
    //     // document.write("a");
    //     html += "<tr>";
    //     html += "</tr>";
    // }
    var html = "<table border='1'>";
    for (let x = 0; x < r ; x++) {
        html += "<tr >";
        for(let y = 0 ; y < c ; y++){
            html += "<td style='padding: 0 40px;'>a</td>"
        }
        html += "</tr>";
    }
    html += "</table>";

    document.getElementById("tableContent").innerHTML = html;

}