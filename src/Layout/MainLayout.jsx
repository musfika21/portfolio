import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import useAuth from '../Hooks/useAuth';
import Footer from '../components/Footer';
const MainLayout = () => {

    return (
        <div>
           <header>
             <Navbar />
           </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;