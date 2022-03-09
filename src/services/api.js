import axios from 'axios'

export const key = "923e505e00c80b05e8b549151115084c44ad3472"

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4', 
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;

// 923e505e00c80b05e8b549151115084c44ad3472