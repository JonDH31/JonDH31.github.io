// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyAy9088eI_1BiTMl_ej79tgD6zyWhsVRuw",
    authDomain: "train-scheduler-ce174.firebaseapp.com",
    databaseURL: "https://train-scheduler-ce174.firebaseio.com",
    projectId: "train-scheduler-ce174",
    storageBucket:"train-scheduler-ce174.appspot.com", 
    messagingSenderId: "677673591773"
  };
firebase.initializeApp(config);

var database = firebase.database();


// 2. Button for adding Employees
$("#addEmployeeBtn").on("click", function(){

	// Grabs user input
	var empName = $("#employeeNameInput").val().trim();
	var empRole = $("#roleInput").val().trim();
	var empStart = moment($("#startInput").val().trim(), "DD/MM/YY").format("X");
	var empRate = $("#rateInput").val().trim();

	// Creates local "temporary" object for holding employee data
	var newEmp = {
		name:  empName,
		role: empRole,
		start: empStart,
		rate: empRate
	}

	// Uploads employee data to the database
	database.ref().push(newEmp);

	// Logs everything to console
	console.log(newEmp.name);
	console.log(newEmp.role);
	console.log(newEmp.start);
	console.log(newEmp.rate)

	// Alert
	alert("Employee successfully added");

	// Clears all of the text-boxes
	$("#employeeNameInput").val("");
	$("#roleInput").val("");
	$("#startInput").val("");
	$("#rateInput").val("");

	// Prevents moving to new page
	return false;
});


// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var empName = childSnapshot.val().name;
	var empRole = childSnapshot.val().role;
	var empStart = childSnapshot.val().start;
	var empRate = childSnapshot.val().rate;

	// Employee Info
	console.log(empName);
	console.log(empRole);
	console.log(empStart);
	console.log(empRate);

	// Prettify the employee start
	var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
	// Calculate the months worked using hardcore math
	// To calculate the months worked
	var empMonths = moment().diff(moment.unix(empStart, 'X'), "months");
	console.log(empMonths);

	// Calculate the total billed rate
	var empBilled = empMonths * empRate;
	console.log(empBilled);

	// Add each train's data into the table
	$("#employeeTable > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" + empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");

});

