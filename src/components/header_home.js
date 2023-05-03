import { changeRoute } from "../../assets/modules/Router.js";
import { isLightMode, isPortuguese } from "../utils/preferences.js";

import { IconTextButton } from "./icon_text_button.js";


function HeaderHome() {

  const MENU_ITEMS = isPortuguese() ? ['Sobre', 'Trabalhos', 'Habilidades', 'Fale Comigo'] : ['About', 'Works', 'Skills', 'Talk to Me'];

  return Row({
    style: {
      width: Size.fullContent,
      justifyContent: Align.spaced,
      padding: Rem(1, 1.5),
    },
    children: [
      // logo
      BreakPoints.mobile.matches ? '' : Row({
        style: {
          justifyContent: Align.start,
          width: BreakPoints.mobile.matches ? Rem(0) : BreakPoints.tablet.matches ? Rem(3) : Rem(15),
        },
        children: [
          Link({
            to: isPortuguese() ? '#Inicio' : '#Beginning',
            child: Text(BreakPoints.mobile.matches ? '' : BreakPoints.tablet.matches ? 'RS' : 'Raphael Silva', {
              style: {
                fontWeight: 500,
                color: ThemeColors().dark,
              }
            })
          })
        ]
      }),

      // nav
      Row({
        style: {
          width: Size.fullContent,
          alignItems: Align.center,
        },
        children: [
          ...MENU_ITEMS.map((item, index) => {
            return Link({
              to: '#' + item.replaceAll(' ', ''),
              style: {
                padding: Rem(.15, .75),
              },
              child: Text(item, {
                style: {
                  fontWeight: 500,
                  color: ThemeColors().dark,
                  textAlign: Align.center,
                }
              })
            });
          }),
        ]
      }),

      // options
      BreakPoints.mobile.matches ? '' : Row({
        style: {
          justifyContent: Align.end,
          width: BreakPoints.mobile.matches ? Rem(0) : BreakPoints.tablet.matches ? Rem(3) : Rem(15),
        },
        children: [
          IconTextButton({
            icon: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
            <path d="M4 22v-7"></path>
            </svg>`,
            text: BreakPoints.tablet.matches ? '' : isPortuguese() ? 'English' : 'Português',
            onPressed: () => {
              localStorage.setItem('language', isPortuguese() ? 'en' : '');
              changeRoute('/');
            }
          }),
          isLightMode() ? IconTextButton({
            icon: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
            </svg>`,
            text: BreakPoints.tablet.matches ? '' : isPortuguese() ? 'Escuro' : 'Dark',
            onPressed: () => {
              localStorage.setItem('themeMode', isLightMode() ? 'dark' : '');
              changeRoute('/');
            }
          }) : IconTextButton({
            icon: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7a5 5 0 1 0 0 10 5 5 0 1 0 0-10z"></path>
            <path d="M12 1v2"></path>
            <path d="M12 21v2"></path>
            <path d="m4.22 4.22 1.42 1.42"></path>
            <path d="m18.36 18.36 1.42 1.42"></path>
            <path d="M1 12h2"></path>
            <path d="M21 12h2"></path>
            <path d="m4.22 19.78 1.42-1.42"></path>
            <path d="m18.36 5.64 1.42-1.42"></path>
            </svg>`,
            text: isPortuguese() ? 'Claro' : 'Light',
            onPressed: () => {
              localStorage.setItem('themeMode', isLightMode() ? 'dark' : '');
              changeRoute('');
            }
          }),
        ]
      })
    ]
  });
}

export default HeaderHome;