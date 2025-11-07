import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Contact from '../components/Contact';
import Projects from '../Pages/Projects/Projects';
import Qualifications from '../Pages/Qualifications/Qualifications';

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
            },
            {
                path: "qualifications",
                Component: Qualifications
            }
        ]
        
    }
])

export default Router;