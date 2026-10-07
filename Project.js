// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Load internships from Flask backend
  fetch("http://localhost:5000/internships")
    .then(response => response.json())
    .then(data => {
      const internshipsList = document.getElementById("internships-list");
      internshipsList.innerHTML = ""; // Clear old data

      data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `🔹 ${item}`;
        internshipsList.appendChild(li);
      });
    })
    .catch(err => {
      console.error("Error fetching internships:", err);
    });

  // Resume Generator button (you can link this to real logic later)
  document.getElementById("generate-resume").addEventListener("click", function () {
    alert("Resume generation not implemented yet.");
  });

  // Application Status update
  document.getElementById("update-status").addEventListener("click", function () {
    alert("Application status update coming soon.");
  });
});
