function IconTextButton({ icon, text, onPressed }) {
  return GestureDetector({
    onClick: onPressed,
    child: Row({
      style: {
        alignItems: Align.center,
        padding: Rem(.15, .75),
        userSelect: 'none',
      },
      children: [
        Text(icon, {
          type: 'span',
          style: {
            lineHeight: Rem(1),
            color: ThemeColors().dark,
          }
        }),
        Separator({ width: Rem(.4) }),
        Text(text, {
          style: {
            fontWeight: 500,
            color: ThemeColors().dark,
          }
        })
      ]
    })
  });
}

function TextIconButtonBg({ icon, text, link }) {
  return Link({
    to: link,
    style: {
      padding: Rem(1, 2),
      background: ThemeColors().dark,
      borderRadius: Rem(.75),
    },
    child: Row({
      style: {
        alignItems: Align.center,
      },
      children: [
        Text(text, {
          style: {
            color: ThemeColors().light,
          }
        }),
        Separator({ width: Rem(1) }),
        Text(icon, {
          type: 'span',
          style: {
            color: ThemeColors().light,
            lineHeight: Rem(1),
          }
        })
      ]
    })
  });
}

function GrowButton({ link, text }) {
  return Link({
    to: link,
    target: '_blank',
    child: Row({
      style: {
        alignItems: Align.center,
        padding: Rem(0),
        margin: Rem(.5, 0),
        userSelect: 'none',
        transition: '.45s',
        transformOrigin: 'right',
      },
      hover: {
        transform: 'scale(2.5)',
      },
      children: [
        Text(`<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m13 17 5-5-5-5"></path>
          <path d="m6 17 5-5-5-5"></path>
          </svg>`, {
          type: 'span',
          style: {
            lineHeight: Rem(1),
            color: ThemeColors().dark,
          }
        }),
        Separator({ width: Rem(.25) }),
        Text(text, {
          style: {
            fontWeight: 500,
            color: ThemeColors().dark,
          }
        })
      ]
    })
  })
}

export {
  IconTextButton,
  TextIconButtonBg,
  GrowButton
};