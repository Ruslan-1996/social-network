import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3588cd03-a8ff-4f0d-9d81-9d9c39c14fdb'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post('follow/' + id)
    },
    unfollow(id) {
        return instance.delete('follow/' + id)
    },
    getUserProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getUserProfile(userId)
    },
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` +userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{
            status: status,
        })
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {
            email, password, rememberMe
        })
    },
    logout() {
        return instance.delete('auth/login')
    }
}
