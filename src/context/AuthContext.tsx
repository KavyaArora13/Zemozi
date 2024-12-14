import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../config/firebase';
import { 
  signInWithPopup, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User as FirebaseUser
} from 'firebase/auth';

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
  signup: (email: string, password: string) => Promise<void>;
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

  const createUserProfile = (firebaseUser: FirebaseUser): UserProfile => {
    return {
      displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || '',
      email: firebaseUser.email || '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
    };
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userProfile = createUserProfile(userCredential.user);
      setUser(userProfile);
      setIsAuthenticated(true);
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      localStorage.setItem('isAuthenticated', 'true');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userProfile = createUserProfile(result.user);
      setUser(userProfile);
      setIsAuthenticated(true);
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      localStorage.setItem('isAuthenticated', 'true');
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
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

  const signup = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userProfile = createUserProfile(userCredential.user);
      setUser(userProfile);
      setIsAuthenticated(true);
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      localStorage.setItem('isAuthenticated', 'true');
    } catch (error: any) {
      console.error('Signup error:', error);
      throw new Error(error.message || 'Failed to create account');
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const userProfile = createUserProfile(firebaseUser);
        setUser(userProfile);
        setIsAuthenticated(true);
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        localStorage.setItem('isAuthenticated', 'true');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      updateUserProfile,
      login,
      signup,
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