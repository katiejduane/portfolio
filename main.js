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
$(document).ready(() => { // how do i revent those weird flickers when loading? 
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
            let projectDescription = document.createElement('div');
            projectDescription.classList.add('description')
            projectDescription.textContent = projects[i].description;
            projectContainer.appendChild(projectDescription);
            let contributions = document.createElement('div');
            contributions.classList.add('contributions');
            contributions.textContent = projects[i].contributions;
            projectContainer.appendChild(contributions);
            let links = document.createElement('div')
            links.classList.add('link-box')
            projectContainer.appendChild(links)
            let link1 = document.createElement('a');
            link1.href = projects[i].github;
            link1.textContent = 'GitHub';
            links.appendChild(link1);
            let link2 = document.createElement('a');
            link2.href = projects[i].liveSite;
            link2.textContent = 'Live Site';
            links.appendChild(link2);

        }
    })


    aboutButton.addEventListener('click', () => {
        mainContent.innerHTML = '';
        sideTitle.textContent = "About";
        sideDesc.textContent = `"Ramona always longed for glorious surprises. That was the way she was." --Beverly Cleary`;
        for(let i = 0; i < aboutKD.length; i++) {
            let bioPic = document.createElement('img');
            bioPic.classList.add('bio-pic');
            bioPic.src = aboutKD[i].img;
            mainContent.appendChild(bioPic);
            let bio1 = document.createElement('p');
            bio1.classList.add('bio');
            bio1.textContent = aboutKD[i].bio;
            mainContent.appendChild(bio1);
            let bio2 = document.createElement('p');
            bio2.classList.add('bio');
            bio2.textContent = aboutKD[i].bio2;
            mainContent.appendChild(bio2);
            let edu = document.createElement('p');
            edu.classList.add('edu');
            edu.textContent = aboutKD[i].edu;
            mainContent.appendChild(edu);
            let extra = document.createElement('p');
            extra.classList.add('extra');
            extra.textContent = aboutKD[i].extra;
            mainContent.appendChild(extra);
        }
    })

    skillsButton.addEventListener('click', () => {
        mainContent.innerHTML = '';
        sideTitle.textContent = "Skills";
        sideDesc.textContent = "Boop";
        let techTitle = document.createElement('p')
        techTitle.classList.add('skills-title')
        techTitle.textContent = "Technology"
        mainContent.appendChild(techTitle)
        let techSkills = document.createElement('div')
        console.log(techSkills, 1)
        
        techSkills.classList.add('skills-icons');
        techSkills.innerHTML = skillz.tech
        mainContent.appendChild(techSkills)


        let softTitle = document.createElement('p')
        softTitle.classList.add('skills-title')
        softTitle.textContent = "Other Professional Skills"
        mainContent.appendChild(softTitle)
        let softSkills = document.createElement('div')
        softSkills.classList.add('soft-skills');
        softSkills.innerHTML = skillz.soft
        mainContent.appendChild(softSkills)
    

    })

    homeButton.addEventListener('click', () => {
        mainContent.innerHTML = '';
        sideTitle.textContent = "Hello";
        sideDesc.textContent = "Beepboop";
    })
})