import React, { useEffect } from 'react'
import { Layout } from '../layout/Layout'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserToken } from '../redux/login/LoginSlice';

function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const token = useSelector(selectUserToken)
    
    useEffect(() => {
        if (token === null) {
            navigate('/login/get-number', { replace: true })
        }
    }, [token])
    
    return (
        <>
            <Layout>
                {token !== null && children}
            </Layout>

        </>
    )
}

export default PrivateRoute
