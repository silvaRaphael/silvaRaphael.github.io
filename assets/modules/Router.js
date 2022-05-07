import { appRoot } from '../../config/config.js';
import { render } from './hooks.js';
import { Style } from '../modules/index.js';

function RouterLink({ to, child, children, style, hover }) {

  let type = 'a'

  let element = document.createElement(type)

  if(to && typeof to == 'string') {
    element.href = to
    element.addEventListener('click', e => changeRoute(e, to))
  }

  if(child) {
    render(child, element)
  } else if(children) {
    children.forEach(item => {
      render(item, element)
    })
  }

  if(style && typeof style == 'object' ||
  hover && typeof hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`
    
    element.classList.add(identifier)
  
    if(style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if(hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)
      
      newStyle.unshift(["selector", `.${identifier}:hover`])
      
      newStyle.map(item => styleParams[item[0]] = item[1])
      
      Style(styleParams)
    }
  }

  return element
}

function changeRoute(event, path) {

  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, '', path)

  document.querySelector(appRoot).firstChild.remove()
  render(Router({}))
}

const routesArr = [];
const Router = ({ routes }) => {

  routes = routes || routesArr[0]

  let route = routes.filter(({ component, path }, index, arr) => {

    let pagePath = window.location.pathname

    let renderComponent = path == pagePath ? component : path == '/error' && component
    
    return renderComponent
  })

  let path = route.length > 0 ? route[0].path : '/error'

  routesArr[0] = routes
  
  return route.length > 0 && route[0].component
}

if(routesArr.length > 0) {
  window.onpopstate = e => changeRoute(e, location.pathname)
}

export { Router, RouterLink }