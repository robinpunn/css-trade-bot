const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButton = document.querySelectorAll('.plan button');
const negative = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (let i=0; i< selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', function() {
    // mobileNav.style.display= 'none';
    mobileNav.classList.remove('open');
    closeModal();
})

if (negative) {
    negative.addEventListener('click', closeModal);
}

function closeModal() {
    // modal.style.display = "none";
    // backdrop.style.display = "none";
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = "block";
    // backdrop.style.display = "block";
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})