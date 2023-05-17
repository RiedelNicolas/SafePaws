import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from './screens/Login'
import { Register } from './screens/Register';
import { PasswordRecovery } from './screens/PasswordRecovery';
import { AuthGuard } from './components/AuthGuard';
import { Home } from './screens/Home';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GuestGuard } from './components/GuestGuard';



const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthGuard/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      }
    ]
  },
  {
    path: "/",
    element: <GuestGuard/>,
    children: [
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/password-recovery",
        element: <PasswordRecovery/>,
      },
    ]
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);



function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
