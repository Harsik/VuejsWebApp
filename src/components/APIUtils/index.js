import { API_BASE_URL } from '../constants'

const request = options => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  if (localStorage.accessToken !== 'null') {
    headers.append('Authorization', 'Bearer ' + localStorage.accessToken)
  }

  const defaults = {
    headers: headers
  }
  options = Object.assign({}, defaults, options)
  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return json
    })
  )
}

export function login (loginRequest) {
  return request({
    url: API_BASE_URL + '/auth/login',
    method: 'POST',
    body: JSON.stringify(loginRequest)
  })
}

export function signup (signupRequest) {
  return request({
    url: API_BASE_URL + '/auth/signup',
    method: 'POST',
    body: JSON.stringify(signupRequest)
  })
}
