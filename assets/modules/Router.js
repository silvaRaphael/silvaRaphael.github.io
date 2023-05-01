import { appRoot } from '../../config/config.js';
import { render } from './hooks.js';
import { Style } from '../modules/index.js';

function RouterLink({ to, child, children, style, hover }) {

  let type = 'a'

  let element = document.createElement(type)

  if (to && typeof to == 'string') {
    element.href = to
    element.addEventListener('click', e => changeRoute(to))
  }

  if (child) {
    render(child, element)
  } else if (children) {
    children.forEach(item => {
      render(item, element)
    })
  }

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object') {

    let identifier = `${type}${Math.floor(Math.random() * 9999999) + 9999}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }
  }

  return element
}

export function changeRoute(path) {

  let e = event || window.event
  e?.preventDefault()

  window.history.pushState({}, '', path)

  window.osArray = [];
  window.osIndex = 0;
  window.osComponent = "";
  window.depArray = [];

  render(Router({}))
}

const routesArr = [];
const Router = ({ affixTitle = '', suffixTitle = '', routes }) => {

  routes = routes || routesArr[0]

  routes.forEach(route => {
    window[route.component.name] = route.component
  })

  let route = routes.filter(({ component, path }, index, arr) => {

    let pagePath = window.location.pathname

    if (path.includes('(key)')) {
      let path_custom = path.split('/').map((item) => item == '(key)')
      let content_custom = pagePath.split('/')[path_custom.indexOf(true)]

      if (path.split('/')[path_custom.indexOf(true) - 1] == pagePath.split('/')[path_custom.indexOf(true) - 1]) {
        path = pagePath
      }
    }

    let renderComponent = path == pagePath ? component : path == '/error' ? component : ""

    return renderComponent
  })

  let path = route.length > 0 ? route[0].path : '/error'

  routesArr[0] = routes

  if (route[0].title) document.title = affixTitle + route[0].title + suffixTitle;

  return route.length > 0 && window[route[0].component.name]()
}

window.onpopstate = e => changeRoute(location.pathname)

export { Router, RouterLink }