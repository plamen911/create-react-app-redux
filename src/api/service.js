import axios from 'axios'

export const userInfoService = username => (
  axios.get(`https://api.github.com/users/${username}`)
)

export const fakeLogin = (email, password) => (
  new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      email,
      token: new Date().toTimeString()
    }), 2000)
  })
)
