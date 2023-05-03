import { isPortuguese } from "../utils/preferences.js";

function WorksPopup({ work }) {

  const rows = (work?.rows ?? 1);

  return Row({
    style: {
      position: 'relative',
      background: ThemeColors().light,
      boxShadow: Rem(0, 0, 6) + ThemeColors().dark + 10,
      border: `solid 1px ${ThemeColors().dark}20`,
      borderRadius: Rem(.75),
      maxWidth: Pc(90),
      maxHeight: Pc(90),
    },
    children: [
      // close button
      GestureDetector({
        onClick: () => hideAlert(),
        child: Container({
          style: {
            padding: Rem(.25),
            background: ThemeColors().light,
            boxShadow: Rem(0, 0, 1) + ThemeColors().dark + 10,
            border: `solid 1px ${ThemeColors().dark}40`,
            borderRadius: Rem(.5),
            position: 'absolute',
            right: Rem(1),
            top: Rem(1),
          },
          child: Text(`<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>`, {
            style: {
              color: ThemeColors().dark,
              display: 'block',
              height: Rem(1.1),
            }
          })
        })
      }),

      Row({
        style: {
          padding: Rem(6, 4),
          overflowX: 'auto',
          justifyContent: Align.start,
        },
        children: [
          Column({
            style: {
              alignItems: Align.start,
              justifyContent: Align.spaced,
              minWidth: Rem(16),
              width: Rem(16),
            },
            children: [
              Column({
                style: {
                  alignItems: Align.start,
                  width: Pc(100),
                },
                children: [
                  Text(work.title, {
                    style: {
                      color: ThemeColors().dark,
                      fontWeight: 600,
                      fontSize: Rem(1.5),
                    }
                  }),
                  Text(work.category, {
                    style: {
                      color: ThemeColors().dark,
                      fontWeight: 700,
                      fontSize: Rem(.8),
                      opacity: .6,
                    }
                  }),

                  Separator({ height: Rem(1) }),

                  Text(work.description, {
                    style: {
                      color: ThemeColors().dark,
                    }
                  }),

                  Separator({ height: Rem(1) }),

                  work?.technologies ? Column({
                    style: {
                      alignItems: Align.start,
                    },
                    children: [
                      Text(isPortuguese() ? 'Tecnologias utilizadas:' : 'Technologies used:', {
                        style: {
                          color: ThemeColors().dark,
                          fontWeight: 600,
                        }
                      }),
                      Separator({ height: Rem(.25) }),
                      ...work?.technologies.map((item, index) => {
                        return Text('> ' + item, {
                          style: {
                            color: ThemeColors().dark,
                          }
                        });
                      })
                    ]
                  }) : '',
                ]
              }),

              BreakPoints.desktop.matches ? '' : Text(isPortuguese() ? 'Arraste pro lado >' : 'Drag to the side >', {
                style: {
                  color: ThemeColors().dark,
                  fontWeight: 600,
                }
              }),
            ]
          }),

          Separator({ width: Rem(4) }),

          Grid({
            columns: Math.ceil(work?.images.length / rows),
            rowGap: Rem(1),
            style: {
              justifyContent: Align.start,
            },
            children: [
              ...work?.images.map((item, index) => {
                return Column({
                  style: {
                    margin: Rem(0, 1),
                    justifyContent: Align.start,
                  },
                  children: [
                    GestureDetector({
                      onClick: () => {
                        showAlert({
                          id: 'imageZoom',
                          transition: 100,
                          style: {
                            background: ThemeColors().dark + 50,
                          },
                          child: Column({
                            children: [
                              // close button
                              GestureDetector({
                                onClick: () => hideAlert('imageZoom'),
                                child: Container({
                                  style: {
                                    padding: Rem(.25),
                                    background: ThemeColors().light,
                                    boxShadow: Rem(0, 0, 1) + ThemeColors().dark + 10,
                                    border: `solid 1px ${ThemeColors().dark}40`,
                                    borderRadius: Rem(.5),
                                    position: 'absolute',
                                    right: Rem(1),
                                    top: Rem(1),
                                  },
                                  child: Text(`<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                  </svg>`, {
                                    style: {
                                      color: ThemeColors().dark,
                                      display: 'block',
                                      height: Rem(1.1),
                                    }
                                  })
                                })
                              }),
                              Container({
                                style: {
                                  maxWidth: '90vw',
                                  maxHeight: '90vw',
                                },
                                child: Image({
                                  source: item.source,
                                  alt: item.title,
                                  size: ['auto', '90vh'],
                                  style: {
                                    maxWidth: '90vw',
                                  }
                                })
                              })
                            ]
                          })
                        });
                      },
                      child: Image({
                        source: item.source,
                        alt: item.title,
                        title: isPortuguese() ? 'Clique para aumentar' : 'Click to enlarge',
                        style: {
                          maxHeight: `calc(((90vh - (2 * 6rem)) - (${rows} * 3rem)) / ${rows})`,
                        }
                      })
                    }),
                    Separator({ height: Rem(1) }),
                    Text(item.title, {
                      style: {
                        color: ThemeColors().dark,
                        fontWeight: 500,
                        textAlign: Align.center,
                      }
                    })
                  ]
                });
              })
            ]
          })
        ]
      })
    ]
  });
}

export default WorksPopup;