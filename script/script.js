// Function to change hamburger menu
function myFunction() {
  let x = document.getElementById("mainButton");
  let y = document.getElementById("mainSidenav");
    x.classList.toggle("change");
    y.classList.toggle("show-sidenav");
  }

  document.addEventListener('click', function(e) {
    // Check if the click occurred outside the navbar button
    if (!e.target.matches('.keep-open')) {
      let mBtn = document.getElementById("mainButton");
      let mSidenav = document.getElementById("mainSidenav");
      // If the click occurred outside the navbar button, close the navbar
      if (mBtn.classList.contains("change") && mSidenav.classList.contains("show-sidenav")) {
        mBtn.classList.remove("change");
        mSidenav.classList.remove("show-sidenav");
      }
    }
  });



  function closeDropdowns() {
    // Get all the dropdown elements
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let dropButton = document.getElementsByClassName("dropbtn");

    // Loop through all the dropdown elements and hide them
    for (let i = 0; i < dropdowns.length; i++) {
      for (let x = 0; x < dropButton.length; x++) {
        let openDropdown = dropdowns[i];
        let btnColor = dropButton[x];
      if (openDropdown.classList.contains("show") && btnColor.classList.contains("red")) {
        openDropdown.classList.remove("show");
        btnColor.classList.remove("red");
      }
      }
    }
  }

  document.addEventListener("click", function (event) {
    // If the user clicks outside of the dropdown, close it
    if (!event.target.matches(".dropbtn")) {
      closeDropdowns();
    }
  });


  // open and close dropdown menu and chaning background of button
  let dropdownButtons = document.querySelectorAll(".dropbtn");
  dropdownButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Close any other open dropdown menus and removing background in button
      let openMenus = document.querySelectorAll(".dropdown-content.show");
      let colorRedBackground = document.querySelectorAll(".dropbtn.red"); //add
      openMenus.forEach(function (menu) {
        menu.classList.remove("show");
      });
      colorRedBackground.forEach(function (btn) { //add
        btn.classList.remove("red"); //add
      });

      // Open and change the background of the specific dropdown menu that was clicked on
      let dropdownMenu = button.nextElementSibling;
      dropdownMenu.classList.add("show");

      let btnColor = button;
      btnColor.classList.add("red"); //add classname red to change the background color to red.
    });
  });


  
  