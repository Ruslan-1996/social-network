import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
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

const Login = React.lazy(() => import("./components/Login/Login"));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp(this.props.id)
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

                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialog' render={() => <DialogsContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/setting' render={() => <Setting/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={WithSuspense(Login)}/>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        initialize: state.app.initialized,
    }
}

export default connect(mapStateToProps, {initializeApp})(App);
