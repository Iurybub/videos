import axios from 'axios'

const KEY ="AIzaSyBbswBBjtV8j6CyzY6Srhx-lMoQk0O2KRA"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})