// Function to toggle the day/night mode
function toggleMode() {
    var themeStyle = document.getElementById("theme-style");
    var dayIcon = document.getElementById("day-icon");
    var nightIcon = document.getElementById("night-icon");
  
    // Toggle the theme mode by swapping the CSS file
    if (themeStyle.getAttribute("href") === "day.css") {
      themeStyle.setAttribute("href", "night.css");
      nightIcon.style.display = "inline-block"; // Show the night icon
      dayIcon.style.display = "none"; // Hide the day icon
      localStorage.setItem("theme", "night"); // Store the current mode in localStorage
    } else {
      themeStyle.setAttribute("href", "day.css");
      dayIcon.style.display = "inline-block"; // Show the day icon
      nightIcon.style.display = "none"; // Hide the night icon
      localStorage.setItem("theme", "day"); // Store the current mode in localStorage
    }
  }
  
  // Function to initialize the theme based on the stored mode
  function initializeTheme() {
    var storedTheme = localStorage.getItem("theme");
    var themeStyle = document.getElementById("theme-style");
    var dayIcon = document.getElementById("day-icon");
    var nightIcon = document.getElementById("night-icon");
  
    if (storedTheme === "night") {
      themeStyle.setAttribute("href", "night.css");
      nightIcon.style.display = "inline-block";
      dayIcon.style.display = "none";
    } else {
      themeStyle.setAttribute("href", "day.css");
      dayIcon.style.display = "inline-block";
      nightIcon.style.display = "none";
    }
  }
  
  // Call the initializeTheme function when the page loads
  window.addEventListener("load", initializeTheme);
  