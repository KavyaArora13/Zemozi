import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../config/firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'; // Add signInWithEmailAndPassword

interface UserProfile {
  displayName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

interface AuthContextType {
  user: UserProfile | null;
  updateUserProfile: (profileData: UserProfile) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const savedUser = localStorage.getItem('userProfile');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userProfile: UserProfile = {
        displayName: result.user.displayName || '',
        email: result.user.email || '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
      };
      setUser(userProfile);
      setIsAuthenticated(true);
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      localStorage.setItem('isAuthenticated', 'true');
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      // Use Firebase authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      const mockUser: UserProfile = {
        displayName: userCredential.user.displayName || '',
        email: userCredential.user.email || '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('userProfile', JSON.stringify(mockUser));
      localStorage.setItem('isAuthenticated', 'true');
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed');
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('userProfile');
      localStorage.setItem('isAuthenticated', 'false');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const updateUserProfile = async (profileData: UserProfile) => {
    try {
      setUser(profileData);
      localStorage.setItem('userProfile', JSON.stringify(profileData));
    } catch (error) {
      throw new Error('Failed to update profile');
    }
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem('userProfile', JSON.stringify(user));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{
      user,
      updateUserProfile,
      login,
      logout,
      signInWithGoogle,
      isAuthenticated
    }}>
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