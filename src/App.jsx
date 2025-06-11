
import Navber from "./components/Navber";
import Product from "./components/Product";
import Home from './pages/Home';
import About from "./pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element: <Navber />,
      children : [
        {
          path : "/",
          element : <Home />
        },
        {
          path : "/about",
          element : <About />
        },
        {
          path : "/product",
          element : <Product />
        },
      ]
    },
    {
      path : "*",
      element : <div>404 - page not found && working process</div>
    }
  ])
 
  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
