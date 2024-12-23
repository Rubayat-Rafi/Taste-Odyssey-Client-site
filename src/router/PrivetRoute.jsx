/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider';

// import LoadingSpinner from '../components/LoadingSpinner'

const PrivetRoute = ({children}) => {

    const { user } = useContext(AuthContext);

    const location = useLocation()
  
    // if (loading) return <LoadingSpinner />
    if (user) return children


    return  <Navigate to='/login' state={location.pathname} />
};

export default PrivetRoute;