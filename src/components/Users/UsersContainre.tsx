import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Users from "./Users";
import PreloaderUsers from "./User/PreloaderUsers/PreloaderUsers";
import {getCurrentPage, getIsPreloader, getPageSize} from "../../redux/usersSelectors";
import {getUsers, setUsersCurrentPage} from "../../redux/usersReducer";
import { withRouter } from 'react-router-dom';

type OwnProps = {
    match: any
}


const UserAPIComponent: React.FC<OwnProps> = React.memo((props) => {
debugger
    const isPreloader = useSelector(getIsPreloader)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const dispatch = useDispatch()
    const [isFriendsPage, setFriendPage] = useState<true | null>(null)
    useEffect(() => {
        let categories = props.match.params.users
        if (categories === 'friends') {
            setFriendPage(true)
            dispatch(setUsersCurrentPage(1))
            dispatch(getUsers(1, pageSize, true))
        } else if (categories === 'users') {
            setFriendPage(null)
            dispatch(setUsersCurrentPage(1))
            dispatch(getUsers(1, pageSize, null))
        }
    }, [props.match.params.users])

    return (
        <>
            {isPreloader ? <PreloaderUsers/> : <Users pageSize={pageSize}
                                                      isFriendPage={isFriendsPage}
                                                      currentPage={currentPage}/>}
        </>
    )
})

export default withRouter(UserAPIComponent);