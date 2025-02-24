js
// Toggle the dropdown menu on hamburger click
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const dropdownMenu = document.getElementById("dropdownMenu");
  
    hamburgerMenu.addEventListener("click", function (event) {
      dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
      dropdownMenu.style.flexDirection = "column";
      event.stopPropagation();
    });
  
    document.addEventListener("click", function (event) {
      if (!hamburgerMenu.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
      }
    });
  });
  
  // Function to show Home and hide About Me
  function showHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "none";
  }
  
  // Function to show About Me and hide Home
  function showAbout() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
  }
  
