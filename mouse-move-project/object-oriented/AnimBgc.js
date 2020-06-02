class AnimBg {
  constructor(selector) {
    this.elements = document.querySelectorAll('.anim-bg');
  };

  listenCursorMove(event) {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const positionX = clientX - centerX;
    const positionY = clientY - centerY;
    this.elements.forEach(element => this.moveElement(element, positionX, positionY));
  };

  moveElement(element, positionX, positionY) {
    const ratioX = -element.getAttribute('ratioX');
    const ratioY = -element.getAttribute('ratioY');
    element.style.transform = `translate(${positionX * ratioX}px, ${positionY * ratioY}px)`;
  };

};