import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/reduxStore";


type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {


    let RedirectComponent = (props: MapStatePropsType) => {

        let {isAuth, ...restProps} = props


        if (!isAuth) {
            return <Redirect to='login'/>
        }

        return <Component {...restProps as unknown as WCP}/>
    }

    return connect<MapStatePropsType, {}, WCP, AppStateType>(mapStateToProps)(RedirectComponent);
}

export default withAuthRedirect;