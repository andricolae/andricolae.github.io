async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const projects = await response.json();
        const projectsContainer = document.getElementById('projects-container');
        
        projectsContainer.innerHTML = '';
        
        projects.forEach((project, index) => {
            const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-indigo-50', 'bg-purple-50', 'bg-pink-50', 'bg-yellow-50'];
            const borderColors = ['border-blue-200', 'border-green-200', 'border-indigo-200', 'border-purple-200', 'border-pink-200', 'border-yellow-200'];
            const bgColor = bgColors[index % bgColors.length];
            const borderColor = borderColors[index % borderColors.length];
            
            const projectCard = `
                <div class="project-card ${bgColor} border ${borderColor} rounded-xl overflow-hidden shadow-lg hover:shadow-xl">
                    <div class="p-8">
                        <h3 class="text-xl font-bold mb-4">${project.title}</h3>
                        <p class="text-gray-600 mb-6 min-h-[60px]">${project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-6">
                            ${project.technologies.split(', ').map(tech => 
                                `<span class="bg-white px-3 py-1 text-xs rounded-full border border-gray-200">${tech}</span>`
                            ).join('')}
                        </div>
                    </div>
                    <div class="flex border-t border-gray-200">
                        <a href="${project.liveLink}" target="_blank" class="flex-1 text-center py-4 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-colors">Live Demo</a>
                        <div class="w-px bg-gray-200"></div>
                        <a href="${project.githubLink}" target="_blank" class="flex-1 text-center py-4 text-gray-600 font-medium hover:bg-gray-900 hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            `;
            
            projectsContainer.innerHTML += projectCard;
        });
    } catch (error) {
        console.error('Eroare la încărcarea proiectelor:', error);
    }
}

window.onload = loadProjects;