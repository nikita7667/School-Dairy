function register() {
	// Get the fisrtname and password from the form
	let Full_Name = document.getElementById("fname").value;
	let Class = document.getElementById("class").value;
	let Subject = document.getElementById("Subject").value;
	let Division = document.getElementById("Division").value;
	// let Gen_Register_no = document.getElementById("Gen_Register_no").value;
	let Qualification = document.getElementById("qualification").value;
	let Password = document.getElementById("password").value;
	let email = document.getElementById("email").value;
	// let Confirmpassword = document.getElementById("confirmpassword").value;
	let gender = document.getElementsByName("gender");
	var inputList = Array.prototype.slice.call(gender);
	let gen = inputList.find((e)=> e.checked).value

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
	users1 = {Full_Name:Full_Name,
			Class: Class, Subject:Subject, 
			Division:Division,userType:'T', 
			email:email,
			Qualification:Qualification,
			password:Password,
        	gender:gen}; 
	
	let allUsers = JSON.parse(localStorage.getItem("users1") || '[]');
		if(allUsers && allUsers.length > 0){
			allUsers.push(users1);
		}else{
			allUsers = [users1]
		}
	localStorage.setItem("users1", JSON.stringify(allUsers));

	alert("Registration successful!");
	window.location.href='../Login/login.html'
}


