const ball = document.querySelector('.ball'), btn = document.querySelector('.btn-action'), spring = document.querySelector('.spring'), fill = document.querySelector('.fill');

const stretchSpring = () => {
  console.log('stretch')
};

const releaseSpring = () => {
  console.log('release')
};

const resetAnimation = () => {
  console.log('reset')
};


btn.addEventListener('mousedown', stretchSpring);
btn.addEventListener('mouseup', releaseSpring);
btn.addEventListener('touchstart', stretchSpring);
btn.addEventListener('touchend', releaseSpring);
