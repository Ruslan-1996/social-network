import React from 'react'
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getUserProfile,
    getUserStatus,
    updateUserStatus
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
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

    componentDidUpdate(prevProps, prevState, snapshot) {
    }


    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profileReducer.profile,
        postData: state.profileReducer.postData,
        status: state.profileReducer.status,
        authorizedUserId: state.auth.id,
    }
}


const Container = compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
    }),
    withRouter,
)(ProfileContainer)

// const WithUrlDataContainerComponent = withRouter(ProfileContainer)
//
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));

export default Container

