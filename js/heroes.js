import { MAX_LEVEL } from "./constant.js";
import { saveScore, getPlayersById, removePlayer, } from "./db.js"
import { creatMiss, createHeader, createHegoes, createModalWindow, } from './dom.js'

const updateElement = (element, updateValue) => {
  element.textContent = updateValue;
}

export const removeElement = (element) => {
  element.remove()
}

const updateBackground = (currentLevel) => {
  const heroes = document.querySelector('.hit__img')
  if (currentLevel === 1) {
    document.body.style.cssText = `background-image: url(../image/bg_field_1.jpg); transition: 0.7s;`
    heroes.setAttribute('src', 'image/heroes_1.png')
  } else if (currentLevel === 2) {
    document.body.style.cssText = `background-image: url(../image/bg_field_2.jpg); transition: 0.7s;`
    heroes.setAttribute('src', 'image/heroes_2.png')
  } else if (currentLevel === 3) {
    document.body.style.cssText = `background-image: url(../image/bg_field_3.jpg); transition: 0.7s;`
    heroes.setAttribute('src', 'image/heroes_3.png')
    heroes.setAttribute('alt', 'heroes_3.jpg')
  } else if (currentLevel === 4) {
    document.body.style.cssText = `background-image: url(../image/bg_field_4.jpg); transition: 0.7s;`
    heroes.setAttribute('src', 'image/heroes_4.png')
  } else if (currentLevel === 5) {
    document.body.style.cssText = `background-image: url(../image/bg_field_5.jpg); transition: 0.7s;`
    heroes.setAttribute('src', 'image/heroes_5.png')
  }
}

const miss = () => {
  let randomNum = Math.floor(Math.random() * 6) + 3
  randomNum % 2.5 === 0 ? randomNum = 0 : randomNum = 1
  return randomNum
}

const heroesLife = (data, indicatorLife) => {
  const indicate = document.querySelector('.hit-progress__life')
  if (data.health === 0) indicatorLife.width = 100

  indicate.style.width = (data.health * 100 / indicatorLife.life) + '%'

}


const showWindow = (data, key) => {
  const modal = document.querySelector('.modal')
  const modalContent = document.querySelector('.modal__content')
  const title = document.querySelector('.content-message__title')
  const messageText = document.querySelector('.content-message__text')
  const btnRestart = document.querySelector('.btn-restart')
  const container = document.querySelector('.container')
  const hegoesCois = document.querySelector('.game-info__coins')
  const hegoesLevel = document.querySelector('.game-info__level')
  removeElement(container)

  modal.classList.add('active')
  modalContent.classList.add('active')
  title.textContent = `Winner`
  messageText.textContent = `Your shots: ${data.shots}`
  btnRestart.textContent = `RESTART`

  btnRestart.addEventListener('click', () => {
    modal.classList.remove('active')
    modalContent.classList.remove('active')
    data.shots = 0
    data.level = 1
    removePlayer(key)
    createHegoes()
    updateElement(hegoesLevel, `Level:  ${data.level}`)
    updateElement(hegoesCois, `Your shots: ${data.shots}`)
    hegoesBattle(data, key)
  })

}


export const hegoesBattle = (data, key) => {
  const hegoes = document.querySelector('.hit__overlay')
  const hegoesHealth = document.querySelector('.game-info_life')
  const hegoesCois = document.querySelector('.game-info__coins')
  const hegoesLevel = document.querySelector('.game-info__level')
  const currentInfoUser = getPlayersById(key)
  console.log('data, key', data, key)
  let isChecked = true
  let indicatorLife = { width: 100, life: null }

  // если пользователь ранее прошел уровень, то на экране идет обновление последнего уровня с очками игрока
  if (currentInfoUser && isChecked === true) {
    updateElement(hegoesLevel, `Level:  ${currentInfoUser.level}`)
    updateElement(hegoesCois, `Your shots: ${currentInfoUser.shots}`)
    isChecked = false
    updateBackground(currentInfoUser.level)
    data.level = currentInfoUser.level
    data.shots = currentInfoUser.shots
  }

  // проверка здоровья, когда оно равно 0 генерируется новое здоровье и обновляется значение на экране
  if (!data.health) {
    data.health = Math.floor(Math.random() * (8 * data.level)) + 4 * data.level
    updateElement(hegoesHealth, `HP: ${data.health}`)
    indicatorLife.life = data.health
  }

  hegoes.addEventListener('click', () => {
    // при каждом клике здоровье врага уменьшается на -1 и добавляет очки игроку на +1, выполняется пока у врага есть здоровье
    if (data.health >= 1) {

      let isShotMiss = miss()
      console.log('shoot', isShotMiss)

      data.health -= isShotMiss
      updateElement(hegoesHealth, `HP: ${data.health}`)

      data.shots += 1
      updateElement(hegoesCois, `Your shots: ${data.shots}`)

      isShotMiss ? null : creatMiss()
      heroesLife(data, indicatorLife)

    }

    // когда у врага здоровье закончилось происходит повышение уровня с генирацией нового здоровья врага и сохранения прогресса в localStorage

    if (data.health <= 0 && data.level < MAX_LEVEL) {

      saveScore(key, {
        shots: data.shots,
        level: data.level + 1,
      })

      data.level += 1
      console.log('data', data)
      updateElement(hegoesLevel, `Level:  ${data.level}`)

      data.health = Math.floor(Math.random() * (6 * data.level)) + 4 * data.level
      updateElement(hegoesHealth, `HP: ${data.health}`)

      console.log('level', data.level)
      updateBackground(data.level)

      indicatorLife.life = data.health
      heroesLife(data, indicatorLife)
    }

    if (data.health == 0 && data.level == MAX_LEVEL) {
      console.log(`you win your shots: ${data.shots}`)
      showWindow(data, key)

    }

  })

}

export const init = (data, key) => {
  createHeader(data)
  createHegoes()
  createModalWindow()
  hegoesBattle(data, key)
}
