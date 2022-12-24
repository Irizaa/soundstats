import axios from "axios"


export const setAccessToken = () => {

    const urlParams = new URLSearchParams(window.location.search)

    // User is entering application for the first time. Access & Refresh tokens are set, along with a timelimit used for refreshes.
    if(urlParams.has('access_token') && urlParams.has('refresh_token')) {
        localStorage.setItem('accessToken', urlParams.get('access_token'))
        localStorage.setItem('refreshToken', urlParams.get('refresh_token'))
        localStorage.setItem('timeLimit', (Date.now() / 1000) + 3600)
    }
    // When token has expired, set new access token and update time limit.
    if((Date.now() / 1000) > localStorage.getItem('timeLimit')) {
        axios.get(`http://localhost:3001/refresh_token?refresh_token=${localStorage.getItem('refreshToken')},`, )
        .then(response => {
            localStorage.setItem('accessToken', response.data.access_token)
            localStorage.setItem('timeLimit', Date.now() / 1000 + 3600)
        })
        .catch(error => {
            return error
        })
    }
    if(localStorage.getItem('accessToken') == null || localStorage.getItem('refreshToken') == null) {
        window.location.href = 'http://localhost:3000/'
    }
    
    axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`
}



axios.defaults.baseURL = 'https://api.spotify.com/v1/'

export const logOut = () => {
    localStorage.clear()
    sessionStorage.clear()
    window.location.href = 'http://localhost:3000'
}

export const getTop =  (type, range) => {
    return (axios({
        method: 'get',
        url: `me/top/${type}`,
        params: {
            limit: 50,
            time_range: range
        }
    })
    )
}
export const getTimePeriod = () => {
    const urlParams = new URLSearchParams(window.location.search)
    let timeRange = urlParams.get('time_range')
    if(timeRange === null) {
        return 'short_term'
    } 
    return timeRange
}
export const getResultType = () => {
    return window.location.pathname.split('/')[2]
}