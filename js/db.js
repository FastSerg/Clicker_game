import { STORAGE_NAME } from './constant.js'

const getData = (storageName) => {
  return JSON.parse(localStorage.getItem(storageName))
}
const setData = (storageName, data) => {
  return localStorage.setItem(storageName, JSON.stringify(data))
}

export const getAllUsers = () => {
  return getData(STORAGE_NAME.users) || {};
}

export const getUserById = id => {
  const users = getAllUsers()
  return users[id] ? users[id] : null;
};


export const saveUsers = (id, data) => {
  const users = getAllUsers()
  console.log('users', users)

  if (!users[id]) {
    users[id] = data;
    setData(STORAGE_NAME.users, users);
  } else {
    throw new Error('email alredy exist')
  }

}

export const removePlayer = (id) => {
  let players = getAllPlayers()

  delete players[id]
  setData(STORAGE_NAME.userProgress, players)
}

export const getAllPlayers = () => {
  return getData(STORAGE_NAME.userProgress) || {};
}

export const getPlayersById = id => {
  const players = getAllPlayers()
  return players[id] ? players[id] : null;
};


export const saveScore = (id, data) => {
  const players = getAllPlayers()

  players[id] = data;
  setData(STORAGE_NAME.userProgress, players);

}