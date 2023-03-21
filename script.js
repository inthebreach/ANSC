document.addEventListener("DOMContentLoaded", function () {
  var progressElement = document.getElementById("progress");
  var statusTextElement = document.getElementById("statusText");
  var lastUpdatedElement = document.getElementById("lastUpdated");

  // Define your progress stages and their corresponding percentages
  var progressStages = [
    { status: "Discovery/Kick-Off Meeting", percentage: 20, color: "red" },
  { status: "Content Review", percentage: 40, color: "orange" },
  { status: "Content Revise", percentage: 60, color: "yellow" },
  { status: "Tech Review", percentage: 80, color: "blue" },
  { status: "Launched", percentage: 100, color: "green" },
];

  // Set the current progress stage (0-4)
  var currentStage = 2;

  // Update the progress bar and status text
progressElement.style.width = progressStages[currentStage].percentage + "%";
progressElement.style.backgroundColor = progressStages[currentStage].color;
statusTextElement.textContent = progressStages[currentStage].status;


  // Set the last update date
  var date = new Date();
  lastUpdatedElement.textContent = "Last updated: " + date.toLocaleString();
});
