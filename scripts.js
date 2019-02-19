// variable declarations----------------------------------------------------->
const menu = document.querySelector('.menu')
const menuButton = document.querySelectorAll('.menu-button')
const mobileMenu = document.querySelector('.mobile-menu')
const homeButton = document.querySelector('#home-button')
const projectsButton = document.querySelector('#projects-button')
const skillsButton = document.querySelector('#skills-button')
const aboutButton = document.querySelector('#about-button')
const contactButton = document.querySelector('#contact-button')
let buttons = Array.from(document.querySelectorAll('.menu-button'))
let mainContent = document.querySelector('.content')
let projectsList = document.querySelector('.projects-list')

// for page load & project creations
window.onload = function (e) {
    console.log("done");
    projects.forEach((project) => {
        let projectContainer = document.createElement('div');
        projectContainer.classList.add('project');
        projectsList.appendChild(projectContainer);
        let projectTitle = document.createElement('div');
        projectTitle.classList.add('title');
        projectTitle.textContent = project.title;
        let image1 = document.createElement('img');
        image1.classList.add('project-image');
        image1.src = project.img;
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
        projectContainer.appendChild(image1);
        projectContainer.appendChild(projectStats)
        projectStats.appendChild(links);
        projectStats.appendChild(projectInfo);
        projectContainer.appendChild(projectDesc);
    })
    // setTimeout(() => {
    //     mainContent.appendChild(projectsList);
    // }, 100)

};

// functions for color, mobile menu, buttons...
function changeButtonColor(array) {
    array.forEach(function (btn) {
        if (btn == event.target) {
            btn.classList.add('focus')
        } else {
            btn.classList.remove('focus')
        }
    })
}

function mobileButtons(button) {
    if (button.classList.contains('mobile-menu-button')) {
        menu.style.display = 'none';
    }
}

buttons.forEach((button) => {
    button.addEventListener('click',() => {
        changeButtonColor(buttons);
        mobileButtons(button);
    })
})

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 640px)').matches && menu.style.display == 'none') {
        menu.style.display = 'block';
        menu.style.backgroundColor = 'rgb(140, 140, 238);';
        buttons.forEach((button) => {
            button.classList.remove('mobile-menu-button')
        })
    } else if (window.matchMedia("(max-width: 640px)").matches && menu.style.display == 'block') {
        menu.style.display = 'none';
    }
});

mobileMenu.addEventListener('click', () => {
    menu.style.display = 'block';
    menu.style.backgroundColor = "rgb(140, 140, 238)";
    buttons.forEach(function (button) {
        button.classList.add('mobile-menu-button')
    })
})