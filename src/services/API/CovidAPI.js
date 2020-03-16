import axios from 'axios';

const URL = "https://covid19.mathdro.id/api";

export class CovidAPI {
    
    constructor() {   
    }

    getDataGlobal() {
        const url = `${URL}`;
        let data = axios.get(url).then(response => response.data);
        return data;
    }

    getDataConfirmedGlobal() {
        const url = `${URL}/confirmed`;
        let data = axios.get(url).then(response => response.data);
        return data;
    }

    getDailyGlobal() {
        const url = `${URL}/daily`;
        let data = axios.get(url).then(response => response.data);
        return data;
    }

    getDetailCountry(country) {
        const url = `${URL}/countries/` + country;
        let data = axios.get(url).then(response => response.data);
        return data;
    }
}