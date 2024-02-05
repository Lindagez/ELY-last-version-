import { useState, useEffect } from "react";

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("Token");

        if (token) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, []);

    return authenticated;
};

export default useAuth;