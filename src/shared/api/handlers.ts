import axios from "axios";

const URL = 'https://api-seller.ozon.ru';

export const postAnalyticsData = (data: any) => {
    axios.post(`${URL}/v1/analytics/data`, data, {
        'headers': {
            'Client-Id':  localStorage.getItem('clientId'),
            'Api-Key': localStorage.getItem('password')
        }
    })
        .then(r => r)
        .catch(r => r)
}