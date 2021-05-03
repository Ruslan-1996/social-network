import {instance, APIResponseType, ResultCodesEnum} from "./api";
import {PhotosType, ProfileType} from "../Types/types";

type UpdateAvatarType = {
    photos: PhotosType
}

export const profileAPI = {
    getUserProfile(userId: number | null) {
        return instance.get<ProfileType>(`profile/` + userId).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {
            status: status,
        }).then(res => res.data)
    },
    updateAvatar(file: File) {
        const formData = new FormData();
        formData.append("image", file);
        return instance.put<APIResponseType<UpdateAvatarType>>(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => res.data)
    },
    updateProfileInfo(profile: any) {
        return instance.put<APIResponseType>('profile', profile)
    }
}