// variable declarations----------------------------------------------------->
const menu = document.querySelector('.menu')
const menuButton = document.querySelectorAll('.menu-button')
const mobileMenu = document.querySelector('.mobile-menu')
const homeButton = document.querySelector('#home-button')
const projectsButton = document.querySelector('#projects-button')
const skillsButton = document.querySelector('#skills-button')
const aboutButton = document.querySelector('#about-button')
const contactButton = document.querySelector('#contact-button')
let sideBar = document.querySelector('.side-bar')
let sideTitle = document.querySelector('.side-bar-title')
let sideDesc = document.querySelector('.side-bar-desc')
let viewer = document.querySelector('.viewer')
let mainContent = document.querySelector('.content')
const footerImg = document.querySelector('.b-r-corner')
let violetMain = document.querySelector('.violet-main')
let violetSmall = document.querySelector('.violet-small')
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

function mobileButtons(button) {
    if (button.classList.contains('mobile-menu-button')) {
        menu.style.display = 'none';

    }
}

function leaveHome(){
    // want to figure out how to make this conditional based on whether or not there IS a violet to even remove...
    viewer.classList.remove("homepage-viewer")
    mainContent.classList.remove("homepage-content")
    footerImg.style.visibility = "visible"
}

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 640px)').matches && menu.style.display == 'none') {
        menu.style.display = 'block';
        menu.style.backgroundColor = 'rgb(108, 193, 173)';
    } else if (window.matchMedia("(max-width: 640px)").matches && menu.style.display == 'block'){
        menu.style.display = 'none';
    }
});


// click functions for changing content-------------------------------------->
window.onload = function (e) {
    console.log("done")
    projectsButton.addEventListener('click', () => {
        leaveHome();
        changeButtonColor(buttons);
        mobileButtons(projectsButton);
        mainContent.innerHTML = '';
        sideTitle.textContent = "Projects";
        sideDesc.textContent = `"The day you plant the seed is not the day you eat the fruit."`;
        let space = document.createElement('div');
        projects.forEach((proj) => {
            let projectContainer = document.createElement('div');
            projectContainer.classList.add('project');
            let projectTitle = document.createElement('div');
            projectTitle.classList.add('title');
            projectTitle.textContent = proj.title;
            let image1 = document.createElement('img');
            image1.classList.add('project-image');
            image1.src = proj.img;
            let links = document.createElement('div');
            links.classList.add('link-box');
            links.insertAdjacentHTML('afterbegin', proj.github);
            links.insertAdjacentHTML('beforeend', proj.liveSite);
            let projectInfo = document.createElement('div');
            projectInfo.classList.add('project-info');
            projectInfo.insertAdjacentHTML('afterbegin', proj.tech);
            projectInfo.insertAdjacentHTML('beforeend', proj.description);
            projectInfo.insertAdjacentHTML('beforeend', proj.contributions);
            projectContainer.appendChild(projectTitle);
            projectContainer.appendChild(image1);
            projectContainer.appendChild(links);
            projectContainer.appendChild(projectInfo);
            space.appendChild(projectContainer);
        })
        setTimeout(() => {
            mainContent.appendChild(space);
        }, 100)

    })

    aboutButton.addEventListener('click', () => {
        leaveHome();
        changeButtonColor(buttons);
        mobileButtons(aboutButton);
        mainContent.innerHTML = '';
        sideTitle.textContent = "About";
        sideDesc.textContent = `"Ramona always longed for glorious surprises. That was the way she was." --Beverly Cleary`;
        let bioPic = document.createElement('img');
        bioPic.classList.add('bio-pic');
        bioPic.src = aboutKD.img;
        mainContent.appendChild(bioPic);
        let bio = document.createElement('div');
        bio.classList.add('bio');
        bio.insertAdjacentHTML('afterbegin', aboutKD.bio);
        mainContent.appendChild(bio);
    })

    skillsButton.addEventListener('click', () => {
        leaveHome();
        changeButtonColor(buttons);
        mobileButtons(skillsButton);
        mainContent.innerHTML = '';
        sideTitle.textContent = "Skills";
        sideDesc.textContent = `"Why not go out on a limb? That’s where the fruit is." --Mark Twain`;
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

    contactButton.addEventListener('click', () => {
        changeButtonColor(buttons);
        leaveHome();
        mobileButtons(contactButton);
        sideTitle.textContent = "Contact";
        sideDesc.textContent = ``;
        mainContent.innerHTML = '';
        let contactBox = document.createElement('div');
        contactBox.classList.add('contact-box');
        mainContent.appendChild(contactBox)
        let contactTitle = document.createElement('div');
        contactTitle.classList.add('title');
        contactTitle.textContent = "Get in touch..."
        contactBox.appendChild(contactTitle);
        let bioLinks = document.createElement('div')
        bioLinks.classList.add('bio-links')
        bioLinks.insertAdjacentHTML('afterbegin', contact.links);
        contactBox.appendChild(bioLinks);
        let contactText = document.createElement('div');
        contactText.classList.add('contact-text');
        contactText.textContent = contact.text;
        contactBox.appendChild(contactText);
        contactText.insertAdjacentHTML('beforeend', contact.aside)
        contactText.insertAdjacentHTML('beforeend', contact.arts)
    })

    homeButton.addEventListener('click', () => {
        changeButtonColor(buttons);
        mobileButtons(homeButton);
        mainContent.innerHTML = '';
        viewer.classList.add("homepage-viewer");
        mainContent.classList.add("homepage-viewer");
        footerImg.style.visibility = "hidden";
        sideTitle.textContent = "Welcome";
        sideDesc.textContent = `"So plant your own gardens and decorate your own soul, instead of waiting for someone to bring you flowers." --Jorge Luis Borges`;
        let drawing = document.createElement('div');
        drawing.classList.add("drawing");
        mainContent.appendChild(drawing);
        let violetMain = document.createElement('img');
        violetMain.classList.add("violet-main");
        violetMain.src = 'images/other/violet-home.png';
        drawing.appendChild(violetMain);
    })

    mobileMenu.addEventListener('click', () => {
        menu.style.display = 'block';
        menu.style.backgroundColor = "rgb(159, 155, 238)";
        buttons.forEach(function(button) {
            button.classList.add('mobile-menu-button')
        })
    })

}