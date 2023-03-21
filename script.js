document.addEventListener("DOMContentLoaded", function () {
  var progressElement = document.getElementById("progress");
  var statusTextElement = document.getElementById("statusText");
  var lastUpdatedElement = document.getElementById("lastUpdated");

  // Define your progress stages and their corresponding percentages
  var progressStages = [
    { status: "Discovery/Kick-Off Meeting", percentage: 20 },
  { status: "Content Review", percentage: 40 },
  { status: "Content Revise", percentage: 60 },
  { status: "Tech Review", percentage: 80 },
  { status: "Launched", percentage: 100 },
];

  // Set the current progress stage (0-4)
  var currentStage = 2;

  // Update the progress bar and status text
  progressElement.style.width = progressStages[currentStage].percentage + "%";
  statusTextElement.textContent = progressStages[currentStage].status;

  // Set the last update date
  var date = new Date();
  lastUpdatedElement.textContent = "Last updated: " + date.toLocaleString();
});
