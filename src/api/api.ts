import axios from "axios";
import {UserType} from "../Types/types";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3588cd03-a8ff-4f0d-9d81-9d9c39c14fdb'
    }
})

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export enum ResultCodesEnum  {
    Success = 0,
    Error = 1,
}

export enum ResultCodesForCaptchaEnum  {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10,
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
