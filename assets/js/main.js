const iconGit = document.querySelector('.fa-github');
const iconLinkedin = document.querySelector('.fa-linkedin');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menuList');
const menuBar = document.querySelector('.menuBar');
let imgArray = [];
let totalImages;
let index = 0;

// Icons animation
iconGit.onmouseenter = () => iconGit.classList.add('fa-bounce');
iconGit.onmouseout = () => iconGit.classList.remove('fa-bounce');
iconLinkedin.onmouseenter = () => iconLinkedin.classList.add('fa-bounce');
iconLinkedin.onmouseout = () => iconLinkedin.classList.remove('fa-bounce');

// Project image popup and carousel
document.querySelectorAll('.project-image img').forEach(image => {
    image.onclick = () => {
        let src = image.getAttribute('src');
        document.querySelector('.popupImage').style.display = 'block';
        document.querySelector('.popupImage img').src = src;
        // Carousel configuration
        if (src == '/assets/img/sistemaDePonto1.png'){
            imgArray = ['sistemaDePonto1.png', 'sistemaDePonto2.png', 'sistemaDePonto3.png'];
            totalImages = imgArray.length - 1;
        }
        if (src == '/assets/img/apiCEP1.png'){
            imgArray = ['apiCEP1.png', 'apiCEP2.png', 'apiCEP3.png', 'apiCEP4.png'];
            totalImages = imgArray.length - 1;
        }
        if (src == '/assets/img/crud1.png'){
            imgArray = ['crud1.png', 'crud2.png', 'crud3.png', 'crud4.png'];
            totalImages = imgArray.length - 1;
        }
        if (src == '/assets/img/alertaCotacao1.png'){
            imgArray = ['alertaCotacao1.png', 'alertaCotacao2.png'];
            totalImages = imgArray.length - 1;
        }
        }
    }
);


// Carousel controllers
document.querySelector('.popupImage span').onclick = () => {
    document.querySelector('.popupImage').style.display = 'none';
};

function nextImage() {
    index = index + 1;
    if (index > totalImages) index = 0;
    document.querySelector('.popupImage img').src = `/assets/img/${imgArray[index]}`;
  }
  

function prevImage() {
    index = index - 1;
    if (index < 0) index = totalImages;
    document.querySelector('.popupImage img').src = `/assets/img/${imgArray[index]}`;
}

// Menu and responsive menu redirect
menu.addEventListener('click', e => {
    const element = e.target;
    
    if (element === menuBar) {
        if (menuList.classList.contains('show')) {
            menuList.classList.remove('show');
        } else {
            menuList.classList.add('show');
        }
    }
    if (element.innerText == 'Início' || element.innerText == '«DFS»') {
        window.location.href = '#beggining';
        menuList.classList.remove('show');
    }
    if (element.innerText == 'Sobre mim') {
        window.location.href = '#aboutMe';
        menuList.classList.remove('show');
    }

    if (element.innerText == 'Soft Skills') {
        window.location.href = '#softSkills';
        menuList.classList.remove('show');
    }

    if (element.innerText == 'Tecnologias') {
        window.location.href = '#technologies';
        menuList.classList.remove('show');
    }

    if (element.innerText == 'Projetos') {
        window.location.href = '#projects';
        menuList.classList.remove('show');
    }
    
})


