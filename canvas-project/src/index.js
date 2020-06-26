import { HelloCanvas } from './js/HelloCanvas'
import './styles/index.scss'

const greeting = document.createElement('h1')
greeting.textContent = HelloCanvas()

const app = document.querySelector('#root')
app.append(greeting)
