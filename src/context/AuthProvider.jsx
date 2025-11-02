import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {

    // STATES
    const [theme, setTheme] = useState(false);

    // theme in the local storage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme === 'dark');
        }
    }, []);

    // toggle theme
    const toggleTheme = () => {
        setTheme((prevDark) => {
            const newTheme = !prevDark ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return !prevDark;
        });
    };

    // User Info
    const userInfo = {
        theme,
        toggleTheme,
    };

    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>;
};
export default AuthProvider;