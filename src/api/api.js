import axios from "axios";

// axios instance for api call
const api = axios.create({
    baseURL : "https://www.themealdb.com/api/json/v1/1", // base url for this application
    headers : {
        "Content-Type" : 'application/json'
    }
})

export default api