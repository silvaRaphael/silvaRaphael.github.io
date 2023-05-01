import { appRoot } from '../../config/config.js';
import { Router } from "./Router.js";

import * as allModules from '../modules/index.js';
import * as allConfigs from '../../config/config.js';
import * as allFromMain from '../../src/main.js';

Object.entries(allModules).forEach(([name, exported]) => window[name] = exported);
Object.entries(allConfigs).forEach(([name, exported]) => window[name] = exported);
Object.entries(allFromMain).forEach(([name, exported]) => window[name] = exported);


const root = document.querySelector(appRoot)

function render(element, container) {

  if (!container) container = root

  if (container == root) {
    if (root.firstChild) container.firstChild.remove();
  }

  if (typeof element == "string" || typeof element == "number") {

    container.append(element)
  } else {

    container.appendChild(element)
  }

}

window.osArray = [];
window.osIndex = 0;
window.osComponent = "";
function State(initialState, { name }) {
  let index = osIndex
  osArray[index] = osArray[index] || { id: index, component: name, value: initialState }

  const setState = (newState, then) => {
    let component = osArray[index].component
    osArray = osArray.map(p =>
      p.id === index ? { ...p, value: newState } : p
    );
    replaceChild(component, index, component)
    if (then) {
      setTimeout(() => {
        then()
      }, 500);
    }
  }

  osIndex++
  return [osArray[index].value, setState]
}

function replaceChild(element, index, component) {

  let indexItemAppears = []
  osArray.forEach((element, i) => { if (element.component == component) indexItemAppears.push(i) })

  osIndex = indexItemAppears[0]
  osComponent = component

  let oldComponent = document.querySelector("[data-statefull='" + element + "']")
  if (!oldComponent) oldComponent = root.firstChild

  if (oldComponent) oldComponent.parentNode.replaceChild(eval(component + '()'), oldComponent)
}

window.depArray = [];
function Effect(callback, dependencies, component) {

  if (!depArray[`${component.name}`]) {
    depArray[`${component.name}`] = [];
  }
  depArray[`${component.name}`].push(JSON.stringify(component.name + "/" + JSON.stringify(dependencies)));

  if ((JSON.stringify(depArray[`${component.name}`][depArray[`${component.name}`].length - 2])) != (JSON.stringify(depArray[`${component.name}`][depArray[`${component.name}`].length - 1]))) {
    callback();
  }

}

export { render, State, Effect }