document.getElementById("surveyForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
        name: formData.get("name"),
        class: formData.get("class"),
        q1: formData.get("q1"),
        q2: formData.get("q2"),
        q3: formData.get("q3"),
        q4: formData.get("q4"),
        q5: formData.get("q5"),
    };

    try {
        const response = await fetch(
            "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            }
        );

        const result = await response.json();
        if (result.success) {
            alert("Form submitted successfully!");
        } else {
            alert("Failed to submit the form.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error submitting the form.");
    }
});
