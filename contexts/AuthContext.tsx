import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
    username: string;
    email?: string;
    userType?: 'creator' | 'freelancer';
}

interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => boolean;
    signup: (username: string, password: string, email?: string, userType?: 'creator' | 'freelancer') => boolean;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Check if user is already logged in
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    const signup = (username: string, password: string, email?: string, userType?: 'creator' | 'freelancer'): boolean => {
        // Get existing users
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // Check if username already exists
        if (users.find((u: any) => u.username === username)) {
            return false;
        }

        // Create new user
        const newUser = { username, password, email, userType };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Auto-login after signup
        const userProfile = { username, email, userType };
        setUser(userProfile);
        localStorage.setItem('loggedInUser', JSON.stringify(userProfile));

        return true;
    };

    const login = (username: string, password: string): boolean => {
        // Get existing users
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // Find user with matching credentials
        const foundUser = users.find((u: any) => u.username === username && u.password === password);

        if (foundUser) {
            const userProfile = { username: foundUser.username, email: foundUser.email, userType: foundUser.userType };
            setUser(userProfile);
            localStorage.setItem('loggedInUser', JSON.stringify(userProfile));
            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('loggedInUser');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
