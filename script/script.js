const menuBtn = document.getElementById("mainButton");
const sideBar = document.getElementById("mainSidenav");

// Function to change hamburger menu
const changeMenuBtn = () => {
  menuBtn.classList.toggle("change");
  sideBar.classList.toggle("show-sidenav");
}

document.addEventListener('click', event => {
  // Check if the click occurred outside the navbar button
    if (!event.target.matches('.keep-open')) {
      closeSideNav();
    }
});

const closeSideNav = () => {
  // If the click occurred outside the navbar button, close the navbar
  if (menuBtn.classList.contains("change") && sideBar.classList.contains("show-sidenav")) {
    menuBtn.classList.remove("change");
    sideBar.classList.remove("show-sidenav");
  }
}


// Get all the dropdown elements
const dropdowns = document.querySelectorAll(".dropdown-content");
const dropButton = document.querySelectorAll(".dropbtn");

let openMenus = document.querySelectorAll(".dropdown-content.show");
let colorRedBackground = document.querySelectorAll(".dropbtn.red"); //add

const closeDropdowns = () => {
  
  dropButton.forEach(button => {
    dropdowns.forEach(dropdownContent => {
      if (button.classList.contains("red") && dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
        button.classList.remove("red");
      }
    });
  });
}

document.addEventListener("click", event => {
    // If the user clicks outside of the dropdown, close it
    dropButton.forEach(button => {
        if (!event.target.matches(button)) {
          closeDropdowns();
        } else if (event.target.matches(button)) {
          let dropdownMenu = button.nextElementSibling;
          dropdownMenu.classList.add("show");

          let btnColor = button;
          btnColor.classList.add("red"); //add classname red to change the background color to red.
        }
    });
});


  
  