import axios from "axios"

export const setAccessToken = () => {

    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    if(urlParams.has('access_token') && urlParams.has('refresh_token')) {
        localStorage.setItem('accessToken', urlParams.get('access_token'))
        localStorage.setItem('refreshToken', urlParams.get('refresh_token'))
        localStorage.setItem('expiresIn', urlParams.get('expires_in'))
        localStorage.setItem('timestamp', Date.now())
    }
    if(localStorage.getItem('accessToken') == null || localStorage.getItem('refreshToken') == null) {
        window.location.href = 'http://localhost:3000/'
    }
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`
}

axios.defaults.baseURL = 'https://api.spotify.com/v1/'

export const logOut = () => {
    localStorage.clear()
    window.location.href = 'http://localhost:3000'
}

export const getTop =  (type) => {
    return (axios({
        method: 'get',
        url: `me/top/${type}`,
        params: {
            limit: 50
        }
    })
    )
}