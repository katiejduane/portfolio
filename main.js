// variable declarations----------------------------------------------------->
const navbar = document.querySelector('.menu')
const menuButton = document.querySelectorAll('.menu-button')
const homeButton = document.querySelector('#home-button')
const projectsButton = document.querySelector('#projects-button')
const skillsButton = document.querySelector('#skills-button')
const aboutButton = document.querySelector('#about-button')
const resumeButton = document.querySelector('#resume-button')
let sideBar = document.querySelector('.side-bar')
let sideTitle = document.querySelector('.side-bar-title')
let sideDesc = document.querySelector('.side-bar-desc')
let viewWindow = document.querySelector('.viewer')
let mainContent = document.querySelector('.content')
const footerImg = document.querySelector('.b-r-corner')


// click functions for changing content-------------------------------------->
// $(document).ready(() => {}) // show do i revent those weird flickers when loading? 
projectsButton.addEventListener('click', () => {
    mainContent.innerHTML = '';
    sideTitle.textContent = "Projects";
    sideDesc.textContent = "AAaarrggghhh!";
    for (let i = 0; i < projects.length; i++) {
        let projectContainer = document.createElement('div');
        projectContainer.classList.add('project');
        mainContent.appendChild(projectContainer);
        let projectTitle = document.createElement('div');
        projectTitle.classList.add('title');
        projectTitle.textContent = projects[i].title;
        projectContainer.appendChild(projectTitle);
        let image1 = document.createElement('img');
        image1.classList.add('project-image');
        image1.src = projects[i].img;
        projectContainer.appendChild(image1);
        let image2 = document.createElement('img');
        image2.classList.add('project-image');
        image2.src = projects[i].img2;
        projectContainer.appendChild(image2);
        let techInfo = document.createElement('div');
        techInfo.classList.add('tech-info');
        techInfo.textContent = projects[i].tech;
        projectContainer.appendChild(techInfo);
        let links = document.createElement('div')
        links.classList.add('link-box')
        projectContainer.appendChild(links)
        let link1 = document.createElement('a'); //issues appending both links!?
        link1.href = projects[i].github;
        link1.textContent = 'GitHub'
        links.appendChild(link1);
        let link2 = document.createElement('a'); //issues appending both links!?
        link2.href = projects[i].liveSite;
        link2.textContent = 'Live Site';
        links.appendChild(link2);
        let projectDescription = document.createElement('div');
        projectDescription.classList.add('description')
        projectDescription.textContent = projects[i].description;
        projectContainer.appendChild(projectDescription);
        let contributions = document.createElement('div');
        contributions.classList.add('contributions');
        contributions.textContent = projects[i].contributions;
        projectContainer.appendChild(contributions);

    }
})