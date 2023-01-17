const header = document.getElementById('header');
const whiteColor = getComputedStyle(document.body).getPropertyValue('--white');
const darkBlueColor = getComputedStyle(document.body).getPropertyValue('--dark-blue');
const blackColor = getComputedStyle(document.body).getPropertyValue('--black');
const logo = document.querySelector('#header .logo img');
const headerATags = document.querySelectorAll('#header a');

const ATags = document.querySelector('#header a');
const ATagsAfter = window.getComputedStyle(ATags, '::after');
console.log(ATagsAfter)

document.addEventListener('scroll', () => {
    if (window.scrollY >= 30) {
        logo.setAttribute('src', 'assets/haneh_logo_light.png');
        header.style.backgroundColor = whiteColor;
        headerATags.forEach(e => e.style.color = blackColor);
    } else {
        logo.setAttribute('src', 'assets/haneh_logo_dark.png');
        header.style.backgroundColor = darkBlueColor;
        headerATags.forEach(e => e.style.color = whiteColor);
    }   
});