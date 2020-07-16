import axios from 'axios';

export default axios.create({
  baseURL: `https://www.googlepapis.com/youtube/v3`,
  paramms: {
    part: 'snippet',
    maxResults: 5,
    key: import.meta.env.SNOWPACK_PUBLIC_YOUTUBE_API_KEY,
  },
});
