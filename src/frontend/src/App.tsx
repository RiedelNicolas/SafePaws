import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PasswordRecovery } from './screens/PasswordRecovery';
import { AuthGuard } from './components/AuthGuard';
import { Home } from './screens/Home';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GuestGuard } from './components/GuestGuard';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';



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
        element: <LoginForm/>,
      },
      {
        path: "/register",
        element: <RegisterForm/>,
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
