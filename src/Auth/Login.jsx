import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Login = () => {
    const { signInUser } = useContext(AuthContext)

    //   const handleGoogleSignIn = () => {
    //     console.log("Google Sign-In clicked");
    //   };

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log("Email:", email, "Password:", password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })

        e.target.reset()
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Login to Your Account
                </h2>
                <form onSubmit={handleRegister}>
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

                {/* <button
                    onClick={handleGoogleSignIn}
                    className="w-full py-3 flex items-center justify-center gap-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-4"
                >
                    <FaGoogle />
                    Sign in with Google
                </button> */}
            </div>
        </div>
    );
};

export default Login;
