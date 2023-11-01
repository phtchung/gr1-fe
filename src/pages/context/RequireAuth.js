import { useLocation , Navigate} from "react-router-dom";
import {useMemo} from "react";


const RequireAuth = ({children}) => {
    const token = useMemo(() => localStorage.getItem('token'), []);

    const location = useLocation()

    if(!token){
        return <Navigate to="/login" state={{from : location}} replace  />
    }
    return children
}

export default RequireAuth



export const CheckLogin = ({children}) => {
    const token = useMemo(() => localStorage.getItem('token'), []);

    const location = useLocation()

    if(token){
        return <Navigate to="/overview" state={{from : location}} replace  />
    }
    return children
}


