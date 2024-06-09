let body = document.querySelector('body');
let themeBtn = document.querySelector('.themeBtn .btn');
let checkbox = document.querySelector('.themeBtn .btn input');
let ball = document.querySelector('.themeBtn .btn .ball');
let heading1 = document.querySelector('.mainContent h1');
let heading2 = document.querySelector('.mainContent h4');
let navAnchor = document.querySelectorAll('nav ul li a');
let rootAnchor = document.querySelectorAll('.rootContainer ul li a');
let navList = document.querySelectorAll('nav ul li');
let rootList = document.querySelectorAll('.rootContainer ul li');
let checked = false;
checkbox.addEventListener('click',()=>{
    if (checked !== true) {
        body.style.backgroundColor = 'white';
        themeBtn.style.backgroundColor = 'black';
        ball.style.backgroundColor = 'white';
        heading1.style.color = 'black';
        heading2.style.color = 'black';
        navAnchor.forEach((a)=>{
            a.style.color = 'grey';
        });
        rootAnchor.forEach((a)=>{
            a.style.color = 'grey';
        });
        navList.forEach((li)=>{
            li.style.backgroundColor = 'white';
            li.style.border = '2px solid grey';
        });
        rootList.forEach((li)=>{
            li.style.backgroundColor = 'white';
            li.style.border = '2px solid grey';
        });
        checked = true;
    }
    else
    {
        body.style.backgroundColor = 'black';
        themeBtn.style.backgroundColor = 'white';
        ball.style.backgroundColor = 'grey';
        heading1.style.color = 'white';
        heading2.style.color = 'white';
        navAnchor.forEach((a)=>{
            a.style.color = 'white';
        });
        rootAnchor.forEach((a)=>{
            a.style.color = 'white';
        });
        navList.forEach((li)=>{
            li.style.backgroundColor = 'rgb(28,28,28)';
            li.style.border = 'none';
        });
        rootList.forEach((li)=>{
            li.style.backgroundColor = 'rgb(28,28,28)';
            li.style.color = 'white';
            li.style.border = 'none';
        });
        checked = false;
    }
});