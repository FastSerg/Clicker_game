
const createElement = ({ type, attrs = null, container = null, position = 'appendChild' }) => {
  const el = document.createElement(type)
  Object.keys(attrs).forEach(key => {

    if (key !== 'innerHTML') el.setAttribute(key, attrs[key])
    else el.innerHTML = attrs[key]
  })

  if (container && position === 'prepend') container.prepend(el)
  if (container && position === 'appendChild') container.appendChild(el)

  return el

}

export const createUser = () => {
  const user = createElement({
    type: 'div',
    attrs: {
      class: 'user'
    },
    position: 'prepend',
    container: document.body
  })

  const userContainer = createElement({
    type: 'div',
    attrs: {
      class: 'user-container'
    },
    container: user
  })

  const block = createElement({
    type: 'div',
    attrs: {
      class: 'block'
    },
    container: userContainer
  })

  const blockItem = createElement({
    type: 'section',
    attrs: {
      class: 'block__item'
    },
    container: block
  })

  createElement({
    type: 'h2',
    attrs: {
      class: 'block-item__title',
      innerHTML: 'Do you have an account?'
    },
    container: blockItem
  })

  createElement({
    type: 'button',
    attrs: {
      class: 'block-item__btn signIn-btn',
      innerHTML: 'Sing In'
    },
    container: blockItem
  })

  const blockSingUp = createElement({
    type: 'section',
    attrs: {
      class: 'block__item',
    },
    container: block
  })

  createElement({
    type: 'h2',
    attrs: {
      class: 'block-item__title',
      innerHTML: `Don't have an account?`
    },
    container: blockSingUp
  })


  createElement({
    type: 'button',
    attrs: {
      class: 'block-item__btn  signUp-btn',
      innerHTML: 'Registration'
    },
    container: blockSingUp
  })


  const formBox = createElement({
    type: 'div',
    attrs: {
      class: 'form-box',
    },
    container: block
  })

  const signInForm = createElement({
    type: 'form',
    attrs: {
      class: 'form signIn-form',
    },
    container: formBox
  })

  createElement({
    type: 'h2',
    attrs: {
      class: 'form__title',
      innerHTML: 'Sing in to account'
    },
    container: signInForm
  })

  const signInLabelEmail = createElement({
    type: 'label',
    attrs: { for: '' },
    container: signInForm
  })

  createElement({
    type: 'input',
    attrs: {
      class: 'form__input',
      type: "email",
      name: "email",
      placeholder: "email"
    },
    container: signInLabelEmail
  })

  const signInLabelPassword = createElement({
    type: 'label',
    attrs: { for: '' },
    container: signInForm
  })

  createElement({
    type: 'input',
    attrs: {
      class: 'form__input',
      type: "password",
      name: "password",
      placeholder: "password"
    },
    container: signInLabelPassword
  })

  createElement({
    type: 'button',
    attrs: {
      class: 'form__btn',
      innerHTML: 'Sing In',
      type: "submit"
    },
    container: signInForm
  })

  const signUpForm = createElement({
    type: 'form',
    attrs: {
      class: 'form signUp-form',
    },
    container: formBox
  })

  createElement({
    type: 'h2',
    attrs: {
      class: 'form__title',
      innerHTML: 'Registration'
    },
    container: signUpForm
  })

  const signUpLabelName = createElement({
    type: 'label',
    attrs: {
      for: '',
      class: 'nick-name',
      dataText: "Only letters and numbers are allowed, minimum 2 in length"
    },
    container: signUpForm
  })

  createElement({
    type: 'input',
    attrs: {
      class: 'form__input',
      type: "text",
      name: "nick-name",
      placeholder: "nick name",
    },
    container: signUpLabelName
  })

  const signUpLabelEmail = createElement({
    type: 'label',
    attrs: { for: '' },
    container: signUpForm
  })

  createElement({
    type: 'input',
    attrs: {
      class: 'form__input',
      type: "email",
      name: "email",
      placeholder: "email",


    },
    container: signUpLabelEmail
  })
  const signUpLabelPassword = createElement({
    type: 'label',
    attrs: {
      for: '',
      class: "password",
      dataText: "One upper case,one digit and one lower case English letter",
    },
    container: signUpForm
  })

  createElement({
    type: 'input',
    attrs: {
      class: 'form__input',
      type: "password",
      name: "password",
      placeholder: "password",

    },
    container: signUpLabelPassword
  })

  createElement({
    type: 'button',
    attrs: {
      class: 'form__btn',
      innerHTML: 'Sing Up',
      type: "submit"
    },
    container: signUpForm
  })
}

export const createHeader = (data) => {

  const header = createElement({
    type: 'header',
    attrs: {
      class: 'header'
    },
    position: 'prepend',
    container: document.body
  })

  const headerContainer = createElement({
    type: 'div',
    attrs: {
      class: 'container container--header'
    },
    container: header
  })


  const gameInfo = createElement({
    type: 'div',
    attrs: {
      class: 'game-info'
    },
    container: headerContainer
  })

  createElement({
    type: 'div',
    attrs: {
      class: 'game-info__user',
      innerHTML: `User name: ${data.name}`
    },
    container: gameInfo
  })

  const gameInfoWraper = createElement({
    type: 'ul',
    attrs: {
      class: 'game-info__wraper',
    },
    container: gameInfo
  })

  createElement({
    type: 'li',
    attrs: {
      class: 'game-info__coins',
      innerHTML: `Your shots: ${data.shots}`
    },
    container: gameInfoWraper
  })

  createElement({
    type: 'li',
    attrs: {
      class: 'game-info__level',
      innerHTML: `Level: ${data.level}`
    },
    container: gameInfoWraper
  })

  createElement({
    type: 'li',
    attrs: {
      class: 'game-info_life',
      innerHTML: `HP: ${data.health}`
    },
    container: gameInfoWraper
  })

}


export const createHegoes = () => {
  document.body.style.cssText = `background-image: url(image/bg_field_1.jpg); transition: 0.7s;`

  const container = createElement({
    type: 'div',
    attrs: {
      class: 'container',
    },
    container: document.body
  })

  const hit = createElement({
    type: 'div',
    attrs: {
      class: 'hit',
    },
    container,
  })

  const hitImg = createElement({
    type: 'div',
    attrs: {
      class: 'hit__img__wraper',
    },
    container: hit,
  })

  createElement({
    type: 'img',
    attrs: {
      class: 'hit__img',
      src: 'image/heroes_1.png',
      alt: 'heroes_1.png'
    },
    container: hitImg
  })

  createElement({
    type: 'div',
    attrs: {
      class: 'hit__overlay',
    },
    container: hitImg,
  })

  const progressHeroes = createElement({
    type: 'div',
    attrs: {
      class: 'hit-progress',
    },
    container: hitImg,
  })

  createElement({
    type: 'div',
    attrs: {
      class: 'hit-progress__life',
    },
    container: progressHeroes,
  })
}


export const createModalWindow = () => {
  const modal = createElement({
    type: 'div',
    attrs: {
      class: 'modal',
    },
    position: 'prepend',
    container: document.body,
  })

  const modalContent = createElement({
    type: 'div',
    attrs: {
      class: 'modal__content',
    },
    container: modal,
  })

  const modalMessage = createElement({
    type: 'div',
    attrs: {
      class: 'content-message',
    },
    container: modalContent,
  })

  createElement({
    type: 'button',
    attrs: {
      class: 'btn-restart',
    },
    container: modalContent,
  })

  createElement({
    type: 'h2',
    attrs: {
      class: 'content-message__title',
    },
    container: modalMessage,
  })

  createElement({
    type: 'p',
    attrs: {
      class: 'content-message__text',
    },
    container: modalMessage,
  })

}

export const creatMiss = () => {
  const wraper = document.querySelector('.hit__img__wraper')

  const missShots = createElement({
    type: 'div',
    attrs: {
      class: 'miss',
      innerHTML: `MISS`
    },
    container: wraper,
  })
  missShots.addEventListener("animationend", () => {
    missShots.remove();
  });
}
