/******************************************
Treehouse Techdegree:
FSJS project 2 - List Pagination
******************************************/

/***
  Global variables that store the DOM elements you will
   need to reference and/or manipulate.
***/

const studentsPerPage = 10

// create a div elements for buttons and add it to body
var divButton = document.createElement("div")
divButton.id = "buttonGroup"
document.body.appendChild(divButton)

var students = document.getElementsByClassName("student-item cf")
var numberOfPages = Math.floor(students.length/studentsPerPage) + 1

// showPage function to hide all of the items in the
// list except for the ten that should show.
function showPage(pageNumber) {
  // loop to hide all the students
  for (i = 0; i < students.length; i++) {
    students[i].style.display = "none"
  }

  // for loop to show certain number of students
  for (i = (pageNumber - 1) * studentsPerPage; i < (pageNumber * studentsPerPage); i++) {
    // condition to break out of the loop in last page
    if (i == students.length) {
      break;
    } else {
      students[i].style.display = "block"
    }
  }

}

// first page is always activated at launch
showPage(1)


// appendPageLinks function to generate, append, and add
// functionality to the pagination buttons.
function appendPageLinks() {

  for (i = 1; i <= numberOfPages; i++) {
    var button = document.createElement("button")
    button.innerHTML = i
    divButton.appendChild(button)
  }

  // eventListener for all buttons --- Event Bubbling
  document.addEventListener("click", (event) => {

    var buttons = document.getElementsByTagName("BUTTON")

    // remove previous active class
    for (i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active")
    }

    if (event.target.tagName.toLowerCase() == "button") {
      event.target.classList.add("active")

      var page = parseInt(event.target.outerText)
      // calling showPage with pageNumber
      showPage(page)
    }
  })

}

appendPageLinks()
