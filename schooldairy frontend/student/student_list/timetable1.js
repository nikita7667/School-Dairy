function createTable() {
	// Get the fisrtname and password from the form
	let Subject1 = document.getElementById("Subject1").value;
	let Subject2 = document.getElementById("Subject2").value;
	// let Gen_Register_no = document.getElementById("Gen_Register_no").value;
	let Subject3 = document.getElementById("Subject3").value;
	let Subject4 = document.getElementById("Subject4").value;
	let Subject5 = document.getElementById("Subject5").value;
	let Subject6 = document.getElementById("Subject6").value;
	let Subject7 = document.getElementById("Subject7").value;
	let Subject8 = document.getElementById("Subject8").value;
	// let Mobile_number = document.getElementById("Mobile_number").value;
	let Subject9 = document.getElementById("Subject9").value;
    let Subject10 = document.getElementById("Subject10").value;
	let Subject11 = document.getElementById("Subject11").value;
    let Subject12 = document.getElementById("Subject12").value;
    let Subject13 = document.getElementById("Subject13").value;
    let Subject14 = document.getElementById("Subject14").value;
    let Subject15 = document.getElementById("Subject15").value;
    let Subject16 = document.getElementById("Subject16").value;
    let Subject17 = document.getElementById("Subject17").value;
    let Subject18 = document.getElementById("Subject18").value;
    let Subject19 = document.getElementById("Subject19").value;
    let Subject20 = document.getElementById("Subject20").value;
    let Subject21 = document.getElementById("Subject21").value;
    let Subject22 = document.getElementById("Subject22").value;
    let Subject23 = document.getElementById("Subject23").value;
    let Subject24 = document.getElementById("Subject24").value;
    let Subject25 = document.getElementById("Subject25").value;
    let Subject26 = document.getElementById("Subject26").value;
    let Subject27 = document.getElementById("Subject27").value;
    let Subject28 = document.getElementById("Subject28").value;
    let Subject29 = document.getElementById("Subject29").value;
    let Subject30 = document.getElementById("Subject27").value;
    let Subject31 = document.getElementById("Subject31").value;
    let Subject32 = document.getElementById("Subject32").value;
    let Subject33 = document.getElementById("Subject33").value;
    let Subject34 = document.getElementById("Subject34").value;

	



	// Check if the email is already taken
	let timeTableDataLists = JSON.parse(localStorage.getItem("timeTableList") || '[]');
	// if (users && users.length > 0) {
	// 	let isAvailable = users.some((e) => e.email == email)
	// 	if (isAvailable) {
	// 		alert("Email already taken.");
	// 		return;
	// 	}
	// }

	// Add the new user to the list of registered users
	timeTableList = {
		English: Subject1, Marathi: Subject2, Subject3: Subject3, 
        Subject4: Subject4,Subject5: Subject5,Subject6: Subject6,
        Subject7: Subject7,Subject8: Subject8,Subject9: Subject9,Subject10: Subject10,Subject11: Subject11,Subject12: Subject12,Subject13: Subject13,Subject14: Subject14,
        Subject15: Subject15,Subject16: Subject16,Subject17: Subject17,Subject18: Subject18,Subject19: Subject19,Subject20: Subject20,Subject21: Subject21,Subject22: Subject22,
        Subject23: Subject23,Subject24: Subject24,
        Subject34:Subject34,
        Subject33:Subject33,
        Subject32:Subject32,
        Subject31:Subject31,
        Subject30:Subject30,
        Subject29:Subject29,
        Subject28:Subject28,
        Subject27:Subject28,
        Subject26:Subject26,
        Subject25:Subject25};
	let timeTableData = JSON.parse(localStorage.getItem("timeTableList") || '[]');

	if (timeTableData && timeTableData.length > 0) {
		timeTableData.push(timeTableList);
	} else {
		timeTableData = [timeTableList]
	}
	localStorage.setItem("timeTableList", JSON.stringify(timeTableData));


	alert("TimeTable Added successful!");
}
