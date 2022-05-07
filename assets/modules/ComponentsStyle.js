import { Colors, Fonts, Sizes } from "../../config/config.js";
import { Style } from "./index.js";

export default function ComponentsStyle() {
  return (
    Style({
      fonts: Fonts?.fontsUrl
    }),
    Style({
      selector: '#loading',
      background: Colors?.bodyColor || '#fff',
      position: 'absolute',
      zIndex: '99999'
    }),
    Style({
      selector: [ "*" ],
      scrollBehavior: "smooth",
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      listDecoration: "none",
      textDecoration: "none"
    }),
    Style({
      selector: 'body',
      backgroundColor: Colors?.bodyColor
    }),
    Style({
      selector: [ "body > div:first-child" ],
      minHeight: "100vh",
      minWidth: "100%",
    }),
    Style({
      selector: [ "a", "p", "span" ],
      color: Colors?.textColor,
      fontFamily: Fonts?.primary,
      textDecoration: "none"
    }),
    Style({
      selector: [ "[data-pointer]", "a" ],
      cursor: "pointer"
    }),
    Style({
      selector: [ "button", "select", "input", "textarea" ],
      fontFamily: Fonts?.primary,
      fontSize: Sizes?.normalText,
      height: "fit-content",
      padding: ".25rem .5rem",
      border: "none",
      outline: "none",
      background: Colors?.bodyColor,
      boxShadow: `0 0 .1rem ${Colors?.textColor}`,
    }),
    Style({
      selector: [ "input", "textarea" ],
      width: '100%'
    }),
    Style({
      selector: [ "[data-row]", "[data-column]", "[data-view]", "[data-center]", "[data-expanded]" ],
      display: "flex",
    }),
    Style({
      selector: [ "[data-grid]" ],
      display: "grid",
    }),
    Style({
      selector: [ "[data-row]" ],
      flexDirection: "row",
      justifyContent: "center",
    }),
    Style({
      selector: [ "[data-column]" ],
      flexDirection: "column",
      alignItems: "center",
    }),
    Style({
      selector: [ "[data-expanded]" ],
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      minWidth: "100vw"
    }),
    Style({
      selector: [ "[data-view]" ],
      flexDirection: "row",
      justifyContent: "center",
      width: "100%"
    }),
    Style({
      selector: [ "[data-center]" ],
      alignItems: "center",
      justifyContent: "center"
    })
  )
}

ComponentsStyle()