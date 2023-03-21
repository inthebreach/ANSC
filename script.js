const progressElement = document.getElementById("progress");
const statusTextElement = document.getElementById("statusText");
const lastUpdatedElement = document.getElementById("lastUpdated");

// Define your progress stages and their corresponding percentages
const progressStages = [
  { status: "Discovery/Kick-Off Meeting", percentage: 20 },
  { status: "Content Review", percentage: 40 },
  { status: "Content Revise", percentage: 60 },
  { status: "Tech Review", percentage: 80 },
  { status: "Launched", percentage: 100 },
];

// Set the current progress stage (0-4)
const currentStage = 0;

// Update the progress bar and status text
progressElement.style.width = progressStages[currentStage].percentage + "%";
statusTextElement.textContent = progressStages[currentStage].status;

// Set the last update date
const date = new Date();
lastUpdatedElement.textContent = "Last updated: " + date.toLocaleString();
