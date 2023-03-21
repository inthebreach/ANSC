document.addEventListener("DOMContentLoaded", function () {
  var progressElement = document.getElementById("progress");
  var statusTextElement = document.getElementById("statusText");
  var lastUpdatedElement = document.getElementById("lastUpdated");

  // Define your progress stages and their corresponding percentages
  var progressStages = [
    { status: "Discovery/Kick-Off Meeting", percentage: 20, color: "#E53935" }, // Red
  { status: "Content Review", percentage: 40, color: "#FB8C00" }, // Orange
  { status: "Content Revise", percentage: 60, color: "#FDD835" }, // Yellow
  { status: "Tech Review", percentage: 80, color: "#039BE5" }, // Blue
  { status: "Launched", percentage: 100, color: "#43A047" }, // Green
];
  
  // Function to get the contrast color (black or white) based on the background color
  function getContrastColor(hexColor) {
  var r = parseInt(hexColor.substr(1, 2), 16);
  var g = parseInt(hexColor.substr(3, 2), 16);
  var b = parseInt(hexColor.substr(5, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
}

  // Set the current progress stage (0-4)
  var currentStage = 2;

  // Update the progress bar and status text
progressElement.style.width = progressStages[currentStage].percentage + "%";
progressElement.style.backgroundColor = progressStages[currentStage].color;
statusTextElement.textContent = progressStages[currentStage].status;
statusTextElement.style.color = getContrastColor(progressStages[currentStage].color);


  // Set the last update date
  var date = new Date();
  lastUpdatedElement.textContent = "Last updated: " + date.toLocaleString();
});
