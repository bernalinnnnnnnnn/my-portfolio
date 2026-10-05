function showEmployees() {
/*     employees.forEach(element => {
        /* console.log(element); */

        //dot notation
/*         console.log(element.position)
    }); */ 

let table = document.getElementById('employee');  
table.innerHTML = "<tr><th> Employee ID </th><th> Name </th><th> Position </th></tr>";

employees.forEach(element => {
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = element.emp_id;
    cell2.innerHTML = element.names;
    cell3.innerHTML = element.position;
    
});

}

function addEmployee() {
    const emp_id = document.getElementById('emp_id').value;
    const names = document.getElementById('names').value;
    const position = document.getElementById('position').value;

    if (emp_id && names && position) { 
        employees.push({
            emp_id: emp_id,
            names: names,
            position: position
        });

        document.getElementById('emp_id').value = "";
        document.getElementById('names').value = "";
        document.getElementById('position').value = "";

        showEmployees(); 

    } else {
        alert("Please fill in all fields.");
    }
}


/* function showEmployees() {
    let table = document.getElementById('employee');
    table.innerHTML = ""; // Clear table before populating

    employees.forEach(element => {
        let newRow = table.insertRow(-1);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = element.emp_id;
        cell2.innerHTML = element.name;
        cell3.innerHTML = element.position;
    });
}
 */

/* function showEmployees() {
    let table = document.getElementById('employee');
    
    // Clear existing rows (except the header)
    table.innerHTML = "<tr><th>ID</th><th>Name</th><th>Position</th></tr>";

    employees.forEach(element => {
        let newRow = table.insertRow(-1);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = element.emp_id;
        cell2.innerHTML = element.names;
        cell3.innerHTML = element.position;
    });
} */
