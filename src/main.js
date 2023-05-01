import { render } from "../assets/modules/hooks.js";
import { Router } from "../assets/modules/Router.js";

import HomePage from "./pages/home_page.js";


export default function AppRoutes() {
  return Router({
    routes: [
      {
        component: HomePage,
        path: '/',
      },
      {
        component: HomePage,
        path: '/en',
      },
      {
        component: HomePage,
        path: '/error',
      },
    ]
  });
}

render(AppRoutes());