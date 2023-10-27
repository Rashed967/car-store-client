import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Main from "../Layouts/Main"
import Home from "../pages/Home/Home/Home"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"

const router = createBrowserRouter([
    {
      path :"/",
      element : <Main />,
      children : [
        {
            path : "/",
            element : <Home />
        },
        {
          path : "login",
          element : <Login />
        },
        {
          path : "signup",
          element : <Signup />
        }
      ]
    }
  ])


  export default router