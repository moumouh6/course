document.addEventListener("DOMContentLoaded", function () {
    const storedData = localStorage.getItem("selectedCourse");

    if (!storedData) {
        document.querySelector("main").innerHTML = "<p>Error: Course data not found.</p>";
        console.error("No course data in localStorage.");
        return;
    }

    const courseData = JSON.parse(storedData);
    document.getElementById("course-title").textContent = courseData.title;
    document.getElementById("course-description").textContent = courseData.description;
    document.getElementById("course-teacher").textContent = courseData.teacher;
    document.getElementById("course-department").textContent = courseData.department;

    const mainContentDiv = document.getElementById("main-content");

    if (courseData.type === "video") {
        mainContentDiv.innerHTML = `
            <video controls width="100%">
                <source src="${courseData.mainContent}" type="video/mp4">
            </video>
        `;
    } else if (courseData.type === "pdf") {
        mainContentDiv.innerHTML = `
            <p><strong>Course Material:</strong></p>
            <iframe src="${courseData.mainContent}" width="100%" height="500px"></iframe>
            <a href="${courseData.mainContent}" target="_blank" class="btn-download">📄 Download PDF</a>
        `;
    }
});
