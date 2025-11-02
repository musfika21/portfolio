import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';

const Router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        
    }
])

export default Router;