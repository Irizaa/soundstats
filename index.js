require ('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()
const port = 3001
axios.defaults.headers.common['accept-encoding'] = 'null';


const stateGenerator = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    let ret = ""
    for(i = 0 ; i < 21 ; i++) {
        ret+=  alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    }
    return ret;
}
const state = stateGenerator()
const clientID = process.env.CLIENT_ID
const redirectURI = process.env.REDIRECT_URI
const clientSecret = process.env.CLIENT_SECRET
const scope = 'user-top-read%20user-library-read'

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/login", (req, res) => {
    res.redirect(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&state=${state}&scope=${scope}`)
})

app.get("/callback", (req, res) => {

    if(req.query.state!= state || req.query.error) {
        res.redirect('http://localhost:3000')
        return
    }
    const code = req.query.code

    axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: {
            grant_type: "authorization_code",
            code: code,
            redirect_uri: redirectURI
        },
        headers: {
            'Authorization': 'Basic ' + Buffer.from(clientID + ':' + clientSecret).toString('base64'),
            'content-type': 'application/x-www-form-urlencoded',
        },
    })
    .then(response => {
        res.redirect(`http://localhost:3000/results?access_token=${response.data.access_token}&token_type=Bearer&refresh_token=${response.data.refresh_token}&expires_in=3600`)
    })
    .catch(error => {
        res.send(error)
    })
})

app.get('/refresh_token', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    
    const refresh_token = req.query.refresh_token
    axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        headers: {
            'Authorization': 'Basic ' + Buffer.from(clientID + ':' + clientSecret).toString('base64'),
            'content-type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
