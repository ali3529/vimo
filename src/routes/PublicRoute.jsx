import React, {useEffect} from 'react'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Layout} from '../layout/Layout';
import {selectUserToken} from '../redux/login/LoginSlice';

function PublicRoute({children}) {
    const navigate = useNavigate();
    const token = useSelector(selectUserToken)
    useEffect(() => {
        if (token !== null) {
            navigate('/splash', {replace: true})
        }
    }, [token])
    return (
        <>
            {children}
        </>
    )
}

export default PublicRoute
