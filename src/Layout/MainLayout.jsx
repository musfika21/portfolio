import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import useAuth from '../Hooks/useAuth';
const MainLayout = () => {

    const theme = useAuth();

    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;