const menuBtn = document.getElementById("mainButton");
const sideBar = document.getElementById("mainSidenav");

// Function to change hamburger menu
function toggleMenuBtn() {
  menuBtn.classList.toggle("change");
  toggleSidenav();
}

function toggleSidenav() {
  sideBar.classList.toggle("show-sidenav");
}

document.addEventListener('click', event => {
  // Close nav, dropdown and change menu button if the click occurred outside the navbar.
    if (!event.target.matches('.keep-open')) {
      closeSideNav();
      closeMenuBtn();
    }
});

function closeMenuBtn() {
  if (menuBtn.classList.contains("change")) {
    menuBtn.classList.remove("change");
  }
}

function closeSideNav() {
  if (sideBar.classList.contains("show-sidenav")) {
    sideBar.classList.remove("show-sidenav");
  }
}

// Dropdown content functions

// show dropdown contents and apply red background color to button.
function openDropdown(dropdownContent, dropdownBtn) {
  closeAllDropdowns();
  document.getElementById(dropdownContent).classList.add("show");
  dropdownBtn.classList.add("red");
}

// hide dropdown content and remove red background color to button.
function closeDropdown(dropdown, button) {
  dropdown.classList.remove("show");
  button.classList.remove("red");
}

// loop to all dropdown contents and dropdown button.
function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown-content");
  const dropdownBtn = document.querySelectorAll(".dropbtn");

  dropdownBtn.forEach(button => {
    dropdowns.forEach(dropdown => {
      closeDropdown(dropdown, button);
    });
  });
  
}

/* close all dropdowns and remove red background to buttons if the user
clicks doesn't match the button */
window.onclick = (event) => {
  if (!event.target.matches(".dropbtn")) {
    closeAllDropdowns();
  }
}


