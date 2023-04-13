export const nickNameValid = (value) => {
  let re = /^([^!@#$%^&*()_]{2,12})$/
  return re.test(String(value))
}

export const emailValid = (value) => {
  let re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
  return re.test(String(value))
}

export const passwordValid = (value) => {
  let re = /(?=^.{5,8}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/
  return re.test(String(value))
}