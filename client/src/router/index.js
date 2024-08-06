import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Register from '../pages/Register';
import CheckEmail from '../pages/CheckEmail';
import CheckPassword from '../pages/CheckPassword';
import ForgottenPassword from '../pages/ForgottenPassword';
import Home from '../pages/Home';
import Message from '../components/Message';
import AuthLayout from '../layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'register',
        element:
          <AuthLayout>
            <Register />
          </AuthLayout>
      },
      {
        path: 'email',
        element:
          <AuthLayout>
            <CheckEmail />
          </AuthLayout>
      },
      {
        path: 'password',
        element:
          <AuthLayout>
            <CheckPassword />
          </AuthLayout>
      },
      {
        path: 'forgotten-password',
        element:
          <AuthLayout>
            <ForgottenPassword />
          </AuthLayout> 
      },
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: ':userID',
            element: <Message />
          }
        ]
      }
    ]
  }
]);

export default router;