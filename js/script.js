let img1 = document.querySelector('#logo__image1');
let img2 = document.querySelector('#logo__image2');
let img3 = document.querySelector('#logo__image3');
let img4 = document.querySelector('#logo__image4');

let jump1 = document.querySelector('#jump1');
let jump2 = document.querySelector('#jump2');
let jump3 = document.querySelector('#jump3');
let jump4 = document.querySelector('#jump4');

jump1.addEventListener('click', () => {
    img1.classList.add('active');
    img2.classList.remove('active');
    img3.classList.remove('active');
    img4.classList.remove('active');
    jump1.classList.add('jump__active');
    jump2.classList.remove('jump__active');
    jump3.classList.remove('jump__active');
    jump4.classList.remove('jump__active');
});
jump2.addEventListener('click', () => {
    img1.classList.remove('active');
    img2.classList.add('active');
    img3.classList.remove('active');
    img4.classList.remove('active');
    jump1.classList.remove('jump__active');
    jump2.classList.add('jump__active');
    jump3.classList.remove('jump__active');
    jump4.classList.remove('jump__active');
});
jump3.addEventListener('click', () => {
    img1.classList.remove('active');
    img2.classList.remove('active');
    img3.classList.add('active');
    img4.classList.remove('active');
    jump1.classList.remove('jump__active');
    jump2.classList.remove('jump__active');
    jump3.classList.add('jump__active');
    jump4.classList.remove('jump__active');
});
jump4.addEventListener('click', () => {
    img1.classList.remove('active');
    img2.classList.remove('active');
    img3.classList.remove('active');
    img4.classList.add('active');
    jump1.classList.remove('jump__active');
    jump2.classList.remove('jump__active');
    jump3.classList.remove('jump__active');
    jump4.classList.add('jump__active');
});








/* function slider(addImg, remImg,remJump, addJump) {
    addImg.classList.add('active');
    remImg.classList.remove('active');
    remJump.classList.remove('jump__active');
    addJump.classList.add('jump__active');  
} */