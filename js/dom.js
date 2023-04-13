
export const createHeader = (data) => {

  const header = document.createElement("header")
  header.classList.add('header')
  document.body.prepend(header)

  const headerContainer = document.createElement("div")
  headerContainer.classList.add("container,container--header")
  header.appendChild(headerContainer)

  const gameInfo = document.createElement("div")
  gameInfo.classList.add("game-info")
  headerContainer.append(gameInfo)

  const gameInfoUser = document.createElement("div")
  gameInfoUser.classList.add("game-info__user")
  gameInfo.appendChild(gameInfoUser)
  gameInfoUser.textContent = `User name: ${data.name}`

  const gameInfoWraper = document.createElement("ul")
  gameInfoWraper.classList.add("game-info__wraper")
  gameInfo.appendChild(gameInfoWraper)

  const gameInfoShots = document.createElement("li")
  gameInfoShots.classList.add("game-info__coins")
  gameInfoWraper.appendChild(gameInfoShots)
  gameInfoShots.textContent = `Your shots: ${data.shots}`

  const gameInfoLevel = document.createElement("li")
  gameInfoLevel.classList.add("game-info__level")
  gameInfoWraper.appendChild(gameInfoLevel)
  gameInfoLevel.textContent = `Level:  ${data.level}`

  const gameInfoLife = document.createElement("li")
  gameInfoLife.classList.add("game-info_life")
  gameInfoWraper.appendChild(gameInfoLife)
  gameInfoLife.textContent = `HP: ${data.health}`

}


export const createHegoes = () => {
  document.body.style.cssText = `background-image: url(../image/bg_field_1.jpg); transition: 0.7s;`

  const container = document.createElement("div")
  container.classList.add('container')
  document.body.append(container)

  const hit = document.createElement("div")
  hit.classList.add('hit')
  container.appendChild(hit)

  const hitImg = document.createElement("div")
  hitImg.classList.add('hit__img__wraper')
  hit.appendChild(hitImg)

  const img = document.createElement("img")
  img.classList.add('hit__img')
  hitImg.appendChild(img)
  img.setAttribute('src', 'image/heroes_1.png')
  img.setAttribute('alt', 'heroes_1.png')

  const hitOverlay = document.createElement("div")
  hitOverlay.classList.add('hit__overlay')
  hitImg.appendChild(hitOverlay)

  const progressHeroes = document.createElement("div")
  progressHeroes.classList.add('hit-progress')
  hitImg.appendChild(progressHeroes)

  const heroesLife = document.createElement("div")
  heroesLife.classList.add('hit-progress__life')
  progressHeroes.appendChild(heroesLife)

}


export const createModalWindow = () => {
  const modal = document.createElement("div")
  modal.classList.add('modal')
  document.body.prepend(modal)

  const modalContent = document.createElement("div")
  modalContent.classList.add('modal__content')
  modal.appendChild(modalContent)

  const modalMessage = document.createElement("div")
  modalMessage.classList.add('content-message')
  modalContent.appendChild(modalMessage)

  const btnRestart = document.createElement("button")
  btnRestart.classList.add('btn-restart')
  modalContent.appendChild(btnRestart)

  const messageTitle = document.createElement("h2")
  messageTitle.classList.add('content-message__title')
  modalMessage.appendChild(messageTitle)


  const messageText = document.createElement("p")
  messageText.classList.add('content-message__text')
  modalMessage.appendChild(messageText)

}

export const creatMiss = () => {
  const wraper = document.querySelector('.hit__img__wraper')

  const missShots = document.createElement("div")
  missShots.classList.add("miss")
  wraper.appendChild(missShots)
  missShots.textContent = `MISS`

  missShots.addEventListener("animationend", () => {
    missShots.remove();
  });
}
