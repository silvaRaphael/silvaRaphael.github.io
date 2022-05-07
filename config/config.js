const appRoot = "#root";

const Colors = {
  bodyColor: '#EEEEEE',
  textColor: '#1B1B1B',
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
    "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');",
    "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');",
  ],

  primary: "Roboto, sans-serif",
  secondary: "Open Sans, sans-serif",
}

const BreakPoints = {
  mobile: window.matchMedia('(max-width: 767px)').matches,
  tablet: window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches,
  desktop: window.matchMedia('(min-width: 1024px)').matches
}

export { appRoot, Colors, Sizes, Fonts, BreakPoints }