import {GetItemsType, instance, APIResponseType} from "./api"


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, friend: boolean | null = null, term: string = '') {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}` + (term ? `&term=${term}` : '') + (friend === null ? '': `&friend=${friend}`))
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post<APIResponseType<{}>>('follow/' + id)
            .then(res => res.data)
    },
    unfollow(id: number) {
        return instance.delete<APIResponseType<{}>>('follow/' + id)
            .then(res => res.data)
    },
}
