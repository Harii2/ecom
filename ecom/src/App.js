import Home from './pages/Home.js'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { createBrowserRouter,Outlet,RouterProvider,ScrollRestoration} from 'react-router-dom';
import Cart from './pages/Cart.js';
import { productsData } from './api/Api.js';
import Product from './components/Product.js';
import Login from './pages/Login.js';
const Layout = () => {
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:productsData
      },
      {
        path: "/product/:id",
        element : <Product/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },{
        path : "/login",
        element : <Login/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
