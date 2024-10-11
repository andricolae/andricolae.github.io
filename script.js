async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const projects = await response.json();

        const projectsContainer = document.querySelector('.projects-container');

        projectsContainer.innerHTML = '';

        projects.forEach(project => {
            const projectCard = `
                <div class="project-card">
                    <a href="${project.liveLink}">${project.title}</a>
                    <p>${project.description}</p>
                    <p><strong>Tehnologii folosite: </strong>${project.technologies}</p>
                    <a href="${project.githubLink}">Link GitHub</a>
                </div>
            `;
            projectsContainer.innerHTML += projectCard;
        });
    } catch (error) {
        console.error('Eroare la încărcarea proiectelor:', error);
    }
}
window.onload = loadProjects;
