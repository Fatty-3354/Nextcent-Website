//Nav-bar toggle for Responsive (Mobile Site)
const navList = document.querySelector('.nav-list');
const menuIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-close');

menuIcon.addEventListener('click', function () {
    navList.classList.toggle('active');
});

closeIcon.addEventListener('click', function () {
    navList.classList.remove('active');
});

//Active Link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link){
    //remove active from all other links
    link.addEventListener('click', function (){
        link.classList.remove('active');
    });

    //add active to opened link
    link.addEventListener('click', function (){
         this.classList.add('active');
    });
});
