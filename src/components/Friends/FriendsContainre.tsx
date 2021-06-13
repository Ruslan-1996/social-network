import React from 'react';
import {connect} from "react-redux";
import {follow, getUsers, setUsersCurrentPage, unfollow,} from "../../redux/friendsReducer";
import Friends from "./Friends";
import PreloaderUsers from "./User/PreloaderUsers/PreloaderUsers";
import {UserType} from "../../Types/types";
import {AppStateType} from "../../redux/reduxStore";
import {
    getAuthorizedUserId,
    getCurrentPage,
    getFollowingInProgress,
    getIsPreloader,
    getPageSize,
    getTotalUsersCount,
    getUsersData
} from "../../redux/usersSelectors";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isPreloader: boolean
    totalUsersCount: number
    usersData: Array<UserType>
    followingInProgress: Array<number>
    authorizedUserId: number | null
    portionSize?: number
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    setUsersCurrentPage: (numberPage: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class UserAPIComponent extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (numberPage: number) => {
        this.props.setUsersCurrentPage(numberPage)
        this.props.getUsers(numberPage, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isPreloader ?
                    <PreloaderUsers/> : <Friends follow={this.props.follow} unfollow={this.props.unfollow}
                                                 onPageChanged={this.onPageChanged}
                                                 currentPage={this.props.currentPage}
                                                 usersData={this.props.usersData}
                                                 totalUsersCount={this.props.totalUsersCount}
                                                 pageSize={this.props.pageSize}
                                                 followingInProgress={this.props.followingInProgress}
                                                 authorizedUserId={this.props.authorizedUserId}
                    />}
            </>
        )
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isPreloader: getIsPreloader(state),
        followingInProgress: getFollowingInProgress(state),
        authorizedUserId: getAuthorizedUserId(state),
    }
}


//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
const FriendsContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
    {
        follow, unfollow,
        setUsersCurrentPage, getUsers
    }))
(UserAPIComponent);

export default FriendsContainer;