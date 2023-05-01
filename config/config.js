import { isLightMode, isPortuguese } from "../src/utils/preferences.js";

const appRoot = "#root";

const Colors = {
  primary: '#FEA501',
  secondary: '#397886',
  tertiary: '#C26508',
  alert: '#d11616',
  success: '#4BB543',

  dark: '#191B25',
  light: '#EFEFEF',

  black: '#000000',
  white: '#ffffff',

  transparent: 'transparent',
}


function ThemeColors() {

  if (isLightMode()) return Colors;

  let themeColors = {};

  const colors = Object.entries(Colors).map(item => {
    if (item[0] == 'dark') return [item[0], Colors.light];
    if (item[0] == 'light') return [item[0], Colors.dark];
    return item
  });

  colors.forEach(item => {
    themeColors[item[0]] = item[1];
  });

  return themeColors;
}

const Sizes = {
  title: '1.5rem',
  bigText: '1rem',
  normalText: '.8rem',
  smallText: '.6rem',

  pageWidth: "1024px",
}

const Fonts = {
  fontsUrl: [
    "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');",
    "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');",
  ],

  primary: "'Poppins', sans-serif",
  secondary: "Roboto, sans-serif",
}

const BreakPoints = {
  mobile: window.matchMedia('(max-width: 767px)'),
  tablet: window.matchMedia('(min-width: 768px) and (max-width: 1023px)'),
  desktop: window.matchMedia('(min-width: 1024px)')
}

export {
  appRoot,
  Colors,
  ThemeColors,
  Sizes,
  Fonts,
  BreakPoints
}