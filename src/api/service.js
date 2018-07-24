import axios from 'axios'

export const userInfoService = username => {
  return axios.get(`https://api.github.com/users/${username}`)
}
