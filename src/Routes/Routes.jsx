import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Main from "../Layouts/Main"
import Home from "../pages/Home/Home/Home"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"
import Checkout from "../pages/Checkout/Checkout"

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
        },
        {
          path : "checkout/:id",
          element : <Checkout />,
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    }
  ])


  export default router