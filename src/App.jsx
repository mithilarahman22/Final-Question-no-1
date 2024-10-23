
import './App.css'
import {RouterProvider,}from "react-router-dom";
import {router} from './Routs/MainRout';


const App = () => {
  
  return (
    <>
    <RouterProvider router={router} />
    
    </>
  )
}

export default App;
