import { render, Effect, State } from "../assets/modules/hooks.js";
import { Router, RouterLink } from "../assets/modules/Router.js";
import { Center, Column, Text, Statefull, Image, Link, Icon, Row, TextInput, GestureDetector, Button, Select, Option,  } from "../assets/modules/index.js";
import { Colors, Fonts, Sizes } from "../config/config.js";

function Home() {

  const [ data, setData ] = State(null, Home)

  Effect(() => {
    fetch('/src/data.json')
    .then(data => data.json())
    .then(data => setData(data[location.hash.split('#')[1]]))
  }, [])

  return Statefull({
    key: Home,
    child: Center({
      style: {
        backgroundColor: data?.preferencias?.backgroundColor,
        minHeight: "100vh",
      },
      child: data ? Column({
        style: {
          maxWidth: "768px",
          padding: "10px",
        },
        children: [
          Image({
            source: data?.perfilImagem,
            size: [ "100px", "100px" ],
            style: {
              borderRadius: data?.preferencias?.perfilImagem == "circle" ? "100%" :
              data?.preferencias?.perfilImagem == "rounded" ? "10%" : "0",
              margin: "10px",
            }
          }),
          Text({
            style: {
              color: data?.preferencias?.textColor,
              fontFamily: Fonts.primary,
              fontWeight: '500',
              fontSize: Sizes.title
            },
            child: data?.nome,
          }),
          Text({
            style: {
              color: data?.preferencias?.textColor,
              fontFamily: Fonts.secondary,
              fontSize: Sizes.normalText
            },
            child: data?.descricao,
          }),

          Column({
            children: [
              Row({
                style: {
                  flexWrap: "wrap",
                  marginTop: "10px",
                },
                children: [
                  data?.whatsapp ?
                  Link({
                    style: {
                      backgroundColor: data?.preferencias?.buttons?.type == "fill" ?
                      data?.preferencias?.textColor : data?.preferencias?.buttons?.outline ? data?.preferencias?.backgroundColor : "transparent",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: data?.preferencias?.buttons?.shape == "circle" ?
                      "100%" : data?.preferencias?.buttons?.shape == "rounded" ? "10%" : "0",
                      border: data?.preferencias?.buttons?.type == "outline" ? `1px solid ${data?.preferencias?.textColor}` : "",
                      margin: "10px",
                    },
                    to: `https://web.whatsapp.com/send?phone=${data?.whatsapp}&text=Ol%C3%A1!`,
                    target: '_blank',
                    child: Icon({
                      name: "fa-brands fa-whatsapp",
                      size: 28,
                      color: data?.preferencias?.buttons?.type == "fill" ?
                      data?.preferencias?.backgroundColor : data?.preferencias?.textColor
                    })
                  }) : "",
                  data?.facebook ?
                  Link({
                    style: {
                      backgroundColor: data?.preferencias?.buttons?.type == "fill" ?
                      data?.preferencias?.textColor : data?.preferencias?.buttons?.outline ? data?.preferencias?.backgroundColor : "transparent",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: data?.preferencias?.buttons?.shape == "circle" ?
                      "100%" : data?.preferencias?.buttons?.shape == "rounded" ? "10%" : "0",
                      border: data?.preferencias?.buttons?.type == "outline" ? `1px solid ${data?.preferencias?.textColor}` : "",
                      margin: "10px",
                    },
                    to: data?.facebook,
                    target: '_blank',
                    child: Icon({
                      name: "fa-brands fa-facebook",
                      size: 28,
                      color: data?.preferencias?.buttons?.type == "fill" ?
                      data?.preferencias?.backgroundColor : data?.preferencias?.textColor
                    })
                  }) : "",
                  data?.instagram ?
                  Link({
                    style: {
                      backgroundColor: data?.preferencias?.buttons?.type == "fill" ?
                      data?.preferencias?.textColor : data?.preferencias?.buttons?.outline ? data?.preferencias?.backgroundColor : "transparent",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: data?.preferencias?.buttons?.shape == "circle" ?
                      "100%" : data?.preferencias?.buttons?.shape == "rounded" ? "10%" : "0",
                      border: data?.preferencias?.buttons?.type == "outline" ? `1px solid ${data?.preferencias?.textColor}` : "",
                      margin: "10px",
                    },
                    to: data?.instagram,
                    target: '_blank',
                    child: Icon({
                      name: "fa-brands fa-instagram",
                      size: 28,
                      color: data?.preferencias?.buttons?.type == "fill" ?
                      data?.preferencias?.backgroundColor : data?.preferencias?.textColor
                    })
                  }) : "",
                  data?.linkedin ?
                  Link({
                    style: {
                      backgroundColor: data?.preferencias?.buttons?.type == "fill" ?
                      data?.preferencias?.textColor : data?.preferencias?.buttons?.outline ? data?.preferencias?.backgroundColor : "transparent",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: data?.preferencias?.buttons?.shape == "circle" ?
                      "100%" : data?.preferencias?.buttons?.shape == "rounded" ? "10%" : "0",
                      border: data?.preferencias?.buttons?.type == "outline" ? `1px solid ${data?.preferencias?.textColor}` : "",
                      margin: "10px",
                    },
                    to: data?.linkedin,
                    target: '_blank',
                    child: Icon({
                      name: "fa-brands fa-linkedin",
                      size: 28,
                      color: data?.preferencias?.buttons?.type == "fill" ?
                      data?.preferencias?.backgroundColor : data?.preferencias?.textColor
                    })
                  }) : "",
                  data?.email ?
                  Link({
                    style: {
                      backgroundColor: data?.preferencias?.buttons?.type == "fill" ?
                      data?.preferencias?.textColor : data?.preferencias?.buttons?.outline ? data?.preferencias?.backgroundColor : "transparent",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: data?.preferencias?.buttons?.shape == "circle" ?
                      "100%" : data?.preferencias?.buttons?.shape == "rounded" ? "10%" : "0",
                      border: data?.preferencias?.buttons?.type == "outline" ? `1px solid ${data?.preferencias?.textColor}` : "",
                      margin: "10px",
                    },
                    to: `mailto:${data?.email}`,
                    target: '_blank',
                    child: Icon({
                      name: "fa-regular fa-envelope",
                      size: 28,
                      color: data?.preferencias?.buttons?.type == "fill" ?
                      data?.preferencias?.backgroundColor : data?.preferencias?.textColor
                    })
                  }) : "",
                  data?.telefone ?
                  Link({
                    style: {
                      backgroundColor: data?.preferencias?.buttons?.type == "fill" ?
                      data?.preferencias?.textColor : data?.preferencias?.buttons?.outline ? data?.preferencias?.backgroundColor : "transparent",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: data?.preferencias?.buttons?.shape == "circle" ?
                      "100%" : data?.preferencias?.buttons?.shape == "rounded" ? "10%" : "0",
                      border: data?.preferencias?.buttons?.type == "outline" ? `1px solid ${data?.preferencias?.textColor}` : "",
                      margin: "10px",
                    },
                    to: `tel:+${data?.telefone}`,
                    target: '_blank',
                    child: Icon({
                      name: "fa-solid fa-phone",
                      size: 28,
                      color: data?.preferencias?.buttons?.type == "fill" ?
                      data?.preferencias?.backgroundColor : data?.preferencias?.textColor
                    })
                  }) : "",
                ]
              })
            ]
          })
        ]
      }) : ""
    })
  })
}

function Editar() {

  const [ data, setData ] = State(null, Editar)
  const [ nome, setNome ] = State(null, Editar)
  const [ email, setEmail ] = State(null, Editar)
  const [ telefone, setTelefone ] = State(null, Editar)
  const [ whatsapp, setWhatsapp ] = State(null, Editar)
  const [ facebook, setFacebook ] = State(null, Editar)
  const [ linkedin, setLinkedin ] = State(null, Editar)
  const [ instagram, setInstagram ] = State(null, Editar)
  const [ descricao, setDescricao ] = State(null, Editar)
  const [ backgroundColor, setBackgroundColor ] = State(null, Editar)
  const [ textColor, setTextColor ] = State(null, Editar)
  const [ perfilImagem, setPerfilImagem ] = State(null, Editar)
  const [ buttonsShape, setButtonShape ] = State(null, Editar)
  const [ buttonsType, setButtonsType ] = State(null, Editar)

  Effect(() => {
    fetch('/src/data.json')
    .then(response => response.json())
    .then(response => {
      setData(response[location.hash.split('#')[1]])
      setNome(response[location.hash.split('#')[1]]?.nome)
      setEmail(response[location.hash.split('#')[1]]?.email)
      setTelefone(response[location.hash.split('#')[1]]?.telefone)
      setWhatsapp(response[location.hash.split('#')[1]]?.whatsapp)
      setFacebook(response[location.hash.split('#')[1]]?.facebook)
      setLinkedin(response[location.hash.split('#')[1]]?.linkedin)
      setInstagram(response[location.hash.split('#')[1]]?.instagram)
      setDescricao(response[location.hash.split('#')[1]]?.descricao)
      setBackgroundColor(response[location.hash.split('#')[1]]?.preferencias?.backgroundColor)
      setTextColor(response[location.hash.split('#')[1]]?.preferencias?.textColor)
      setPerfilImagem(response[location.hash.split('#')[1]]?.preferencias?.perfilImagem)
      setButtonShape(response[location.hash.split('#')[1]]?.preferencias?.buttons?.shape)
      setButtonsType(response[location.hash.split('#')[1]]?.preferencias?.buttons?.type)
    })
  }, [])

  function saveData() {
    alert('Informações salvas com sucesso!')
  }

  return Statefull({
    key: Editar,
    child: Center({
      child: Column({
        style: {
          width: "100%",
          padding: "20px",
        },
        children: [
          Text({
            child: "Editar " + data?.nome,
            style: {
              marginBottom: "30px",
            }
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              Text({
                child: "Nome",
                style: {
                  marginBottom: "4px",
                }
              }),
              GestureDetector({
                onChange: ({target}) => {
                  setNome(target.value)
                },
                child: TextInput({
                  id: "nome",
                  placeHolder: "Nome",
                  value: nome,
                  style: {
                    padding: "8px",
                    fontSize: "16px",
                  }
                })
              })
            ]
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              Text({
                child: "E-mail",
                style: {
                  marginBottom: "4px",
                }
              }),
              GestureDetector({
                onChange: ({target}) => {
                  setEmail(target.value)
                },
                child: TextInput({
                  id: "email",
                  placeHolder: "E-mail",
                  value: email,
                  style: {
                    padding: "8px",
                    fontSize: "16px",
                  }
                })
              })
            ]
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              Text({
                child: "Telefone",
                style: {
                  marginBottom: "4px",
                }
              }),
              GestureDetector({
                onChange: ({target}) => {
                  setTelefone(target.value)
                },
                child: TextInput({
                  id: "telefone",
                  placeHolder: "Telefone",
                  value: telefone,
                  style: {
                    padding: "8px",
                    fontSize: "16px",
                  }
                })
              })
            ]
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              Text({
                child: "Whatsapp",
                style: {
                  marginBottom: "4px",
                }
              }),
              GestureDetector({
                onChange: ({target}) => {
                  setWhatsapp(target.value)
                },
                child: TextInput({
                  id: "whatsapp",
                  placeHolder: "Whatsapp",
                  value: whatsapp,
                  style: {
                    padding: "8px",
                    fontSize: "16px",
                  }
                })
              })
            ]
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              Text({
                child: "Instagram",
                style: {
                  marginBottom: "4px",
                }
              }),
              GestureDetector({
                onChange: ({target}) => {
                  setInstagram(target.value)
                },
                child: TextInput({
                  id: "instagram",
                  placeHolder: "Instagram",
                  value: instagram,
                  style: {
                    padding: "8px",
                    fontSize: "16px",
                  }
                })
              })
            ]
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              Text({
                child: "LinkedIn",
                style: {
                  marginBottom: "4px",
                }
              }),
              GestureDetector({
                onChange: ({target}) => {
                  setLinkedin(target.value)
                },
                child: TextInput({
                  id: "linkedin",
                  placeHolder: "LinkedIn",
                  value: linkedin,
                  style: {
                    padding: "8px",
                    fontSize: "16px",
                  }
                })
              })
            ]
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              Text({
                child: "Facebook",
                style: {
                  marginBottom: "4px",
                }
              }),
              GestureDetector({
                onChange: ({target}) => {
                  setFacebook(target.value)
                },
                child: TextInput({
                  id: "facebook",
                  placeHolder: "Facebook",
                  value: facebook,
                  style: {
                    padding: "8px",
                    fontSize: "16px",
                  }
                })
              })
            ]
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              Text({
                child: "Descrição",
                style: {
                  marginBottom: "4px",
                }
              }),
              GestureDetector({
                onChange: ({target}) => {
                  setDescricao(target.value)
                },
                child: TextInput({
                  type: "textarea",
                  rows: 3,
                  id: "descricao",
                  placeHolder: "Descrição",
                  value: descricao,
                  style: {
                    padding: "8px",
                    fontSize: "16px",
                  }
                })
              })
            ]
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              Text({
                child: "Cor de Fundo",
                style: {
                  marginBottom: "4px",
                }
              }),
              GestureDetector({
                onChange: ({target}) => {
                  setBackgroundColor(target.value)
                },
                child: TextInput({
                  type: "color",
                  id: "backgroundColor",
                  value: backgroundColor,
                  style: {
                    height: "32px"
                  }
                })
              })
            ]
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              Text({
                child: "Cor do Texto",
                style: {
                  marginBottom: "4px",
                }
              }),
              GestureDetector({
                onChange: ({target}) => {
                  setTextColor(target.value)
                },
                child: TextInput({
                  type: "color",
                  id: "textColor",
                  value: textColor,
                  style: {
                    height: "32px"
                  }
                })
              })
            ]
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              Text({
                child: "Estilo da Imagem",
                style: {
                  marginBottom: "4px",
                }
              }),
              GestureDetector({
                onChange: ({target}) => {
                  setPerfilImagem(target.value)
                },
                child: Select({
                  children: [
                    Option({
                      child: "Quadrada",
                      value: "square",
                      selected: perfilImagem == "square"
                    }),
                    Option({
                      child: "Arredondada",
                      value: "rounded",
                      selected: perfilImagem == "rounded"
                    }),
                    Option({
                      child: "Redonda",
                      value: "circle",
                      selected: perfilImagem == "circle"
                    }),
                  ]
                })
              })
            ]
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              Text({
                child: "Formato dos Botões",
                style: {
                  marginBottom: "4px",
                }
              }),
              GestureDetector({
                onChange: ({target}) => {
                  setButtonShape(target.value)
                },
                child: Select({
                  children: [
                    Option({
                      child: "Quadrado",
                      value: "square",
                      selected: buttonsShape == "square"
                    }),
                    Option({
                      child: "Arredondado",
                      value: "rounded",
                      selected: buttonsShape == "rounded"
                    }),
                    Option({
                      child: "Redondo",
                      value: "circle",
                      selected: buttonsShape == "circle"
                    }),
                  ]
                })
              })
            ]
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              Text({
                child: "Fundo dos Botões",
                style: {
                  marginBottom: "4px",
                }
              }),
              GestureDetector({
                onChange: ({target}) => {
                  setButtonsType(target.value)
                },
                child: Select({
                  children: [
                    Option({
                      child: "Preenchido",
                      value: "fill",
                      selected: buttonsType == "fill"
                    }),
                    Option({
                      child: "Borda",
                      value: "outline",
                      selected: buttonsType == "outline"
                    }),
                    Option({
                      child: "Transparente",
                      value: "transparent",
                      selected: buttonsType == "transparent"
                    }),
                  ]
                })
              })
            ]
          }),
          Column({
            style: {
              alignItems: "start",
              width: "100%",
              marginBottom: "10px",
            },
            children: [
              GestureDetector({
                onClick: () => saveData(),
                child: Button({
                  child: "Salvar",
                  style: {
                    padding: "8px",
                    fontSize: "16px",
                  }
                })
              })
            ]
          }),
        ]
      })
    })
  })
}

function Error() {
  return Center({
    style: {
      height: '100vh',
      backgroundColor: Colors.bodyColor
    },
    child: Column({
      children: [
        Text({
          style: {
            color: Colors.textColor,
            fontFamily: Fonts.primary,
            fontWeight: '500',
            fontSize: Sizes.title
          },
          child: 'Página não Encontrada!',
        }),
        RouterLink({
          to: '/',
          child: 'Ir para Home'
        })
      ]
    })
  })
}

export default function AppRoutes() {

  return (
    Router({
      routes: [
        {
          component: location.hash.split('#')[2] == "editar" ? Editar() : Home(),
          path: '/'
        },
        {
          component: Error(),
          path: '/error'
        },
      ]
    })
  )
}

render(AppRoutes())