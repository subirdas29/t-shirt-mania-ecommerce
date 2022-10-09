
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Component/Home/Home';
import Orders from './Component/Orders/Orders';
import About from './Component/About/About';
import Grandpa from './Component/Grandpa/Grandpa';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          loader:()=> fetch ('t-shirt.json'),
          element:<Home></Home>
        },
        {
          path:"orders",
          element:<Orders></Orders>
        },
        {
          path: "grandpa",
          element:<Grandpa></Grandpa>
        },
        {
          path:"about",
          element:<About></About>
        },
      ]
    },
  ])
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
