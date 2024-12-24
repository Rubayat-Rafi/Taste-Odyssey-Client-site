/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../Components/Loading';

// import LoadingSpinner from '../components/LoadingSpinner'

const PrivetRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);


    const location = useLocation()
  
    if (loading) return <Loading/>
    if (user) return children


    return  <Navigate to='/login' state={location.pathname} />
};

export default PrivetRoute;