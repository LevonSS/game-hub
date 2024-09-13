import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'c4c92b8d265c479f8cf63c6c64463bda'
    }
});