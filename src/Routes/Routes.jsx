import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Main from "../Layouts/Main"

const router = createBrowserRouter([
    {
      path :"/",
      element : <Main />,
      children : [
        {
            path : "/",
            
        }
      ]
    }
  ])


  export default router