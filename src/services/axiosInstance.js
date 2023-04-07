import axios from "axios"

export const axiosInstance = (config = {}) => {
    return axios.create({
        baseURL: process.env.REACT_APP_URL_API,
        ...config
      })
}