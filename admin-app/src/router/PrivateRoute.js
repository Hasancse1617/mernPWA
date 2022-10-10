import { Navigate as Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {
    const {user} = useSelector((state)=>state.AuthReducer);
    return user? children : (<Redirect to="/admin/login" replace/>);
}

export default PrivateRoute;