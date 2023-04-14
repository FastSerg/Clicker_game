export const nickNameValid = (value) => {
  let re = /^([^!@#$%^&*()_]{2,12})$/
  return re.test(String(value))
}

export const emailValid = (value) => {
  let re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
  return re.test(String(value))
}

export const passwordValid = (value) => {
  let re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,256}$/
  return re.test(String(value))
}
