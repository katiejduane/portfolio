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
let buttons = Array.from(document.querySelectorAll('.menu-button'))


function changeButtonColor(array) {
    array.forEach(function(btn){
        if(btn == event.target) {
            btn.classList.add('focus')
        }else{
            btn.classList.remove('focus')
        }
    })
}


// click functions for changing content-------------------------------------->
window.onload = function (e) {
    console.log("done")
    projectsButton.addEventListener('click', () => {
        changeButtonColor(buttons);
        mainContent.innerHTML = '';
        sideTitle.textContent = "Projects";
        sideDesc.textContent = "AAaarrggghhh!";
        let dummy = document.createElement('div');
        projects.forEach((proj) => {
            let projectContainer = document.createElement('div');
            projectContainer.classList.add('project');
            let projectTitle = document.createElement('div');
            projectTitle.classList.add('title');
            projectTitle.textContent = proj.title;
            let image1 = document.createElement('img');
            image1.classList.add('project-image');
            image1.src = proj.img;
            let links = document.createElement('div')
            links.classList.add('link-box')
            links.insertAdjacentHTML('afterbegin', proj.github)
            links.insertAdjacentHTML('beforeend', proj.liveSite)
            let projectInfo = document.createElement('div');
            projectInfo.classList.add('project-info');
            projectInfo.insertAdjacentHTML('afterbegin', proj.tech);
            projectInfo.insertAdjacentHTML('beforeend', proj.description)
            projectInfo.insertAdjacentHTML('beforeend', proj.contributions)
            projectContainer.appendChild(projectTitle);
            projectContainer.appendChild(image1);
            projectContainer.appendChild(links)
            projectContainer.appendChild(projectInfo);
            dummy.appendChild(projectContainer)
        })
        setTimeout(() => {
            mainContent.appendChild(dummy);
        }, 100)

    })


    aboutButton.addEventListener('click', () => {
        changeButtonColor(buttons);
        mainContent.innerHTML = '';
        sideTitle.textContent = "About";
        sideDesc.textContent = `"Ramona always longed for glorious surprises. That was the way she was." --Beverly Cleary`;
        let bioPic = document.createElement('img');
        bioPic.classList.add('bio-pic');
        bioPic.src = aboutKD.img;
        mainContent.appendChild(bioPic);
        let bio = document.createElement('div');
        bio.classList.add('bio');
        bio.insertAdjacentHTML('afterbegin', aboutKD.bio)
        bio.insertAdjacentHTML('beforeend', aboutKD.dev)
        bio.insertAdjacentHTML('beforeend', aboutKD.edu)
        bio.insertAdjacentHTML('beforeend', aboutKD.extra)
        mainContent.appendChild(bio)
        let bioLinks = document.createElement('div')
        bioLinks.classList.add('bio-links')
        bioLinks.insertAdjacentHTML('afterbegin',
            `<a href="https://github.com/katiejduane"><i class="devicon-github-plain"></i></a>
        <a href="https://www.linkedin.com/in/kathrynjduane/"><i class="fab fa-linkedin"></i></a>
        <a href="mailto: katiejduane@gmail.com"><i class="far fa-envelope"></i></a>`)
        mainContent.appendChild(bioLinks)

    })

    skillsButton.addEventListener('click', () => {
        changeButtonColor(buttons);
        mainContent.innerHTML = '';
        sideTitle.textContent = "Skills";
        sideDesc.textContent = "Boop";
        let techTitle = document.createElement('div');
        techTitle.classList.add('title');
        techTitle.textContent = "Technology"
        mainContent.appendChild(techTitle)
        let techSkills = document.createElement('div');
        techSkills.classList.add('skills-icons');
        techSkills.insertAdjacentHTML('afterbegin', skillz.tech);
        mainContent.appendChild(techSkills);
        let softTitle = document.createElement('div');
        softTitle.classList.add('title');
        softTitle.textContent = "Other Professional Skills"
        mainContent.appendChild(softTitle);
        let softSkills = document.createElement('div');
        softSkills.classList.add('soft-skills');
        softSkills.insertAdjacentHTML('afterbegin', skillz.soft);
        mainContent.appendChild(softSkills);


    })

    homeButton.addEventListener('click', () => {
        changeButtonColor(buttons);
        mainContent.innerHTML = '';
        sideTitle.textContent = "Hello";
        sideDesc.textContent = "Beepboop";
    })
}