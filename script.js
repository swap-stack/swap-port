// Simulated project data
const projects = [
    { title: "Project 1", description: "Description of Project 1" },
    { title: "Project 2", description: "Description of Project 2" },
    // Add more projects as needed
];

// Function to display projects dynamically
function displayProjects() {
    const projectList = document.querySelector('.project-list');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project');
        projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectItem);
    });
}

// Call the function to display projects when the page loads
window.onload = function () {
    displayProjects();
};
