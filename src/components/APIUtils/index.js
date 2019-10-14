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

const formRequest = options => {
	const headers = new Headers({
		// 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary5IKuSLhzzbDa86h8'
	})

	if (localStorage.accessToken !== 'null') {
		headers.append('Authorization', 'Bearer ' + localStorage.accessToken)
	}

	const defaults = {
		headers: headers
	}
	options = Object.assign({}, defaults, options)

	// eslint-disable-next-line no-unused-vars
	return fetch(options.url, options).then(response => {})
}

export function login(loginRequest) {
	return request({
		url: API_BASE_URL + '/auth/login',
		method: 'POST',
		body: JSON.stringify(loginRequest)
	})
}

export function signup(signupRequest) {
	return request({
		url: API_BASE_URL + '/auth/signup',
		method: 'POST',
		body: JSON.stringify(signupRequest)
	})
}

export function loadProfile(email) {
	return request({
		url: API_BASE_URL + '/account/profile?email=' + email,
		method: 'GET'
	})
}

export function editProfile(signupRequest) {
	return request({
		url: API_BASE_URL + '/account/profile/edit',
		method: 'POST',
		body: JSON.stringify(signupRequest)
	})
}

export function deleteFile(fileName) {
	return request({
		url: API_BASE_URL + '/file/deleteFile?fileName=' + fileName,
		method: 'GET'
	})
}

export function uploadFile(formData) {
	return formRequest({
		url: API_BASE_URL + '/file/uploadFile',
		method: 'POST',
		body: formData
	})
}

export function uploadFiles(formData) {
	return formRequest({
		url: API_BASE_URL + '/file/uploadMultipleFiles',
		method: 'POST',
		body: formData
	})
}

export function loadFiles() {
	return request({
		url: API_BASE_URL + '/file/loadFiles',
		method: 'POST'
	})
}
