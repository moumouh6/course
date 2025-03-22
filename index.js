document.addEventListener("DOMContentLoaded", function () {
    const courseData = JSON.parse(localStorage.getItem("selectedCourse"));

    if (courseData) {
        document.getElementById("course-title").textContent = courseData.title;
        document.getElementById("course-description").textContent = courseData.description;
        document.getElementById("course-teacher").textContent = courseData.teacher;
        document.getElementById("course-department").textContent = courseData.department;

        const mainContentDiv = document.getElementById("main-content");

        if (courseData.type === "video") {
            mainContentDiv.innerHTML = `
                <video controls width="100%">
                    <source src="${courseData.mainContent}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        } else if (courseData.type === "pdf") {
            mainContentDiv.innerHTML = `
                <p><strong>Course Material:</strong></p>
                <a href="${courseData.mainContent}" target="_blank" class="btn-download">📄 Download PDF</a>
            `;
        }
    } else {
        document.querySelector("main").innerHTML = "<p>Course not found.</p>";
    }
});
