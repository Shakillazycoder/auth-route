import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <div className="text-center flex justify-center items-center min-h-screen"><span className="loading loading-spinner  text-error"></span></div>
    }
    if(user){
    return children;
    }
    return <Navigate to='/login'>Sign in</Navigate>
};

export default PrivateRoute;