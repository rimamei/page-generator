import { Navigate } from "react-router-dom";

export const publicRoutes = [
  // {
  //   path: '/',
  //   element: <Login />
  // },
  // {
  //   path: '/register',
  //   element: <Register />
  // },
  { path: '*', element: <Navigate to='/' replace /> }
]