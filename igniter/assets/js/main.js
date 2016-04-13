
function createTable(json) {
    //table heading
    var tableHead = ['Select', 'ID', 'Username', 'Email', 'Time Created', 'DOB', 'Gender', 'Image', 'Country'];
console.log(json);
    var tasks;// = array();
    //get all the records
    tasks = JSON.parse(json);

    //Create a HTML Table element.
    var table = document.createElement("table");
    //table.border = "1";

    //Get the count of columns.
    var columnCount = tableHead.length;
    //console.log(tasks[0]);

        //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {

        var headerCell = document.createElement("TH");
        headerCell.innerHTML = tableHead[i];
        row.appendChild(headerCell);

    }
    
    //Add the data rows.
    for (var i = 0; i < tasks.length; i++) {
        row = table.insertRow(-1);
        //sets class if row is completed
        if (tasks[i].completed === '1') {
            row.className = "complete";

        }
        //sets all cells
        var id = row.insertCell(-1);
        var idNum = row.insertCell(-1);
        var username = row.insertCell(-1);
        var email = row.insertCell(-1);
        var createTime = row.insertCell(-1);
        var dob = row.insertCell(-1);
        var gender = row.insertCell(-1);
        var photo_url = row.insertCell(-1);
        var country = row.insertCell(-1);

        //sets the cell with all the data
        id.innerHTML = "<input type='checkbox' name='id' value='" + tasks[i].id + "' />";
        idNum.innerHTML = tasks[i].id;
        username.innerHTML = tasks[i].username;
        email.innerHTML = tasks[i].email;
        createTime.innerHTML = tasks[i].create_time;
        dob.innerHTML = tasks[i].dob;
        gender.innerHTML = tasks[i].gender;
        photo_url.innerHTML = tasks[i].photo_url ? '<a href="' + tasks[i].photo_url + '">Image</a>' : '';
        country.innerHTML = tasks[i].country;


    }
    console.log(table);
    var dtable = document.getElementById("users");
    dtable.innerHTML = "";
    dtable.appendChild(table);    
    console.log(dtable);
}
   