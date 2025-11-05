import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Projects from '../components/Projects';
import Home from '../Pages/Home/Home';
import Contact from '../components/Contact';

const Router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "projects",
                Component: Projects
            },
            {
                path: "contact",
                Component: Contact
            }
        ]
        
    }
])

export default Router;