import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

let withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Redirect to='login'/>
        }
        return <Component {...props}/>
    }

    return connect(mapStateToProps)(RedirectComponent);
}

export default withAuthRedirect;