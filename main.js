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
let projectCont = document.querySelector('.project')
const footerImg = document.querySelector('.b-r-corner')

// click functions for changing content-------------------------------------->
projectsButton.addEventListener('click', () => {
    // how do i stop this code from creating elements more than once if the button is clicked more than once?
    sideTitle.innerHTML = "do i work?";
    sideDesc.innerHTML = "maybe";
    for (let i = 0; i < projects.length; i++) {
        projectCont.innerHTML += `
        <div class="title">${projects[i].title}</div>
        <img class= "project-image" src="${projects[i].img}"/>
        <img class= "project-image" src="${projects[i].img2}"/>
        <span class="code-links">${projects[i].github} / ${projects[i].liveSite}</span>
        <div class="technologies">${projects[i].tech}</div>
        <div class="description">${projects[i].description}</div>
        <div class="contributions">${projects[i].contributions}</div>
        
        `
        

    }
})
