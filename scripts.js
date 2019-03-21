// variable declarations----------------------------------------------------->
const menu = document.querySelector('.menu')
const menuButton = document.querySelectorAll('.menu-button')
const mobileIcon = document.querySelector('.mobile-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuButton = document.querySelector('.mobile-menu-button')
const backDrop = document.querySelector('.backdrop')
const homeButton = document.querySelector('#home-button')
const projectsButton = document.querySelector('#projects-button')
const skillsButton = document.querySelector('#skills-button')
const aboutButton = document.querySelector('#about-button')
const contactButton = document.querySelector('#contact-button')
let buttons = Array.from(document.querySelectorAll('.menu-button'))
let mobileButtonsArray = Array.from(document.querySelectorAll('.mobile-menu-button'))
const upArrow = document.querySelector('.return')


// UPDATED MOBILE MENU, JS looks ok but is NOT at all styled yet
mobileIcon.addEventListener("click", () => {
    mobileMenu.style.display = "block";
});

mobileButtonsArray.forEach((button) => {
    button.addEventListener("click", () => {
        mobileMenu.style.display = "none";
    });
});


// functions for color-change on buttons
function changeButtonColor(array) {
    array.forEach(function (btn) {
        if (btn == event.target) {
            btn.classList.add('focus')
        } else {
            btn.classList.remove('focus')
        }
    })
}

buttons.forEach((button) => {
    button.addEventListener('click',() => {
        changeButtonColor(buttons);
        // scrollTransition(button);

    })
})

// remove mobile menu/buttons if screen is resized
window.addEventListener('resize', () => {
    if (mobileMenu.style.display == 'block') {
        mobileMenu.style.display = 'none';
        
    }
});


upArrow.addEventListener('click', () => {
    changeButtonColor(buttons)
})

// scroll-TO functionality so it lands just above section header
// const list = document.getElementsByClassName('menu-list')[0];

// list.addEventListener('click', e => {
//     const {
//         target
//     } = e;
//     const to = target.getAttribute('data-target');
//     const element = document.getElementById(to);
//     const bodyRect = document.body.getBoundingClientRect();
//     const elemRect = element.getBoundingClientRect();
//     const offset = elemRect.top - bodyRect.top;

//     setTimeout(() => {
//         window.scrollTo(0, offset);
//     }, 0);
// });