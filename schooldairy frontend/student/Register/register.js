function register() {
	// Get the fisrtname and password from the form
	let Full_Name = document.getElementById("Full_Name").value;
	let StudentID = document.getElementById("StudentID").value;
	// let Gen_Register_no = document.getElementById("Gen_Register_no").value;
	let Standard = document.getElementById("Standard").value;
	let Division = document.getElementById("Division").value;
	let Address = document.getElementById("Address").value;
	let Phone_Number = document.getElementById("Phone_Number").value;
	let Parents_Name = document.getElementById("Parents_Name").value;
	let Relation_with_child = document.getElementById("Relation_with_child").value;
	// let Mobile_number = document.getElementById("Mobile_number").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let gender = document.getElementsByName("gender");
	var inputList = Array.prototype.slice.call(gender);
	let gen = inputList.find((e) => e.checked).value



	// Check if the email is already taken
	let users = JSON.parse(localStorage.getItem("users1") || '[]');
	if (users && users.length > 0) {
		let isAvailable = users.some((e) => e.email == email)
		if (isAvailable) {
			alert("Email already taken.");
			return;
		}
	}

	// Add the new user to the list of registered users
	users1 = {
		Full_Name: Full_Name, StudentID: StudentID,userType:'S', Standard: Standard, Division: Division,
		Address: Address, Phone_Number: Phone_Number, gender: gen, email: email, Parents_Name: Parents_Name, Relation_with_child: Relation_with_child,  password: password
	};
	let allUsers = JSON.parse(localStorage.getItem("users1") || '[]');

	if (allUsers && allUsers.length > 0) {
		allUsers.push(users1);
	} else {
		allUsers = [users1]
	}
	localStorage.setItem("users1", JSON.stringify(allUsers));


	alert("Registration successful!");
}


