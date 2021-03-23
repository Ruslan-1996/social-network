import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    setPreloaderToggle,
    setTotalUsersCount,
    setUsers,
    setUsersCurrentPage,
    toggleFollowingProgress,
    unfollow,
} from "../../redux/usersReducer";
import Users from "./Users";
import PreloaderUsers from "./User/PreloaderUsers/PreloaderUsers";


let a = '1500px';

class UserAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (numberPage) => {
        this.props.setUsersCurrentPage(numberPage)
        this.props.getUsers(numberPage, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isPreloader ?
                    <PreloaderUsers/> : <Users follow={this.props.follow} unfollow={this.props.unfollow}
                                              onPageChanged={this.onPageChanged}
                                              currentPage={this.props.currentPage}
                                              usersData={this.props.usersData}
                                              totalUsersCount={this.props.totalUsersCount}
                                              pageSize={this.props.pageSize}
                                              followingInProgress={this.props.followingInProgress}/>}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersReducer.usersData,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isPreloader: state.usersReducer.isPreloader,
        followingInProgress: state.usersReducer.followingInProgress,
    }
}

const UserContainer = connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setUsersCurrentPage, setTotalUsersCount, setPreloaderToggle,
        toggleFollowingProgress, getUsers
    })
(UserAPIComponent);

export default UserContainer;