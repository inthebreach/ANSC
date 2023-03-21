document.addEventListener("DOMContentLoaded", function () {
  var progressElement = document.getElementById("progress");
  var statusTextElement = document.getElementById("statusText");
  var lastUpdatedElement = document.getElementById("lastUpdated");

  // Define your progress stages and their corresponding percentages
  var progressStages = [
    { status: "Ordered", percentage: 20 },
    { status: "Preparing", percentage: 40 },
    { status: "Baking", percentage: 60 },
    { status: "Out for Delivery", percentage: 80 },
    { status: "Delivered", percentage: 100 },
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
