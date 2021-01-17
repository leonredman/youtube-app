import axios from 'axios';

const KEY = 'AIzaSyCBLvZEFMsIl-3hJlNAWARQeFUIAkfYBaQ';

//use the documentation at https://developers.google.com/youtube/v3/docs/videos/list
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
