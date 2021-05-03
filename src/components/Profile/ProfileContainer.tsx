import React from 'react'
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addChangeAvatar, deletePost,
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    changeProfile
} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import Error404 from "../common/Error404/Error404";
import {PostDataType, ProfileType} from "../../Types/types";
import {AppStateType} from "../../redux/reduxStore";

type MapStatePropsType = {
    authorizedUserId: null | number,
    profile: ProfileType | null,
    postData: Array<PostDataType>,
    status: string
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    addChangeAvatar: (file: File) => void
    deletePost: (id: number) => void
    changeProfile: (profile: any) => void
}

type PathParamsType = {
    userId: string
}

type OwnProps = {
    match: any
    history: any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainerAPI extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
       if (userId) {
            this.props.getUserProfile(userId);
            this.props.getUserStatus(userId)
        }
    }

    componentDidMount() {
       this.refreshProfile()
    }

    componentDidUpdate(prevProps :PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        if(Number(this.props.match.params.userId) === this.props.authorizedUserId) {
            return <Redirect to={'/profile'}/>
        }

        // if(typeof this.props.profile === 'string') {
        //    return <Error404/>
        // }

        return (
            <Profile isOwner = {!!this.props.match.params.userId} {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType) : MapStatePropsType => {
    return {
        profile: state.profileReducer.profile,
        postData: state.profileReducer.postData,
        status: state.profileReducer.status,
        authorizedUserId: state.auth.id,
    }
}


const ProfileContainer = compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnProps, AppStateType>(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
        addChangeAvatar,
        deletePost,
        changeProfile
    }),
    withRouter,
)(ProfileContainerAPI)

// const WithUrlDataContainerComponent = withRouter(ProfileContainer)
//
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));

export default ProfileContainer

