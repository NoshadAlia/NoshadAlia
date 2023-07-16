// search coding start
function search() {
    let input, filter, table, tr , td, i, txtValue;

    input = document.getElementById("Searchcategory");
    filter = input.value.toUpperCase();
    table = document.getElementById("mytable");
    
    tr =  table.getElementsByTagName("tr")
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// table coding starting
let selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
    
}

// // data read form

function readFormData() {
    let formData = {};
    formData[categ] = document.getElementById("categ").value;
    formData[expan] = document.getElementById("expan").value;
    formData[amount] = document.getElementById("amount").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("mytable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = Math.floor(Math.random() * 100001) + 1001;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = document.getElementById("categ").value;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = document.getElementById("expan").value;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = document.getElementById("amount").value;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = new Date;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("expan").value = selectedRow.cells[2].innerHTML;
    document.getElementById("amount").value = selectedRow.cells[3].innerHTML;
    document.getElementById("categ").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = Math.floor(Math.random() * 100001) + 1001 ;
    selectedRow.cells[1].innerHTML = localStorage.getItem(cate);
    selectedRow.cells[2].innerHTML = document.getElementById("expan").value;
    selectedRow.cells[3].innerHTML = document.getElementById("amount").value;
    selectedRow.cells[4].innerHTML = new Date;
    
}
//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('mytable').deleteRow(row.rowIndex);
        resetForm();
    }
}

// //Reset the data
function resetForm() {
    document.getElementById("expan").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("categ").value = "";

    selectedRow = null;
}

function save(){
    let cate = document.getElementById("categ").value;
    let amoun = document.getElementById("amount").value;
    let expan = document.getElementById("expan").value;

    
    localStorage.setItem("userInfo", cate)
}