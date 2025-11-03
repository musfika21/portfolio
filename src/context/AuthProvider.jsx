import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {

    const [theme, setTheme] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme === "dark");
        }
    }, []);

    const toggleTheme = () => {
        setTheme((prevDark) => {
            const newTheme = !prevDark ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return !prevDark;
        });
    };

    const userInfo = {
        theme,
        toggleTheme,
    };

    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>;
};
export default AuthProvider;