
var std1 = {
    id: 1,
    name: "M.bilal",
    age: 25,
    email: "bilal@gmail.com",
    course: "web and app",
    isActive: true,
  };
  
  var std2 = {
    id: 2,
    name: "M.Sufiyan",
    age: 34,
    email: "sufiyan@gmail.com",
    course: "web and app",
    isActive: true,
  };

  var std3 = {
    id: 3,
    name: "Faqeer Muhammad",
    age: 50,
    email: "faqeern@gmail.com",
    course: "web and app",
    isActive: true,
  };


  const std = [std1, std2, std3];
  console.log(std);


  
  // Array of object
  
  var parent = document.getElementById("parent");
  
  for (var student of std) {
    console.log(student.age);
    parent.innerHTML += `<tr id="row-${student.id}">
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.email}</td>
          <td>${student.course}</td>
          <td>${student.isActive ? "Yes" : "No"}</td>

          <td>
            <button onclick="editStudent(${student.id})">Edit</button>
            <button onclick="deleteStudent(${student.id})">Delete</button>
          </td>
        </tr>`;
  }
  


  function addStudent(){


    const lastStudent = std[std.length-1].id;
    
    
    const newStudent = {
    id : lastStudent+1 ,
    name : document.getElementById("studentName").value,
    age : document.getElementById("studentAge").value,
    email : document.getElementById("studentEmail").value,
    course : document.getElementById("studentCourse").value,
    isActive: true,

    }
    std.push(newStudent);


    const parent = document.getElementById("parent");
    parent.innerHTML += `<tr id="row-${newStudent.id}">
      <td>${newStudent.id}</td>
      <td>${newStudent.name}</td>
      <td>${newStudent.age}</td>
      <td>${newStudent.email}</td>
      <td>${newStudent.course}</td>
      <td>${newStudent.isActive ? "Yes" : "No"}</td>
      <td>

      <button onclick="editStudent(${newStudent.id})">Edit</button>
      <button onclick="deleteStudent(${newStudent.id})">Delete</button>

  
        </td>
    </tr>`;

    console.log(std);

    
   document.getElementById("studentName").value="";
   document.getElementById("studentAge").value=0;
   document.getElementById("studentEmail").value="";
   document.getElementById("studentCourse").value="";
   


  }

  

  function deleteStudent(id) {

    for (var i = 0; i < std.length; i++) {
      if (std[i].id === id) {
        std[i].isActive = false; 
        break;
      }
    }

    console.log(std);


    var row = document.getElementById("row-"+ id);

    console.log(row);
     row.style.color = "red"
     row.style.textDecoration = "line-through"

    var statusCell = row.cells[5];  
    statusCell.innerText = "No";    
  }


  function editStudent(id) {
    for (var i = 0; i < std.length; i++) {
      if (std[i].id === id) {
        var student = std[i];
  
        var newName = prompt("Enter new name:", student.name);
        var newAge = +prompt("Enter new age:", student.age);
        var newEmail = prompt("Enter new email:", student.email);
        var newCourse = prompt("Enter new course:", student.course);
        var newIsActive = prompt("Is the student active? (yes/no)", student.isActive ? "yes" : "no");
  
        if (newName !== "" && newAge !== 0 && newEmail !== "" && newCourse !== "" && newIsActive !== "") {

         
          student.name = newName;
          student.age = parseInt(newAge);
          student.email = newEmail;
          student.course = newCourse;
          student.isActive = newIsActive.toLowerCase() === "yes";
  
          var row = document.getElementById("row-" + id);
          if (row) {
            row.cells[1].innerText = student.name;
            row.cells[2].innerText = student.age;
            row.cells[3].innerText = student.email;
            row.cells[4].innerText = student.course;
            row.cells[5].innerText = student.isActive ? "Yes" : "No";
  
            if (!student.isActive) {
              row.style.color = "red";
              row.style.textDecoration = "line-through";
            } else {
              row.style.color = "";
              row.style.textDecoration = "none";
            }
          }
        }
  
        break;
      }
    }
  }
  