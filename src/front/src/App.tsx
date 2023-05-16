import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Login } from './screens/Login'
import { Register } from './screens/Register';
import { PasswordRecovery } from './screens/PasswordRecovery';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/password-recovery",
    element: <PasswordRecovery />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
