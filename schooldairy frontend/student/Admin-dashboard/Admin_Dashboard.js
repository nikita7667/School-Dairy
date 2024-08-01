// let studentList = JSON.parse(localStorage.getItem("users1") || []);
// console.log(studentList);
	// if (studentList && studentList.length > 0) {
	// 	let isAvailable = studentList.find((e) => e.email == email && e.password == password)
		
	// 	if (isAvailable) {
	// 		if (isAvailable.userType == 'S') {
 

    //             let registerStudentList = this.isAvailable;
    //             console.log('registerStudentList',registerStudentList)
    //         } 
	// 	} 
	// } 




// Sample data array

// var myArrays = [{
//     'name': 'Michael',
//     'age': '30',
//     'birthdate': '11/10/1989'
// },
// {
//     'name': 'Mila',
//     'age': '32',
//     'birthdate': '10/1/1989'
// },
// {
//     'name': 'Paul',
//     'age': '29',
//     'birthdate': '10/14/1990'
// },
// {
//     'name': 'Dennis',
//     'age': '25',
//     'birthdate': '11/29/1993'
// },
// {
//     'name': 'Tim',
//     'age': '27',
//     'birthdate': '3/12/1991'
// },
// {
//     'name': 'Erik',
//     'age': '24',
//     'birthdate': '10/31/1995'
// },
// ]

// buildTable(myArray);



// function buildTable(data) {
// var table = document.getElementById('myTable')

// for (var i = 0; i < data.length; i++) {
//     var row = `<tr>
//                     <td>${data[i].Standard}</td>
//                     <td>${data[i].Division}</td>
//                     <td>${data[i].StudentID}</td>
//               </tr>`
//     table.innerHTML += row


// }
// }

// function handleSubmit() 
//         {
//         var name = document.getElementById('class').value; 
//          const surname = document.getElementById('surname').value;
//         localStorage.setItem("CLASS", classs);
//         localStorage.setItem("SURNAME", surname);
//         return false;
//         }


    
function openCard() {
    const card = document.getElementById('card_1');
    card.style.display = 'block';
  }
 function logout(){
    window.location.href='../Login/login.html'
  }
  function viewProfile(){
    window.location.href='../html-code-for-student-profile/index.html'
  }