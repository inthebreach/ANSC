<script>
  function initProgressTracker() {
    const progressElement = document.getElementById("progress");
    const statusTextElement = document.getElementById("statusText");
    const lastUpdatedElement = document.getElementById("lastUpdated");

    // Define your progress stages and their corresponding percentages
    const progressStages = [
      { status: "Ordered", percentage: 20 },
      { status: "Preparing", percentage: 40 },
      { status: "Baking", percentage: 60 },
      { status: "Out for Delivery", percentage: 80 },
      { status: "Delivered", percentage: 100 },
    ];

    // Set the current progress stage (0-4)
    const currentStage = 2;

    // Update the progress bar and status text
    progressElement.style.width = progressStages[currentStage].percentage + "%";
    statusTextElement.textContent = progressStages[currentStage].status;

    // Set the last update date
    const date = new Date();
    lastUpdatedElement.textContent = "Last updated: " + date.toLocaleString();
  }

  document.addEventListener("DOMContentLoaded", initProgressTracker);
</script>
