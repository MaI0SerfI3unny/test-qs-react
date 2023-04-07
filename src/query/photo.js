import { axiosInstance } from "../services/axiosInstance"

export const getPhoto = async() => {
    return await axiosInstance()
        .get(`photos/?client_id=${process.env.REACT_APP_CLIENT_ID}`)
}

export const getPhotoById = async(id) => {
    return await axiosInstance()
        .get(`photos/${id}?client_id=${process.env.REACT_APP_CLIENT_ID}`)
    
}