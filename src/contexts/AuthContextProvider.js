import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = 'http://35.239.251.89';

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };

    const register = async (username, password) => {
        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        try {
            const res = await axios.post(`${API}/register`, formData, config);
            console.log(res);
            navigate('/login');
        } catch(error) {
            console.log(error);
            setError('Error occured!');
        }
    };
    
    return (
        <authContext.Provider value={{
            user,
            error,
            register
        }}>
            {children}
        </authContext.Provider>
    )
};

export default AuthContextProvider;