document.getElementById("surveyForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent default form submission

  // Collect form data
  const formData = new FormData(e.target);

  // Convert form data to URL-encoded format
  const data = new URLSearchParams();
  formData.forEach((value, key) => {
    data.append(key, value);
  });

  try {
    // Make a POST request to your Apps Script web app
    const response = await fetch("YOUR_SCRIPT_URL", {
      method: "POST", // Ensures POST is used
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Set the content type
      },
      body: data, // Send the form data
    });

    // Parse the JSON response
    const result = await response.json();
    console.log(result);

    if (result.status === "success") {
      alert("Form submitted successfully!");
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Failed to submit the form. Please try again.");
  }
});
