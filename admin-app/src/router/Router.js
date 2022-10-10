import { useSelector } from "react-redux";
import { Route, Routes as Switch, Navigate as Redirect } from "react-router";
import ForgotPassword from "../components/auth/ForgotPassword";
import Login from "../components/auth/Login";
import ResetPassword from "../components/auth/ResetPassword";
// import OrderPDF from "../components/order/OrderPDF";
// import OrderPrint from "../components/order/OrderPrint";
import DashboardRoute from "./DashboardRoute";
import PrivateRoute from "./PrivateRoute";
import RouteLink from "./RouteLink";

const Routers = () => {
    const { user } = useSelector((state)=>state.AuthReducer);
    return (
        <>
           <Switch>
               <Route path="/" element={user?<Redirect to="/admin/dashboard" replace /> : <Redirect to="/admin/login" replace/>}></Route>
               <Route path="/admin/login" element={<RouteLink><Login/></RouteLink>}></Route>
               <Route path="/admin/forgot-password" element={<RouteLink><ForgotPassword/></RouteLink>}></Route>
               <Route path="/admin/reset-password/:token" element={<RouteLink><ResetPassword/></RouteLink>}></Route>
               {/* Order PDF Route */}
               {/* <PrivateRoute exact path="/admin/order/order-pdf/:id" component={OrderPDF}></PrivateRoute>
               <PrivateRoute exact path="/admin/order/order-print/:id" component={OrderPrint}></PrivateRoute> */}
               <Route path="/admin/*" element={<PrivateRoute><DashboardRoute/></PrivateRoute>}></Route>
           </Switch>
        </>
    );
}

export default Routers;