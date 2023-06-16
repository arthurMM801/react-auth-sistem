import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/User'
import Loader from '../layouts/loader/Loader'


// Limita as rotas dos usuarios não logados
export default function PrivateRoute({
    component: Component,
    ...rest
}){
    const { isAuthenticated, loading } = useContext(AuthContext)

    if(loading){
        return <Loader></Loader>
    }
    
    if(!isAuthenticated){
        return <Navigate to='/login'/>
    }

    return(
        <Component {...rest} />
    )
}