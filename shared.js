const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButton = document.querySelectorAll('.plan button');
const negative = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
// const ctaButton = document.querySelector('.main-nav__item--cta');

for (let i=0; i< selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(() => {
            backdrop.classList.add('open');
        },10)
    })
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
})

if (negative) {
    negative.addEventListener('click', closeModal);
}

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(() => {
        backdrop.style.display = 'none';
    },500)

}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(() => {
        backdrop.classList.add('open');
    },10)
})

// ctaButton.addEventListener('animationstart', (event) => {
//     console.log('animation started', event)
// })

// ctaButton.addEventListener('animationend', (event) => {
//     console.log('animation ended', event)
// })

// ctaButton.addEventListener('animationiteration', (event) => {
//     console.log('animation iteration', event)
// })