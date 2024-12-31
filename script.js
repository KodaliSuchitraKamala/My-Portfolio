// -----------toggle icon navbar ---------- 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


// -----------Scroll selection active link ----------
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');

            });
        };
    }); 
    // -----------sticky navbar ---------- 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    // ----------- remove toggle icon and navbar when click navbar link ----------
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// -----------scroll reveal ---------- 
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// -----------multiple text(typed js) ---------- 
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Android Developer', 'UI/UX Designer', 'Python Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});

// form to google sheet 
const scriptURL = 'https://script.google.com/macros/s/AKfycbxbmRdQ9VT5SsoXz49JXqlwFGpy95gU1reSpYDfu9rhsImMoqUnHDQ7qmEd5gIzgRyhrw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML= ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
});

// -------------Portfolio slider-----------
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.portfolio-item')
    document.querySelector('.portfolio-slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.portfolio-item')
    document.querySelector('.portfolio-slide').prepend(items[items.length - 1]) // here the length of items = 6
})

// ---------------small window-------------

var modals = document.querySelectorAll('.modal');

var modalLinks = document.querySelectorAll('.open-modal');

modalLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var modalId = this.getAttribute('data-modal-id');
        var modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

var closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var modal = this.parentElement.parentElement;
        modal.style.display = 'none';
    });
});

window.onclick = function(event) {
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};

// experience section 

function togglePanel(element) {
    element.classList.toggle("active");
    const panel = element.nextElementSibling;

    if (panel.classList.contains("show")) {
        panel.classList.remove("show");
        panel.style.maxHeight = null;
    } else {
        panel.classList.add("show");
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

function showInternships() {
    const splitScreen = document.querySelector('.split-screen:last-child');

    document.querySelectorAll('.accordion').forEach(acc => {
        acc.classList.add('active');
        const panel = acc.nextElementSibling;
        panel.classList.add('show');
        panel.style.maxHeight = panel.scrollHeight + "px";
    });

    // Ensure the scrollbar starts from the top when the user clicks "Explore"
    splitScreen.scrollTop = 0;
}