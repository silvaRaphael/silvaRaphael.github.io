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
    })
  }, [])

  function saveData() {
    const newData = data
    newData.nome = getElement('#nome').value
    newData.email = getElement('#email').value
    newData.telefone = getElement('#telefone').value
    newData.whatsapp = getElement('#whatsapp').value
    newData.facebook = getElement('#facebook').value
    newData.linkedin = getElement('#linkedin').value
    newData.instagram = getElement('#instagram').value
    newData.descricao = getElement('#descricao').value
    newData.backgroundColor = getElement('#backgroundColor').value
    newData.textColor = getElement('#textColor').value
    newData.perfilImagem = getElement('#perfilImagem').value
    newData.buttonsShape = getElement('#buttonsShape').value
    newData.buttonsType = getElement('#buttonsType').value
    alert('Informações salvas com sucesso!')
  }

  const styles = {
    input: {
      padding: "8px",
      fontSize: "16px",
    }
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
              TextInput({
                id: "nome",
                placeHolder: "Nome",
                value : data?.nome,
                style: styles.input,
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
              TextInput({
                id: "email",
                placeHolder: "E-mail",
                value : data?.email,
                style: styles.input,
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
              TextInput({
                id: "telefone",
                placeHolder: "Telefone",
                value : data?.telefone,
                style: styles.input,
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
              TextInput({
                id: "whatsapp",
                placeHolder: "Whatsapp",
                value : data?.whatsapp,
                style: styles.input,
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
              TextInput({
                id: "instagram",
                placeHolder: "Instagram",
                value : data?.instagram,
                style: styles.input,
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
              TextInput({
                id: "linkedin",
                placeHolder: "LinkedIn",
                value : data?.linkedin,
                style: styles.input,
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
              TextInput({
                id: "facebook",
                placeHolder: "Facebook",
                value : data?.facebook,
                style: styles.input,
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
              TextInput({
                type: "textarea",
                rows: 3,
                id: "descricao",
                placeHolder: "Descrição",
                value : data?.descricao,
                style: styles.input,
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
              TextInput({
                type: "color",
                id: "backgroundColor",
                value : data?.preferencias?.backgroundColor,
                style: {
                  height: "32px"
                }
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
              TextInput({
                type: "color",
                id: "textColor",
                value : data?.preferencias?.textColor,
                style: {
                  height: "32px"
                }
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
              Select({
                id: 'perfilImagem',
                children: [
                  Option({
                    child: "Quadrada",
                    value: "square",
                    selected: data?.preferencias?.perfilImagem == "square"
                  }),
                  Option({
                    child: "Arredondada",
                    selected: data?.preferencias?.perfilImagem == "rounded"
                  }),
                  Option({
                    child: "Redonda",
                    value: "circle",
                    selected: data?.preferencias?.perfilImagem == "circle"
                  }),
                ]
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
              Select({
                id: "buttonsShape",
                children: [
                  Option({
                    child: "Quadrado",
                    value: "square",
                    selected: data?.preferencias?.buttons?.shape == "square"
                  }),
                  Option({
                    child: "Arredondado",
                    selected: data?.preferencias?.buttons?.shape == "rounded"
                  }),
                  Option({
                    child: "Redondo",
                    value: "circle",
                    selected: data?.preferencias?.buttons?.shape == "circle"
                  }),
                ]
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
              Select({
                id: "buttonsType",
                children: [
                  Option({
                    child: "Preenchido",
                    value: "fill",
                    selected: data?.preferencias?.buttons?.type == "fill"
                  }),
                  Option({
                    child: "Borda",
                    selected: data?.preferencias?.buttons?.type == "outline"
                  }),
                  Option({
                    child: "Transparente",
                    value: "transparent",
                    selected: data?.preferencias?.buttons?.type == "transparent"
                  }),
                ]
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

function Login() {

  const [ data, setData ] = State(null, Login)
  const [ nome, setNome ] = State(null, Login)
  const [ senha, setSenha ] = State(null, Login)

  Effect(() => {
    fetch('/src/data.json')
    .then(response => response.json())
    .then(response => {
      setData(response[location.hash.split('#')[1]])
    })
  }, [])

  function login() {
    if(getElement('#senha').value == data?.senha) {
      sessionStorage.setItem('logged', true)
      location.reload()
    } else {
      setSenha("");
      alert('Algo deu errado! Tente novamente!')
    }
  }

  const styles = {
    input: {
      padding: "8px",
      fontSize: "16px",
    }
  }
  
  return Statefull({
    key: Login,
    child: Center({
      child: Column({
        style: {
          width: "100%",
          padding: "20px",
        },
        children: [
          Text({
            child: "Login " + data?.nome,
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
                child: "Senha",
                style: {
                  marginBottom: "4px",
                }
              }),
              TextInput({
                type: "password",
                id: "senha",
                placeHolder: "Senha",
                value: senha,
                style: styles.input,
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
                onClick: () => login(),
                child: Button({
                  child: "Entrar",
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

  const logged = sessionStorage.getItem('logged')
  window.onpopstate = () => sessionStorage.setItem('logged', false)

  return (
    Router({
      routes: [
        {
          component: location.hash.split('#')[2] == "editar" ?
          logged == 'true' ? Editar() : Login() : Home(),
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