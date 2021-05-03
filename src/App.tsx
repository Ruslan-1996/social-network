import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import UsersContainer from "./components/Users/UsersContainre";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderComponent";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import WithSuspense from "./hoc/withSuspense";
import Error404 from "./components/common/Error404/Error404";
import {AppStateType} from "./redux/reduxStore";
import FriendsContainer from "./components/Friends/FriendsContainre";
import {getSideBarUsers} from "./redux/sideBarReducer";

const Login = React.lazy(() => import("./components/Login/Login"));

type MapStatePropsType = {
    id: number | null
    initialize: boolean
}

type MapDispatchPropsType = {
    initializeApp: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialize) {
            return <div className='preloader'>
                <Preloader height={'500px'} width={'500px'} borderWidth={'40px'}/>
            </div>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderComponent/>
                    <NavBar/>
                    <div className='app-content'>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to='/profile'/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/dialog' render={() => <DialogsContainer/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/setting' render={() => <Setting/>}/>
                            <Route path='/friends' render={() => <FriendsContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={WithSuspense(Login)}/>
                            <Route path='*' render={() => <Error404/>}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        id: state.auth.id,
        initialize: state.app.initialized,
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {initializeApp})(App);