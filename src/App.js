
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DashboardLayout from './layouts/DashboardLayout';
import Main from './layouts/Main';
import AddItem from './pages/AddItem';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <DashboardLayout />,
          children: [
            {
              path: '/',
              element: <AddItem />
            }
          ]
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
