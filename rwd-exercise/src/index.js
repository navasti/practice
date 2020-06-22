import './styles/index.scss'

import products from './js/products'
import drawMobileValues from './js/drawMobileValues'
import drawDesktopValues from './js/drawDesktopValues'

const valuesContainer = document.querySelector('.app--values')
const desktopViewport = window.matchMedia('screen and (min-width: 500px)')

const drawValues = (isDesktop) => {
  if (isDesktop) {
    drawDesktopValues(products, valuesContainer)
  } else {
    drawMobileValues(products, valuesContainer)
  }
}

drawValues(desktopViewport.matches)

desktopViewport.addListener(isDesktop => {
  drawValues(isDesktop.matches)
})