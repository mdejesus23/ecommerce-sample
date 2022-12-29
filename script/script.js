// Functionto change hamburger menu
function myFunction(x) {
    x.classList.toggle("change");
  }



  function closeDropdowns() {
    // Get all the dropdown elements
    let dropdowns = document.getElementsByClassName("dropdown-content");
    // Loop through all the dropdown elements and hide them
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }

  document.addEventListener("click", function (event) {
    // If the user clicks outside of the dropdown, close it
    if (!event.target.matches(".dropbtn")) {
      closeDropdowns();
    }
  });

  let dropdownButtons = document.querySelectorAll(".dropbtn");
  dropdownButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Close any other open dropdown menus
      let openMenus = document.querySelectorAll(".dropdown-content.show");
      openMenus.forEach(function (menu) {
        menu.classList.remove("show");
      });

      // Open the specific dropdown menu that was clicked on
      let dropdownMenu = button.nextElementSibling;
      dropdownMenu.classList.add("show");
    });
  });


  
  