
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('.nav-link');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
        
//         if(top >= offset && top < offset + height){
//             navLinks    .forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('.nav-link[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
//     Sticky
//     let nav = document.querySelector('nav');

//     nav.classList.toggle('sticky', window.scrollY > 100);

//     menuIcon.classList.remove('navbar-toggler-icon');
//     navbar.classList.remove('active');
// };
  

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
    }))