/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center m-20">
              <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    }

    if(user){
        return children;
    } 
    return <Navigate to="/signIn" state={{from : location}} replace></Navigate>
};

export default PrivateRoute;