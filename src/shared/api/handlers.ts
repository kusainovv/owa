import axios from "axios";

const URL = 'https://api-seller.ozon.ru';

export const postAnalyticsData = (data: any) => {
    return axios.post(`${URL}/v1/analytics/data`, data, {
        'headers': {
            'Client-Id': localStorage.getItem('clientId'),
            'Api-Key': localStorage.getItem('password')
        }
    })
        .then(r => r)
        .catch(r => r)
}


export const postWarehousesData = (data: any) => {
    return axios.post(`${URL}/v2/analytics/stock_on_warehouses`, data, {
        'headers': {
            'Client-Id':  localStorage.getItem('clientId'),
            'Api-Key': localStorage.getItem('password')
        }
    }).then(r => r)
      .catch(r => r)
}