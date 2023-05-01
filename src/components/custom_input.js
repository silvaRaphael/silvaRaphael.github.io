function CustomInput(name, form = '') {

  let formNoSlash = form;

  form = form ? `#${form}` : '';

  return {
    outlineColor: color => getElement(`.${formNoSlash}${name}Outline`).style.borderColor = color,
    iconColor: color => getElement(`${form} .${name}SuffixIcon svg`).style.color = color,
    labelColor: color => getElement(`${form} [for="${formNoSlash}${name}"]`).style.color = color,
    alert: alert => getElement(`.${formNoSlash}${name}Alert`).textContent = alert,
    setValue: value => getElement(`#${formNoSlash}${name}`).value = value,
    value: getElement(`#${formNoSlash}${name}`)?.value,
    input: ({ type, min, value, placeholder, accentColor, color, style, fontSize, affixIcon, suffixIcon, mask }) => {

      const affixButton = () => {

        if (affixIcon) {
          return Container({
            className: `${name}affixIcon`,
            style: {
              margin: Px(0, 12),
            },
            child: Icon({
              name: affixIcon,
              size: Px(14),
              color: color ?? '#fff',
              opacity: '.75',
            })
          })
        }

        return ''
      }

      const suffixButton = () => {

        if (suffixIcon) {
          return Container({
            className: `${name}SuffixIcon`,
            style: {
              margin: Px(0, 12),
            },
            child: Icon({
              name: suffixIcon,
              size: Px(14),
              color: color ?? '#fff',
              opacity: '.75',
            })
          })
        }

        if (type == 'password') {
          return GestureDetector({
            onClick: () => {
              if (getElement(`[name="${name}"]`).type == 'password') {
                getElement(`[name="${name}"]`).type = 'text';
                getElement(`.${name}SuffixIcon svg`).classList.add('fa-eye-slash');
              } else {
                getElement(`[name="${name}"]`).type = 'password';
                getElement(`.${name}SuffixIcon svg`).classList.add('fa-eye');
                getElement(`.${name}SuffixIcon svg`).classList.remove('fa-eye-slash');
              }
            },
            child: Container({
              className: `${name}SuffixIcon`,
              style: {
                margin: Px(0, 12),
              },
              child: Icon({
                name: 'fa-regular fa-eye',
                size: Px(14),
                color: color ?? '#fff',
                opacity: '.75',
              })
            })
          })
        }

        return ''
      }

      Style({
        selector: `${form} [name="${name}"]::placeholder`,
        opacity: '0',
      })

      Style({
        selector: `${form} [for="${formNoSlash}${name}"]`,
        position: 'absolute',
        bottom: Px(6),
        left: affixButton() ? Px(40) : Px(16),
        color: color ?? '#fff',
        fontSize: Px(13),
        opacity: '.75',
        cursor: 'text',
        userSelect: 'none',
        transition: '.2s',
      })

      Style({
        selector: [
          `${form} [for="${formNoSlash}${name}"]:has(~[name="${name}"]:focus)`,
          `${form} [for="${formNoSlash}${name}"]:has(~[name="${name}"]:not(:placeholder-shown))`
        ],
        bottom: type == 'textarea' ? Rem(3.5) : Rem(1.5),
        left: Px(0),
        color: accentColor ?? Colors.primary,
        fontSize: fontSize ?? Rem(.8),
        opacity: '1',
        cursor: 'normal',
      })

      function handleInputChange(event) {
        if (mask) {

          function maskField() {
            let input = event.target;
            let inputValue = ''

            for (let index = 0; index < input.value.length; index++) {
              let digit = input.value.split('')[index]
              if (mask.length == index) {
                inputValue += ''
              } else {
                let maskDigit = mask.split('')[index];

                // if mask is number
                if (maskDigit?.match(/\d/)) {
                  // if digit is not number
                  if (!digit.match(/\d/)) {
                    inputValue += ''
                  } else {
                    inputValue += digit
                  }
                  // if mask is symbol
                } else if (maskDigit?.match(/\W/)) {
                  // if digit is number
                  if (digit.match(/\d/)) maskDigit += digit
                  inputValue += maskDigit;
                }

              }
            }

            input.value = inputValue
          }

          maskField()

          if (event.inputType == 'insertFromPaste') maskField()
        }
      }

      return Column({
        style: {
          width: Pc(100),
          alignItems: Align.end,
          margin: Px(0, 0, 12, 0),
          ...style,
        },
        children: [
          Container({
            className: `${formNoSlash}${name}Outline`,
            style: {
              borderBottom: `solid 2px ${accentColor ?? Colors.primary}`,
              width: Pc(100),
              position: 'relative',
            },
            child: Row({
              style: {
                width: Pc(100),
                alignItems: Align.end,
              },
              children: [

                Text(placeholder, {
                  type: 'label',
                  labelTo: `${formNoSlash}${name}`,
                }),

                Container({
                  style: {
                    padding: Px(6, 0),
                  },
                  child: affixButton()
                }),

                GestureDetector({
                  onInput: (event) => handleInputChange(event),
                  child: TextInput({
                    type: type,
                    min: min,
                    rows: type == 'textarea' ? 3 : null,
                    id: `${formNoSlash}${name}`,
                    name: name,
                    placeholder: placeholder,
                    value: value,
                    autocomplete: false,
                    style: {
                      // height: type == 'textarea' ? Rem(4) : Pc(100),
                      lineHeight: Rem(1),
                      backgroundColor: Colors.transparent,
                      color: color ?? '#fff',
                      caretColor: color ?? '#fff',
                      padding: Px(0),
                      margin: Rem(.3, 0),
                      cursor: 'text',
                      resize: 'none',
                      fontSize: fontSize ?? Rem(.8),
                    },
                  })
                }),

                Container({
                  style: {
                    padding: Px(6, 0),
                  },
                  child: suffixButton()
                }),
              ]
            })
          }),

          // error message
          Text('', {
            className: `${formNoSlash}${name}Alert`,
            style: {
              color: Colors.alert,
              fontSize: Px(11),
              height: Px(13),
              fontWeight: '600',
              textAlign: Align.end,
            }
          }),
        ]
      })
    }
  }
}

function CustomSelect(name, form = '') {

  let formNoSlash = form;

  form = form ? `#${form}` : '';

  return {
    outlineColor: (color) => getElement(`.${formNoSlash}${name}Outline`).style.borderColor = color,
    alert: (alert) => getElement(`.${formNoSlash}${name}Alert`).textContent = alert,
    value: (value) => getElement(`#${formNoSlash}${name}`).value = value,
    select: ({ notNull, placeholder, value, accentColor, color, style, affixIcon, optionsColor, options = [] }) => {

      const affixButton = () => {

        if (affixIcon) {
          return Container({
            className: `${name}affixIcon`,
            style: {
              margin: Px(0, 12),
            },
            child: Icon({
              name: affixIcon,
              size: Px(14),
              color: color ?? '#fff',
              opacity: '.75',
            })
          })
        }

        return ''
      }

      Style({
        selector: `${form} [name="${name}"] option`,
        backgroundColor: optionsColor ?? '#fff',
      })

      Style({
        selector: `${form} [for="${formNoSlash}${name}"]`,
        position: 'absolute',
        bottom: Px(6),
        left: affixButton() ? Px(40) : Px(16),
        color: color ?? '#fff',
        fontSize: Px(13),
        opacity: '.75',
        cursor: 'default',
        transition: '.2s',
      })

      Style({
        selector: `${form} [name="${name}"]:valid ~ [for="${formNoSlash}${name}"]`,
        bottom: Px(24),
        left: Px(0),
        color: accentColor ?? Colors.primary,
        fontSize: Px(11),
        opacity: '1',
        cursor: 'normal',
      })

      return Column({
        style: {
          width: Pc(100),
          alignItems: Align.end,
          margin: Px(0, 0, 12, 0),
          ...style,
        },
        children: [
          Container({
            className: `${formNoSlash}${name}Outline`,
            style: {
              borderBottom: `solid 2px ${accentColor ?? Colors.primary}`,
              width: Pc(100),
              position: 'relative',
            },
            child: Row({
              style: {
                width: Pc(100),
                alignItems: Align.end,
              },
              children: [

                Container({
                  style: {
                    padding: Px(6, 0),
                  },
                  child: affixButton()
                }),

                GestureDetector({
                  onInput: (event) => { },
                  child: Select({
                    id: `${formNoSlash}${name}`,
                    name: name,
                    value: value,
                    style: {
                      backgroundColor: Colors.transparent,
                      color: color ?? '#fff',
                      padding: Px(6, 0),
                      cursor: 'unset',
                      zIndex: 1,
                    },
                    children: [
                      notNull ? '' : Option({
                        value: '',
                        child: '',
                      }),
                      ...options.map((item, index) => {
                        return Option({
                          value: item[0],
                          child: item[1],
                          selected: value == item[0],
                        })
                      })
                    ]
                  })
                }),

                Text(placeholder, {
                  type: 'label',
                  labelTo: `${formNoSlash}${name}`,
                }),
              ]
            })
          }),

          // error message
          Text('', {
            className: `${formNoSlash}${name}Alert`,
            style: {
              color: Colors.alert,
              fontSize: Px(11),
              height: Px(13),
              fontWeight: '600',
              textAlign: Align.end,
            }
          }),
        ]
      })
    }
  }
}

function CustomCheckbox(name, form = '') {

  let formNoSlash = form;

  form = form ? `#${form}` : '';

  return {
    outlineColor: (color) => getElement(`.${formNoSlash}${name}Outline`).style.borderColor = color,
    alert: (alert) => getElement(`.${formNoSlash}${name}Alert`).textContent = alert,
    value: (value) => getElement(`#${formNoSlash}${name}`).value = value,
    checkbox: ({ placeholder, checked, accentColor, color, style, suffixIcon }) => {

      const suffixButton = () => {

        if (suffixIcon) {
          return Container({
            className: `${name}SuffixIcon`,
            style: {
              margin: Px(0, 12),
            },
            child: Icon({
              name: suffixIcon,
              size: Px(14),
              color: color ?? '#fff',
              opacity: '.75',
            })
          })
        }

        return ''
      }

      Style({
        selector: `${form} [for="${formNoSlash}${name}"]`,
        position: 'absolute',
        bottom: Px(6),
        left: Px(42),
        color: color ?? '#fff',
        fontSize: Px(13),
        opacity: '.75',
        cursor: 'default',
        transition: '.2s',
        userSelect: 'none',
      })

      Style({
        selector: `${form} [name="${name}"]:checked ~ [for="${formNoSlash}${name}"]`,
        bottom: Px(24),
        left: Px(0),
        color: accentColor ?? Colors.primary,
        fontSize: Px(11),
        opacity: '1',
        cursor: 'normal',
      })

      return Column({
        style: {
          width: Pc(100),
          alignItems: Align.end,
          margin: Px(0, 0, 12, 0),
          height: Pc(100),
          ...style,
        },
        children: [
          Container({
            className: `${formNoSlash}${name}Outline`,
            style: {
              borderBottom: `solid 2px ${accentColor ?? Colors.primary}`,
              width: Pc(100),
              position: 'relative',
              height: Pc(100),
            },
            child: GestureDetector({
              onClick: (e) => {
                if (e.target.id != `${formNoSlash}${name}` && getElement(`#${formNoSlash}${name}`).checked) {
                  getElement(`#${formNoSlash}${name}`).click()
                }
              },
              child: Row({
                style: {
                  width: Pc(100),
                  alignItems: Align.end,
                  justifyContent: Align.end,
                  cursor: 'unset',
                },
                children: [

                  TextInput({
                    type: 'checkbox',
                    id: `${formNoSlash}${name}`,
                    name: name,
                    checked: checked,
                    style: {
                      width: Px(16),
                      height: Px(16),
                      cursor: 'unset',
                      zIndex: 1,
                      position: 'absolute',
                      left: Px(16),
                      bottom: Px(6),
                    },
                  }),

                  Text(placeholder, {
                    type: 'label',
                    labelTo: `${formNoSlash}${name}`,
                  }),

                  Container({
                    style: {
                      padding: Px(6, 0),
                    },
                    child: suffixButton()
                  }),
                ]
              })
            })
          }),

          // error message
          Text('', {
            className: `${formNoSlash}${name}Alert`,
            style: {
              color: Colors.alert,
              fontSize: Px(11),
              height: Px(13),
              fontWeight: '600',
              textAlign: Align.end,
            }
          }),
        ]
      })
    }
  }
}

export {
  CustomInput,
  CustomSelect,
  CustomCheckbox
}