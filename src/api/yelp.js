import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: ' Bearer 0YW6Whi31m3IqeArkAu2s5qS6IJ741b6E93l-WfBPe8aQBLL3jw1a4H3cTTBkXPTX196PXhQX8wRJkhvhu7OQuN5DNwcauNU4D5CZB4N59Z4K7ren58UfdJZlHP1XnYx'
    }
});


