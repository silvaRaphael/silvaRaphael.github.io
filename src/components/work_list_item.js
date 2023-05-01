function WorkListItem({ title, category, description, year, onPressed }) {

  const descriptionMaxLength = 60;

  const customTitle = ` <i>(${title})</i>`;

  Style({
    selector: [`.work-description i`],
    fontWeight: 500,
    color: ThemeColors().dark,
  });

  Style({
    selector: [`.work:hover .work-title`],
    transform: 'scale(1.5)',
    opacity: .7,
  });

  Style({
    selector: [`.work:hover .work-description`],
    transform: 'translateX(.75rem)',
  });

  Style({
    selector: [`.work:hover .work-year`],
    transform: 'scale(.75)',
  });

  return GestureDetector({
    onClick: onPressed,
    child: Row({
      className: `work`,
      style: {
        width: Size.fullContent,
        justifyContent: Align.spaced,
        alignItems: Align.center,
        padding: Rem(1, 2),
        boxShadow: Rem(0, 0, 6) + ThemeColors().dark + 10,
        border: `solid 1px ${ThemeColors().dark}20`,
        borderRadius: Rem(.75),
        margin: Rem(1, 0),
      },
      children: [
        Row({
          className: `work-title`,
          style: {
            width: Pc(35),
            justifyContent: Align.start,
            alignItems: Align.end,
            padding: Rem(0),
            margin: Rem(.5, 0),
            userSelect: 'none',
            transition: '.25s',
            transformOrigin: 'left',
          },
          children: [
            Text(category, {
              style: {
                color: ThemeColors().dark,
                fontSize: Rem(2),
                fontWeight: 500,
              }
            }),
            Separator({ width: Rem(.25) }),
            Text(`<svg width="32" height="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m13 17 5-5-5-5"></path>
              <path d="m6 17 5-5-5-5"></path>
              </svg>`, {
              type: 'span',
              style: {
                lineHeight: Rem(1),
                color: ThemeColors().dark,
              }
            }),
          ]
        }),

        Text(((description.length + customTitle.length + 3) > descriptionMaxLength ? description.slice(0, descriptionMaxLength - customTitle.length) + '...' : description) + customTitle, {
          className: `work-description`,
          style: {
            width: Pc(50),
            textAlign: Align.start,
            color: ThemeColors().dark,
            transition: '.4s',
            userSelect: 'none',
          }
        }),

        Text(year, {
          className: `work-year`,
          style: {
            width: Pc(15),
            textAlign: Align.end,
            color: ThemeColors().dark,
            fontSize: Rem(3),
            fontWeight: 900,
            opacity: .5,
            letterSpacing: Rem(-.25),
            userSelect: 'none',
            transition: '.25s',
            transformOrigin: 'right',
          }
        }),
      ]
    })
  });
}

export default WorkListItem;