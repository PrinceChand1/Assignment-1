//Assignment 8. Give two textboxes for name, email and place a button html page. Enter the value for name and email. when user click on button then name and value should enter in a table and also provide a delete button corresponding to each row of table. When user click on delete button then row will be delete from table.


function myfunction(){
    const names = document.getElementById("name").value;
    const mails = document.getElementById("mail").value;

    console.log(names);
    console.log(mails);

    // var html = "";
    // var html = "<table border='1'>";
    // for (let x = 0; x < r ; x++) {
    //     html += "<tr >";
    //     for(let y = 0 ; y < c ; y++){
    //         html += "<td style='padding: 0 40px;'>a</td>"
    //     }
    //     html += "</tr>";
    // }
    // html += "</table>";

    // document.getElementById("tableContent").innerHTML = html;
// const delete = () => {

// }


    var emptable = document.querySelector(".list");
    var emp_tr = emptable.insertRow(emptable.length);
    var emp_td1 = emp_tr.insertCell(0);
    var emp_td2 = emp_tr.insertCell(1);
    var emp_td3 = emp_tr.insertCell(2);
    // var totalRowCount = document.querySelector(".list tr").length;
    emp_td1.innerHTML = names;
    emp_td2.innerHTML = mails;  
    // var delete = document.getElementById("myTable").deleteRow(0);
    emp_td3.innerHTML = '<a class="dlt" onClick="onDelete(this)" style="color: white; background:red; border:1px solid black; cursor: pointer;">Delete</a>';
}

function onDelete() {
    
        var selectdelete = document.querySelector("a.dlt");
        selectdelete = selectdelete.parentElement.parentElement.remove(0);
    
}