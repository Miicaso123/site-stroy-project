import "../../App.css";
import { connect } from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { useEffect } from "react";
import Registration from "./Registration";


let RegistrationContainer = (props) => {

  

    return <Registration {...props}/>
}



function mapStateToProps(state){
    return{
        usersPage: state.usersPage,
    }
}


let AuthRedirect = withAuthRedirect(RegistrationContainer)

export default connect(mapStateToProps, {})(AuthRedirect)