import authService from "../store/features/auth/authService";
import {Navigate, useLocation} from 'react-router'
import { useSelector } from 'react-redux';

export const ProtectedRoute = ( { children }) => {

    const location = useLocation();
    const { user } = useSelector(state => state.auth)
    
    return user 
    ? children
    : <Navigate to="/login"/>
}