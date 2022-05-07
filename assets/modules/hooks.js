import { appRoot } from '../../config/config.js';
import { Router } from "./Router.js";

import * as allFromMain from '../../src/main.js';
Object.entries(allFromMain).forEach(([name, exported]) => window[name] = exported);

const root = document.querySelector(appRoot)

function render(element, container) {

  if (!container) container = root

  if (container == root) {
    container.children[0] && container.children[0].remove()
  }

  if (typeof element == "string" || typeof element == "number") {

    container.append(element)
  } else {

    container.appendChild(element)
  }
}

let osArray = [];
let osIndex = 0;
let osComponent = "";

function State(initialState, { name }) {
  let index = osIndex
  osArray[index] = osArray[index] || {id: index, component: name, value: initialState}

  const setState = (newState) => {
    let component = osArray[index].component
    osArray = osArray.map(p =>
      p.id === index ? { ...p, value: newState } : p
    );
    replaceChild(component, index, component)
  }

  osIndex++
  return [osArray[index].value, setState]
}

function replaceChild(element, index, component) {
  let indexItemAppears = []
  osArray.forEach((element, i) => { if(element.component == component) indexItemAppears.push(i) })

  osIndex = indexItemAppears[0]
  osComponent = component

  const oldComponent = document.querySelector("[data-statefull='"+element+"']")
  oldComponent.parentNode.replaceChild(eval(component+'()'), oldComponent)
}

let depArray = [];
function Effect(callback, dependencies) {
  depArray.push(dependencies)
  if(JSON.stringify(depArray[depArray.length-2]) !== JSON.stringify(depArray[depArray.length-1])) callback()
}

export { render, State, Effect }