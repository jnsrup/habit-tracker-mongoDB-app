import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router";
import Loader from "../../Loader/Loader";
import { AuthContext } from "../../Context/AuthProvider";


const PrivateRoute = ({ children }) => {
   const {user,loading} = useContext(AuthContext)
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/Login" state={{ from: location.pathname }} replace />;
};

export default PrivateRoute;
