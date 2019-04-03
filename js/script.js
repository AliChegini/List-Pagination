/******************************************
Treehouse Techdegree:
FSJS project 2 - List Pagination
******************************************/

/***
  Global variables that store the DOM elements you will
   need to reference and/or manipulate.
***/


// var button = document.createElement("button")
// button.innerHTML = "1"

var page = document.getElementsByClassName("page")[0]


var students = document.getElementsByClassName("student-item cf")

var numberOfPages = Math.floor(students.length/10) + 1



/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.
***/
function showPage(pageNumber) {

  for (i = 0; i < students.length; i++) {
    students[i].style.display = "none"
  }

  for (i = (pageNumber - 1) * 10; i < (pageNumber * 10); i++) {
    students[i].style.display = "block"
  }

}



/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

function appendPageLinks() {

  for (i = 1; i <= numberOfPages; i++) {
    var button = document.createElement("button")
    button.innerHTML = i
    page.appendChild(button)
  }

  // add eventListener for all buttons
  // call showPage on each buttons

  var button = document.getElementsByID

  button.addEventListener("click", () => {
    console.log(parseInt(button.innerHTML));
  })

}

appendPageLinks()
