import axios from "axios";
const api_key = import.meta.env.VITE_SOME_KEY

const getAll = () => {
    const request = axios.get("https://api.restcountries.com/countries/v5?limit=100",
        {headers: {"Authorization": `Bearer ${api_key}`}})
    return request.then(res => {
        return res.data.data.objects;
    });
}

export default { getAll };