function login() {
	// Get the StudentID and password from the form
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;

	// Check if the StudentID and password match a registered user
	let users = JSON.parse(localStorage.getItem("users1") || []);
	if (users && users.length > 0) {
		let isAvailable = users.find((e) => e.email == email && e.password == password)
		if (isAvailable) {
			alert("Login successful!");
			if (isAvailable.userType == 'S') {
				window.location.href = "../Student-dashboard/student-dashboard.html";
			} else if (isAvailable.userType == 'T') {
				window.location.href = "../Teacher-dashboard/Teacher_Dashboard.html";
			}
			else if (isAvailable.userType == 'A') {
				window.location.href = "../Admin-dashboard/Admin_Dashboard.html";
			}
			// window.location.assign("../Admin-dashboard/Admin_Dashboard.html");
		} else {
			alert("Incorrect Email or password.");
		}
	} else {
		alert("No data available for login");
	}
}

// window.location.assign("../Admin-dashboard/Admin_Dashboard.html"); 