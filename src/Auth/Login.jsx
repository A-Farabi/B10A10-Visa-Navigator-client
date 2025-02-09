import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, Navigate, replace, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaase.config";

// Import React Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const { signInUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                // Success toast
                toast.success("Successfully logged in! with email");
                navigate(from, {replace:true})
            })
            .catch((error) => {
                console.log(error.message);
                // Error toast
                toast.error("Login failed: " + error.message);
            });

        e.target.reset();
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("Google Login Error:", error);
                toast.error("Google Login failed: " + error.message);
            });
    };
    

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Login to Your Account
                </h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                        <a href="#" className="text-sm text-indigo-600 hover:underline mt-2 block">
                            Forgot Password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 font-semibold"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Not an existing user?{" "}
                    <Link to="/register" className="text-indigo-600 hover:underline font-medium">
                        Please, Sign Up
                    </Link>
                </p>

                <div className="divider mt-6 text-gray-500">OR</div>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full py-3 flex items-center justify-center gap-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-4"
                >
                    <FaGoogle />
                    Sign in with Google
                </button>
            </div>

            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
};

export default Login;
