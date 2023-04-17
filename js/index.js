
import { getUserById, saveUsers } from './db.js'
import { emailValid, passwordValid, nickNameValid } from './validation.js'
import { init, removeElement } from './heroes.js'
import { CURRENT_USER } from './constant.js';
import { createUser } from './dom.js';

createUser()
const singInBtn = document.querySelector('.signIn-btn');
const singUpBtn = document.querySelector('.signUp-btn');
const userForm = document.querySelector('.form-box');
const block = document.querySelector('.block');

const signInForm = document.querySelector('.signIn-form')
const signUpForm = document.querySelector('.signUp-form')

const inputSignIn = signInForm.querySelectorAll('.form__input')
const passwordSignIn = signInForm.querySelector('.form__input[name="password"]')
const emailSignIn = signInForm.querySelector('.form__input[name="email"]')

const inputSignUp = signUpForm.querySelectorAll('.form__input')
const nickNameSignUp = signUpForm.querySelector('.form__input[name="nick-name"]')
const passwordSignUp = signUpForm.querySelector('.form__input[name="password"]')
const emailSignUp = signUpForm.querySelector('.form__input[name="email"]')

const user = document.querySelector('.user')


singUpBtn.addEventListener('click', () => {
  userForm.classList.add('form-active')
  block.classList.add('form-active')
})

singInBtn.addEventListener('click', () => {
  userForm.classList.remove('form-active')
  block.classList.remove('form-active')
})

signInForm.onsubmit = (e) => {
  e.preventDefault()
  let emptyInputs = Array.from(inputSignIn).filter(input => input.value === '')

  inputSignIn.forEach(input => {

    if (input.value === '') {

      input.classList.add('error')
    } else {
      input.classList.remove('error')
    }

  })

  if (emptyInputs.length !== 0) {
    console.log('input not filled')
    return false
  }

  const userStorage = getUserById(emailSignIn.value)

  if (userStorage && userStorage.email === emailSignIn.value && userStorage.password === passwordSignIn.value) {

    CURRENT_USER.name = userStorage.nickName

    emailSignIn.classList.remove('error')
    passwordSignIn.classList.remove('error')
  } else {
    emailSignIn.classList.add('error')
    passwordSignIn.classList.add('error')
    throw new Error('email or password not valid')
  }

  removeElement(user)
  init(CURRENT_USER, emailSignIn.value)

  return false
}


signUpForm.onsubmit = (e) => {
  e.preventDefault()
  let emptyInputs = Array.from(inputSignUp).filter(input => input.value === '')


  inputSignUp.forEach(input => {
    if (input.value === '') {

      input.classList.add('error')
    } else {
      input.classList.remove('error')
    }
  })

  if (emptyInputs.length !== 0) {
    console.log('input not filled')
    return false
  }

  if (!nickNameValid(nickNameSignUp.value)) {
    nickNameSignUp.classList.add('error')
    return false
  } else {
    nickNameSignUp.classList.remove('error')
  }

  if (!emailValid(emailSignUp.value)) {
    emailSignUp.classList.add('error')
    return false
  } else {
    emailSignUp.classList.remove('error')
  }

  if (!passwordValid(passwordSignUp.value)) {
    passwordSignUp.classList.add('error')
    return false
  } else {
    passwordSignUp.classList.remove('error')
  }

  saveUsers(emailSignUp.value, {
    nickName: nickNameSignUp.value,
    email: emailSignUp.value,
    password: passwordSignUp.value,
  })

  userForm.classList.remove('form-active')
  block.classList.remove('form-active')
  return false
}


