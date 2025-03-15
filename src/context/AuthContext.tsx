
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, AuthState } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserInfo: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user exists in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setState({
          user: parsedUser,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("user");
        setState({ ...state, isLoading: false });
      }
    } else {
      setState({ ...state, isLoading: false });
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // For demo, we're just checking if the email is valid and password length
      if (!email.includes("@") || password.length < 6) {
        toast.error("Invalid credentials");
        return false;
      }
      
      // Create a mock user
      const user: User = {
        id: Math.random().toString(36).substring(2, 15),
        name: email.split("@")[0],
        email,
        createdAt: new Date().toISOString(),
      };
      
      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      
      // Update state
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      
      toast.success("Login successful");
      navigate("/dashboard");
      return true;
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
      return false;
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Create a mock user
      const user: User = {
        id: Math.random().toString(36).substring(2, 15),
        name,
        email,
        createdAt: new Date().toISOString(),
      };
      
      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      
      // Update state
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      
      toast.success("Registration successful");
      navigate("/dashboard");
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
      return false;
    }
  };

  const logout = () => {
    // Remove user from localStorage
    localStorage.removeItem("user");
    
    // Update state
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
    
    toast.success("Logged out successfully");
    navigate("/");
  };

  const updateUserInfo = (data: Partial<User>) => {
    if (!state.user) return;
    
    const updatedUser = { ...state.user, ...data };
    
    // Update localStorage
    localStorage.setItem("user", JSON.stringify(updatedUser));
    
    // Update state
    setState({
      ...state,
      user: updatedUser,
    });
    
    toast.success("Profile updated successfully");
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        updateUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
