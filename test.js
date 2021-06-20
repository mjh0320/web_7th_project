const sky = document.getElementsByTagName('body')[0];
const white = document.getElementById('white');
const black = document.getElementById('black');
const education = document.getElementById('education');
const contact = document.getElementById('contact');
const single_about = document.getElementsByClassName('single-about-txt')[0];
const siroro = document.getElementById('siroro');
const contact_add_head = document.getElementsByClassName('contact-add-head')[0];

const h1 = document.getElementsByTagName('h1')[0];
const h2 = document.getElementsByTagName('h2')[0];
const h3 = document.getElementsByTagName('h3')[0];
const h4 = document.getElementsByTagName('h4')[0];
const h5 = document.getElementsByTagName('h5')[0];
const h6 = document.getElementsByTagName('h6')[0];


white.addEventListener('click', function(){
    white.style.display = "none";
    black.style.display = "block";
    sky.style.backgroundColor = "white";
    sky.style.color = "#43485c";
    h1,h2,h3,h4,h5,h6.style.color = "#43485c";
    education.style.color = "#43485c";
    contact.style.color = "#43485c";
    single_about.style.color = "#3C4258";
    siroro.style.color = "#3C4258";
    contact_add_head.style.color = "3C4258";
})

black.addEventListener('click', function(){
    white.style.display = "block";
    black.style.display = "none";
    sky.style.backgroundColor = "black";
    sky.style.color = "white";
    h1,h2,h3,h4,h5,h6.style.color = "white";
    education.style.color = "white";
    contact.style.color = "white";
    single_about.style.color = "white";
    siroro.style.color = "white";
    contact_add_head.style.color = "white";
})