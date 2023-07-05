import { changeRoute } from "../../assets/modules/Router.js";
import { isLightMode, isPortuguese } from "../utils/preferences.js";

import HeaderHome from "../components/header_home.js";
import { GrowButton, IconTextButton, TextIconButtonBg } from "../components/icon_text_button.js";
import WorkListItem from "../components/work_list_item.js";
import WorksPopup from "../components/works_popup.js";
// import { CustomInput } from "../components/custom_input.js";
// import { validEmail } from "../../assets/scripts/validations.js";


/* function sendMessage() {

	const name = CustomInput('name', 'contact');
	const phone = CustomInput('phone', 'contact');
	const email = CustomInput('email', 'contact');
	const message = CustomInput('message', 'contact');

	name.alert(name.value ? '' : isPortuguese() ? 'digite um nome' : 'enter a name');
	name.outlineColor(name.value ? ThemeColors().dark : Colors.alert);
	name.iconColor(name.value ? ThemeColors().dark : Colors.alert);
	name.labelColor(name.value ? ThemeColors().dark : Colors.alert);

	email.alert(email.value && validEmail(email.value) ? '' : isPortuguese() ? 'digite um e-mail' : 'enter an email');
	email.outlineColor(email.value && validEmail(email.value) ? ThemeColors().dark : Colors.alert);
	email.iconColor(email.value && validEmail(email.value) ? ThemeColors().dark : Colors.alert);
	email.labelColor(email.value && validEmail(email.value) ? ThemeColors().dark : Colors.alert);

	message.alert(message.value ? '' : isPortuguese() ? 'digite uma mensagem' : 'enter a message');
	message.outlineColor(message.value ? ThemeColors().dark : Colors.alert);
	message.iconColor(message.value ? ThemeColors().dark : Colors.alert);
	message.labelColor(message.value ? ThemeColors().dark : Colors.alert);

	const fieldsVerification = [
		!!name.value,
		validEmail(email.value),
		!!message.value,
	];

	if (!fieldsVerification.includes(false)) {
		name.setValue('');
		phone.setValue('');
		email.setValue('');
		message.setValue('');

		showAlert({
			child: Column({
				style: {
					background: ThemeColors().light,
					borderRadius: Rem(1),
					border: `1px solid ${ThemeColors().light}50`,
					boxShadow: Rem(0, 0, 2) + ThemeColors().dark + 20,
					padding: Rem(2),
				},
				children: [
					Text(isPortuguese() ? 'Sucesso!' : 'Success!', {
						style: {
							color: ThemeColors().dark,
							fontSize: Rem(1.5),
							fontWeight: 500,
						}
					}),
					Separator({ height: Rem(.75) }),
					Text(isPortuguese() ? 'Mensagem enviada com sucesso!' : 'Success sending your message!', {
						style: {
							color: ThemeColors().dark,
						}
					}),
					Separator({ height: Rem(.75) }),
					GestureDetector({
						onClick: () => hideAlert(),
						child: Text(isPortuguese() ? 'Ok, continuar' : 'Ok, continue', {
							style: {
								padding: Rem(.2, .5),
								margin: Rem(.2, 0),
								color: ThemeColors().light,
								background: ThemeColors().dark,
								border: `solid 1px ${ThemeColors().light}`,
								transition: '.5s',
							},
							hover: {
								background: ThemeColors().light,
								border: `solid 1px ${ThemeColors().dark}`,
								color: ThemeColors().dark,
							},
						})
					})
				]
			})
		});
	}
} */

function HomePage() {

	document.title = isPortuguese() ? 'Raphael Silva | Desenvolvedor Full-Stack' : 'Raphael Silva | Full Stack Developer';

	const WORKS_LIST = [
		/* {
			title: isPortuguese() ? 'App de Tarefas' : 'Task Mobile App',
			category: isPortuguese() ? 'Aplicativo' : 'Mobile app',
			description: isPortuguese() ?
				`Esse app de tarefas é uma ferramenta para ajudar o usuário a gerenciar suas tarefas diárias e aumentar sua produtividade.` :
				`This task app is a user-friendly tool to help you manage your daily tasks and increase productivity.`,
			year: '2021',
			technologies: [
				'figma',
				'react native',
			],
			images: [
				{ title: isPortuguese() ? 'Tela inicial' : 'Home screen', source: '/src/images/tasks-1.png' },
				{ title: isPortuguese() ? 'Adicionar tarefa' : 'Add task ', source: '/src/images/tasks-2.png' },
			]
		}, */
		{
			title: isPortuguese() ? 'Site de Loja de Tênis' : 'Sneaker Store Website',
			category: isPortuguese() ? 'Site' : 'Website',
			description: isPortuguese() ?
				`Só uma página básica em html, css e js, de uma loja de tênis, com algumas funcionalidades js e um design moderno.` :
				`Just a basic html, css and js website page, of a sneaker store, with some js functionalities and modern design.`,
			year: '2021',
			technologies: [
				'figma',
				'html',
				'css',
				'javascript',
			],
			images: [
				{ title: isPortuguese() ? 'Tela inicial' : 'Home screen', source: '/src/images/shoe-store-1.png' },
				{ title: isPortuguese() ? 'Tela inicial' : 'Home screen', source: '/src/images/shoe-store-2.png' },
			]
		},
		{
			title: isPortuguese() ? 'App de Loja' : 'Store Mobile App',
			category: isPortuguese() ? 'Aplicativo' : 'Mobile app',
			description: isPortuguese() ?
				`Um projeto de app de loja simples` :
				`A simple store mobile app project`,
			year: '2021',
			technologies: [
				'figma',
				'react native',
			],
			images: [
				{ title: isPortuguese() ? 'Tela inicial' : 'Home screen', source: '/src/images/sports-store-1.png' },
				{ title: isPortuguese() ? 'Detalhes do produto' : 'Product details', source: '/src/images/sports-store-2.png' },
			]
		},
		{
			title: isPortuguese() ? 'App de Loja' : 'Store Mobile App',
			category: isPortuguese() ? 'Aplicativo' : 'Mobile app',
			description: isPortuguese() ?
				`App de loja com produtos da NBA com autenticação e armazenamento de dados.` :
				`Store mobile app with NBA products with authentication and data storage`,
			year: '2022',
			technologies: [
				'figma',
				'react native',
			],
			images: [
				{ title: isPortuguese() ? 'Tela de login' : 'Login screen', source: '/src/images/nba-1.png' },
				{ title: isPortuguese() ? 'Tela inicial' : 'Home screen', source: '/src/images/nba-2.png' },
				{ title: isPortuguese() ? 'Detalhes do produto' : 'Product details', source: '/src/images/nba-3.png' },
				{ title: isPortuguese() ? 'Carrinho' : 'Cart screen', source: '/src/images/nba-4.png' },
				{ title: isPortuguese() ? 'Tela de pagamento' : 'Payment screen', source: '/src/images/nba-5.png' },
				{ title: isPortuguese() ? 'Tela de perfil' : 'Profile screen', source: '/src/images/nba-6.png' },
			]
		},
		{
			title: isPortuguese() ? 'Gerenciador de Tarefas' : 'Task Manager',
			category: 'Web App',
			description: isPortuguese() ?
				`É uma aplicação web spa, serve como gerenciador de tarefas, pode se criar eventos na agenda, listas para gerenciamento de compras, 
      e em breve terá mais funcionalidades.` :
				`It is a spa web application, serves as a task manager, can create events on the calendar, lists for shopping management,
        and will soon have more functionabilities.`,
			year: '2022',
			technologies: [
				'figma',
				'firebase',
				'javascript',
				'SPA_Frameword',
			],
			deploy_link: 'https://gerenciador-001.web.app',
			rows: 2,
			images: [
				{ title: isPortuguese() ? 'Tela inicial' : 'Home screen', source: '/src/images/gerenciador-1.png' },
				{ title: isPortuguese() ? 'Caixa de pesquisa dinâmica' : 'Dinamic search', source: '/src/images/gerenciador-2.png' },
				{ title: isPortuguese() ? 'Planejamento semanal' : 'Weekly planning', source: '/src/images/gerenciador-4.png' },
				{ title: isPortuguese() ? 'Tela de listas' : 'Lists screen', source: '/src/images/gerenciador-6.png' },
				{ title: isPortuguese() ? 'Tela de lista' : 'List screen', source: '/src/images/gerenciador-7.png' },
				{ title: isPortuguese() ? 'Tela de configurações' : 'Settings screen', source: '/src/images/gerenciador-8.png' },
				{ title: isPortuguese() ? 'Tela de registro' : 'Register screen', source: '/src/images/gerenciador-5.png' },
				{ title: isPortuguese() ? 'Tela de login' : 'Login screen', source: '/src/images/gerenciador-3.png' },
			]
		},
		{
			title: isPortuguese() ? 'App de Filmes e Séries' : 'Movies and Series App',
			category: isPortuguese() ? 'Aplicativo' : 'Mobile app',
			description: isPortuguese() ?
				`Aplicativo de catálogo de filmes e séries que utiliza a API themoviedb, permite ao usuário salvar nos favoritos, 
      pesquisar por nome ou categoria e ver os últimos filmes e séries lançados, mostra onde encontrar o filme ou série, 
      em streaming, para alugar ou comprar.` :
				`Movies and series catalog app that uses themoviedb API, it allows the user to save to favorites, search by name 
      or category and see the most recent movies and series released, it shows where you can find the movie or serie, on 
      stream, for rent or buy.`,
			year: '22/23',
			technologies: [
				'figma',
				'themoviedb API',
				'flutter',
			],
			github_link: 'https://github.com/silvaRaphael/movie-app',
			images: [
				{ title: isPortuguese() ? 'Tela inicial' : 'Home screen', source: '/src/images/movies-home.png' },
				{ title: isPortuguese() ? 'Detalhes do filme/série' : 'Movie/Serie details', source: '/src/images/movies-details-1.png' },
				{ title: isPortuguese() ? 'Detalhes do filme/série' : 'Movie/Serie details', source: '/src/images/movies-details-2.png' },
				{ title: isPortuguese() ? 'Tela de favoritos' : 'Favorites screen', source: '/src/images/movies-favorites.png' },
				{ title: isPortuguese() ? 'Tela de categorias' : 'Categories screen', source: '/src/images/movies-categories.png' },
				{ title: isPortuguese() ? 'Tela de pesquisa' : 'Search screen', source: '/src/images/movies-search.png' },
			]
		},
		{
			title: isPortuguese() ? 'Back-end app de conversa' : 'Back end Chat App',
			category: 'API',
			description: isPortuguese() ?
				`Uma API simples para envio e recebimento de mensagens em tempo real em node.js, utilizando mongoDB, socket.io, typescript e conceitos SOLID.` :
				`A simple API for sending and receiving messages real time with node.js, using mongoDB, socket.io, tyhpescript and SOLID concepts.`,
			year: '2023',
			technologies: [
				'node.js',
				'typescript',
				'mongoDB',
				'socket.io',
			],
			github_link: 'https://github.com/silvaRaphael/node-chatapp',
		},
	];

	const SKILLS_LIST = [
		{
			title: isPortuguese() ? 'back-end >' : 'back end >',
			list: [
				{ title: 'node.js' },
				{ title: 'firebase' },
				{ title: 'typescript' },
				{ title: 'PHP' },
				{ title: 'express' },
				{ title: 'APIs' },
				{ title: 'mongoDB' },
				{ title: 'jest' },
				{ title: 'MySql' },
			]
		},
		{
			title: isPortuguese() ? 'front-end >' : 'front end >',
			list: [
				{ title: 'html' },
				{ title: 'css' },
				{ title: 'javascript' },
				{ title: 'jQuery' },
				{ title: 'react js' },
			]
		},
		{
			title: 'mobile >',
			list: [
				{ title: 'flutter' },
			]
		},
		{
			title: 'design >',
			list: [
				{ title: 'figma' },
			]
		}
	];

	return Column({
		style: {
			width: Size.fullContent,
			fontSize: Rem(1.1),
			background: ThemeColors().light,
		},
		children: [
			Container({
				id: isPortuguese() ? 'Inicio' : 'Beginning',
			}),

			// header
			Container({
				style: {
					width: Size.fullContent,
					position: 'fixed',
					background: ThemeColors().light + 'd9',
					zIndex: 9,
				},
				child: HeaderHome()
			}),

			Separator({ height: Rem(3) }),

			// banner
			Row({
				style: {
					padding: Rem(12, 3, 6),
					width: Size.fullContent,
					justifyContent: Align.start,
					alignItems: Align.end,
				},
				children: [
					Row({
						style: {
							position: 'relative',
							maxWidth: Pc(100),
							justifyContent: Align.start,
						},
						children: [
							isPortuguese() ? Text(`Desenvolvedor<br>
                Full-Stack`, {
								style: {
									fontSize: BreakPoints.mobile.matches ? Rem(3.5) : BreakPoints.tablet.matches ? Rem(5) : Rem(7.95),
									fontWeight: 500,
									lineHeight: Em(.8),
									letterSpacing: Em(-.05),
									color: ThemeColors().dark,
									wordBreak: 'break-word',
									paddingRight: BreakPoints.mobile.matches ? Rem(0) : BreakPoints.tablet.matches ? Rem(3.5) : Rem(3),
								}
							}) : Text(`Full Stack<br>
                Developer`, {
								style: {
									fontSize: BreakPoints.mobile.matches ? Rem(3.5) : BreakPoints.tablet.matches ? Rem(5.75) : Rem(8),
									fontWeight: 500,
									lineHeight: Em(.8),
									letterSpacing: Em(-.05),
									color: ThemeColors().dark,
									paddingRight: BreakPoints.mobile.matches ? Rem(6.5) : BreakPoints.tablet.matches ? Rem(14) : Rem(20),
								}
							}),
							Row({
								style: {
									position: 'absolute',
									bottom: BreakPoints.mobile.matches ? Rem(-4) : Px(0),
									right: BreakPoints.mobile.matches ? 'unset' : Px(0),
									left: BreakPoints.mobile.matches ? Rem(0) : 'unset',
									paddingRight: isPortuguese() ? Rem(1.75) : Rem(.5),
									paddingBottom: Rem(.3),
									alignItems: Align.end,
								},
								children: [
									Container({
										style: {
											background: ThemeColors().dark,
											height: BreakPoints.mobile.matches ? Rem(.5) : BreakPoints.tablet.matches ? Rem(.75) : Rem(1),
											width: BreakPoints.mobile.matches ? Rem(2) : BreakPoints.tablet.matches ? Rem(3) : Rem(4.5),
											marginRight: BreakPoints.mobile.matches ? Rem(1) : BreakPoints.tablet.matches ? Rem(1.5) : Rem(1.7),
											marginBottom: BreakPoints.mobile.matches ? Rem(0) : BreakPoints.tablet.matches ? Rem(0) : Rem(.1),
										},
										animated: {
											type: 'opacity',
											time: 1.43,
											values: [1, 1, 1, 0, 0, 1, 1, 1],
											count: 'infinite',
											transition: 'steps(1)',
											direction: 'both',
										}
									}),
									isPortuguese() ? Text(`especializado em sites,<br>
                    sistemas web e APIs,<br>
                    back-end, front-end e<br>mobile.
                  `, {
										style: {
											fontSize: BreakPoints.mobile.matches ? Rem(.6) : BreakPoints.tablet.matches ? Rem(.6) : Rem(1),
											color: ThemeColors().dark,
										}
									}) : Text(`specialized in websites,<br>
                    web apps and APIs,<br>
                    back-end, front-end<br>and mobile.
                  `, {
										style: {
											fontSize: BreakPoints.mobile.matches ? Rem(.6) : BreakPoints.tablet.matches ? Rem(.7) : Rem(1),
											color: ThemeColors().dark,
										}
									})
								]
							})
						]
					})
				]
			}),

			// about
			Row({
				id: isPortuguese() ? 'Sobre' : 'About',
				crossAxis: BreakPoints.mobile.matches,
				style: {
					padding: Rem(12, 3, 6),
					width: Size.fullContent,
					justifyContent: Align.spaced,
				},
				children: [
					Column({
						style: {
							position: 'relative',
							alignItems: Align.start,
							width: BreakPoints.mobile.matches ? Pc(100) : Pc(75),
							paddingRight: BreakPoints.tablet.matches ? Rem(4) : '',
						},
						children: [
							isPortuguese() ? Text(`Sou um programador full-stack, sempre focado na busca pela melhoria e pelo aprendizado.
              <br>
              ◽ Comecei no back-end com PHP, e atualmente tenho estudado e criado aplicações com Node js utilizando minha experiência
              em javascript, mas sempre me atualizando e melhorando.
              <br>
              ◽ No desenvolvimento mobile tenho utilizado Flutter, e desenvolvido algumas aplicações muito interessantes.`, {
								style: {
									color: ThemeColors().dark,
								}
							}) :
								Text(`I'm a full stack programmer, always focused on improving and learning.
                <br>
                ◽ I started on back end with PHP, and currently I've been studing and creating applications with Node js using my experience in javascript, but always updating and improving.
                <br>
                ◽ In mobile development I've been using Flutter, and developed some very interesting applications.`, {
									style: {
										color: ThemeColors().dark,
									}
								}),
							Separator({ height: Rem(2) }),
							// call button
							TextIconButtonBg({
								link: 'mailto:raphaeltiago02@gmail.com?subject=' + encodeURI('Olá Raphael! Vim por seu portfólio.'),
								text: isPortuguese() ? 'Fale Comigo' : 'Talk to Me',
								icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12h-6l-2 3h-4l-2-3H2"></path>
                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                </svg>`
							})
						]
					}),
					Column({
						style: {
							position: 'relative',
							alignItems: Align.end,
							width: BreakPoints.mobile.matches ? Pc(100) : Pc(25),
							paddingTop: BreakPoints.mobile.matches ? Rem(2) : '',
						},
						children: [
							GrowButton({
								link: 'https://github.com/silvaRaphael',
								text: 'GitHub',
							}),
							GrowButton({
								link: 'https://www.linkedin.com/in/raphael-silva-dev',
								text: 'LinkedIn',
							}),
						]
					}),
				]
			}),

			// works
			Row({
				id: isPortuguese() ? 'Trabalhos' : 'Works',
				style: {
					padding: Rem(12, 3, 6),
					width: Size.fullContent,
					justifyContent: Align.spaced,
				},
				children: [
					Column({
						style: {
							position: 'relative',
							alignItems: Align.start,
							width: Size.fullContent,
						},
						children: [
							Text(isPortuguese() ? `Veja alguns dos meus trabalhos...` : `See some of my works...`, {
								style: {
									color: ThemeColors().dark,
									fontWeight: 500,
									fontSize: Rem(2),
									opacity: .7,
								}
							}),

							Separator({ height: Rem(6) }),

							...WORKS_LIST.map((item, index) => {
								return WorkListItem({
									title: item.title,
									category: item.category,
									description: item.description,
									year: item.year,
									onPressed: () => {
										showAlert({
											transition: 100,
											style: {
												background: ThemeColors().dark + 50,
											},
											child: WorksPopup({ work: item }),
										})
									},
								});
							}),
						]
					}),
				]
			}),

			// skilss
			Row({
				id: isPortuguese() ? 'Habilidades' : 'Skills',
				style: {
					padding: Rem(12, 3, 6),
					width: Size.fullContent,
					justifyContent: Align.spaced,
				},
				children: [
					Column({
						style: {
							position: 'relative',
							alignItems: Align.start,
							width: Size.fullContent,
						},
						children: [
							Text(isPortuguese() ? `Conheça minhas habilidades` : `Know my skills`, {
								style: {
									color: ThemeColors().dark,
									fontWeight: 500,
									fontSize: Rem(2),
									opacity: .7,
								}
							}),

							Separator({ height: Rem(6) }),

							Grid({
								columns: BreakPoints.mobile.matches ? 1 : BreakPoints.tablet.matches ? Math.floor(SKILLS_LIST.length / 2) : SKILLS_LIST.length,
								style: {
									width: Size.fullContent,
									justifyContent: Align.start,
								},
								children: [
									...SKILLS_LIST.map((item, index) => {

										Style({
											selector: '.skill-card-top:hover ~ .skill-card',
											transform: `skew(1.5deg, 1.5deg)`,
										});

										Style({
											selector: '.skill-card-bottom:hover ~ .skill-card',
											transform: `skew(-1.5deg, -1.5deg)`,
										});

										return Column({
											className: 'skills-card',
											style: {
												position: 'relative',
												overflow: 'hidden',
												padding: Rem(2),
											},
											children: [
												Container({
													className: 'skill-card-top',
													style: {
														position: 'absolute',
														top: Pc(-69.5),
														left: Pc(-69.5),
														width: Pc(140),
														height: Pc(140),
														transform: 'rotate(-45deg)',
														zIndex: 1,
													}
												}),
												Container({
													className: 'skill-card-bottom',
													style: {
														position: 'absolute',
														bottom: Pc(-69.5),
														right: Pc(-69.5),
														width: Pc(140),
														height: Pc(140),
														transform: 'rotate(45deg)',
														zIndex: 1,
													},
												}),

												Column({
													className: 'skill-card',
													style: {
														width: Size.fullContent,
														transition: '.25s',
														alignItems: Align.center,
														padding: Rem(2),
														height: Pc(100),
														border: `solid 1px ${ThemeColors().dark}20`,
														borderRadius: Rem(.75),
													},
													children: [
														Text(item.title, {
															style: {
																color: ThemeColors().dark,
																fontWeight: 600,
																marginBottom: Rem(.75),
																textAlign: Align.start,
																width: Size.fullContent,
															}
														}),
														Grid({
															columns: (item.list.length >= Math.ceil(item.list.length / 2) && Math.ceil(item.list.length / 2) >= 5) ? 2 : 1,
															style: {
																gridAutoFlow: 'revert-layer'
															},
															children: [
																...item.list.map((item, index, arr) => {

																	const divisions = arr.length;
																	const spaces = Math.floor(100 / divisions);

																	return Text(item.title ? ('> ' + item.title) : '', {
																		style: {
																			color: ThemeColors().dark,
																			fontWeight: 500,
																			textAlign: Align.end,
																			width: Size.fullContent,
																			margin: Rem(.5),
																		}
																	});
																})
															]
														})
													]
												}),
											]
										});
									})
								]
							}),
						]
					}),
				]
			}),

			// contact
			Row({
				id: isPortuguese() ? 'FaleComigo' : 'TalktoMe',
				style: {
					padding: Rem(12, 3, 6),
					width: Size.fullContent,
					justifyContent: Align.spaced,
				},
				children: [
					Column({
						style: {
							position: 'relative',
							alignItems: Align.start,
							width: Size.fullContent,
						},
						children: [
							Text(isPortuguese() ? `Fale comigo` : `Talk to me`, {
								style: {
									color: ThemeColors().dark,
									fontWeight: 500,
									fontSize: Rem(2),
									opacity: .7,
								}
							}),

							Separator({ height: Rem(6) }),

							Grid({
								columns: 1,
								style: {
									width: Size.fullContent,
								},
								children: [
									Center({
										child: Row({
											crossAxis: BreakPoints.mobile.matches,
											style: {
												alignItems: BreakPoints.mobile.matches ? Align.center : Align.start,
											},
											children: [
												{ title: '💾 GitHub', link: 'https://github.com/silvaRaphael' },
												{ title: '👨‍💻 LinkedIn', link: 'https://www.linkedin.com/in/raphael-silva-dev' },
												{ title: isPortuguese() ? '📨 E-mail' : '📨 Email', link: 'mailto:raphaeltiago02@gmail.com?subject=' + encodeURI('Olá Raphael! Vim por seu portfólio.') },
												{ title: '📲 WhatsApp', link: 'https://wa.me/5511914876996' }
											].map(item => {
												return Link({
													target: '_blank',
													to: item.link,
													child: Text(item.title, {
														style: {
															padding: Rem(.2, .5),
															margin: Rem(.2),
															color: ThemeColors().light,
															background: ThemeColors().dark,
															border: `solid 1px ${ThemeColors().light}`,
															transition: '.5s',
														},
														hover: {
															background: ThemeColors().light,
															border: `solid 1px ${ThemeColors().dark}`,
															color: ThemeColors().dark,
														},
													}),
												})
											}),
										})
									}),

									/* Column({
										style: {
											alignItems: Align.start,
										},
										children: [
											Form({
												id: 'contact',
												style: {
													maxWidth: Rem(30),
													width: Pc(100),
												},
												children: [
													Column({
														style: {
															alignItems: Align.start,
															width: Pc(100),
														},
														children: [
															CustomInput('name', 'contact').input({
																placeholder: isPortuguese() ? 'seu nome' : 'your name',
																suffixIcon: 'far fa-user',
																color: ThemeColors().dark,
																accentColor: ThemeColors().dark,
															}),
															CustomInput('phone', 'contact').input({
																placeholder: isPortuguese() ? 'seu telefone/celular' : 'your phone number',
																mask: isPortuguese() ? '(99) 999999999' : '',
																suffixIcon: 'fas fa-mobile-screen',
																color: ThemeColors().dark,
																accentColor: ThemeColors().dark,
															}),
															CustomInput('email', 'contact').input({
																placeholder: isPortuguese() ? 'seu e-mail' : 'your email address',
																suffixIcon: 'far fa-envelope',
																color: ThemeColors().dark,
																accentColor: ThemeColors().dark,
															}),
															CustomInput('message', 'contact').input({
																type: 'textarea',
																placeholder: isPortuguese() ? 'sua mensagem' : 'your message',
																suffixIcon: 'far fa-message',
																color: ThemeColors().dark,
																accentColor: ThemeColors().dark,
															}),

															GestureDetector({
																onClick: sendMessage,
																child: Container({
																	style: {
																		backgroundColor: ThemeColors().dark,
																		padding: Rem(.5, 1),
																		borderRadius: Rem(.25),
																	},
																	child: Row({
																		style: {
																			alignItems: Align.center,
																		},
																		children: [
																			Text(isPortuguese() ? 'Enviar mensagem' : 'Send message', {
																				style: {
																					color: ThemeColors().light,
																					fontSize: Rem(.8),
																					fontWeight: 500,
																				}
																			}),
																			Separator({ width: Rem(.5) }),
																			Icon({
																				name: 'fas fa-arrow-right',
																				color: ThemeColors().light,
																				size: Rem(.8),
																			}),
																		]
																	})
																})
															}),

														]
													})
												]
											})
										]
									}), */
								]
							}),
						]
					}),
				]
			}),

			Row({
				style: {
					justifyContent: Align.center,
					width: Rem(15),
					marginBottom: Rem(2),
				},
				children: [
					IconTextButton({
						icon: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
            <path d="M4 22v-7"></path>
            </svg>`,
						text: isPortuguese() ? 'English' : 'Português',
						onPressed: () => {
							localStorage.setItem('language', isPortuguese() ? 'en' : '');
							changeRoute('/');
						}
					}),
					isLightMode() ? IconTextButton({
						icon: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
            </svg>`,
						text: isPortuguese() ? 'Escuro' : 'Dark',
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
			}),

			Container({
				style: {
					width: `calc(100vw - 6rem)`,
					height: Px(1),
					background: ThemeColors().dark + 20,
				}
			}),

			Row({
				id: isPortuguese() ? 'FaleComigo' : 'TalktoMe',
				style: {
					padding: Rem(2, 3),
					width: Size.fullContent,
					alignItems: Align.center,
				},
				children: [
					Row({
						style: {
							justifyContent: Align.center,
							alignItems: Align.center,
							cursor: 'default',
						},
						children: [
							Text(isPortuguese() ? 'Desenvolvido por' : 'Developed by', {
								style: {
									color: ThemeColors().dark,
									fontSize: Rem(.8),
								}
							}),
							Link({
								to: 'https://www.linkedin.com/in/raphael-silva-dev',
								target: '_blank',
								title: isPortuguese() ? 'Ver perfil no LinkedIn' : 'See profile on LinkedIn',
								child: '👨🏼‍💼',
								style: {
									fontSize: Rem(.7),
									padding: Rem(.25)
								},
							}),
							Text(isPortuguese() ? 'com' : 'with', {
								style: {
									color: ThemeColors().dark,
									fontSize: Rem(.8),
								}
							}),
							Link({
								to: 'https://github.com/silvaRaphael/SPA_Framework',
								target: '_blank',
								title: isPortuguese() ? 'Ver repositório no GitHub' : 'See repository on GitHub',
								child: 'SPA_Framework',
								style: {
									fontSize: Rem(.7),
									padding: Rem(.25),
									color: ThemeColors().dark,
									fontWeight: 500
								},
								hover: {
									textDecoration: 'underline'
								}
							}),
						]
					}),
				]
			}),
		]
	});
}

export default HomePage;
