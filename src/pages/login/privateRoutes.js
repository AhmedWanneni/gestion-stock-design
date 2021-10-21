import React from "react"
import { Route, Redirect } from "react-router-dom"


export default function PrivateRoute({ component: Component, ...rest }) {
  const  currentUser = localStorage.getItem("key")

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser===null ? <Redirect to="/login" /> : <Component {...props} />
      }}
    ></Route>
  )
}