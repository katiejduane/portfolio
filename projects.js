let mainContent = document.querySelector('.content')
let projectsBox = document.querySelector('.projects-box')

// for page load & project creations

var projectLoad = new Promise((resolve, reject)=> {
    projects.forEach((project) => {
        let projectContainer = document.createElement('div');
        projectContainer.classList.add('project');
        projectsBox.appendChild(projectContainer);
        let projectTitle = document.createElement('div');
        projectTitle.classList.add('title');
        projectTitle.textContent = project.title;
        let image = document.createElement('img');
        image.classList.add('project-image');
        image.src = project.img;
        let projectStats = document.createElement('div');
        projectStats.classList.add('project-stats');
        let links = document.createElement('div');
        links.classList.add('link-box');
        links.insertAdjacentHTML('afterbegin', project.github);
        links.insertAdjacentHTML('beforeend', project.liveSite);
        let projectInfo = document.createElement('div');
        projectInfo.classList.add('project-info');
        projectInfo.insertAdjacentHTML('afterbegin', project.tech);
        let projectDesc = document.createElement('div');
        projectDesc.classList.add('project-description');
        projectDesc.insertAdjacentHTML('beforeend', project.description);
        projectContainer.appendChild(projectTitle);
        projectContainer.appendChild(image);
        projectContainer.appendChild(projectStats)
        projectStats.appendChild(links);
        projectStats.appendChild(projectInfo);
        projectContainer.appendChild(projectDesc);
    })
})   



