import { Navigate as Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RouteLink = ({children}) => {
    const {user} = useSelector((state)=>state.AuthReducer);
    return user?( <Redirect to="/admin/dashboard" replace />) : children;
}
export default RouteLink;