import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: '',
        timeout: 4000,
    })

    instance.interceptors.request.use(config => {
        return config
    }, error => {

    });

    instance.interceptors.response.use(response => {
        return response.data
    }, error => {

    })

    return instance(config);
}