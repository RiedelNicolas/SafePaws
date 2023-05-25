import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';
import { PasswordRecovery } from './screens/PasswordRecovery';
import { AuthGuard } from './components/AuthGuard';
import { HouseFeed } from './screens/HouseFeed';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { GuestGuard } from './components/GuestGuard';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { AdviseMyHome } from './screens/AdviseMyHome';
import { Pay } from './screens/Pay';



const router = createBrowserRouter([
  {
    path: "/pay",
    element: <Pay/>
  },
  {
    path: "/",
    element: <AuthGuard/>,
    children: [
      {
        path: "/",
        element: <HouseFeed/>,
      },
      {
        path: "/AdviseMyHome",
        element: <AdviseMyHome/>,
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
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
