import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, googleLogin, updateUserProfile } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setPasswordError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;

    // Password validation
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain at least 6 characters, including an uppercase and a lowercase letter."
      );
      return;
    }

    try {
      createUser(email, password)
        .then((result) => {
          console.log("User created successfully:", result.user);
          navigate(from, {replace:true})
        })
        .catch((error) => {
          console.log("Error creating user:", error);
        });

      updateUserProfile(name, photoUrl)

      Navigate("/")

    }
    catch {

    }

    e.target.reset()
  };


  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Create an account to unlock exclusive features and benefits.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo URL (optional)"
                  name="photoUrl"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>


            <div className="flex justify-center -mt-8">
              <button
                onClick={googleLogin}
                className="px-20 py-3 flex items-center justify-center gap-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-4"
              >
                <FaGoogle />
                Sign in with Google
              </button>
            </div>

            <p className="text-center pb-7 text-sm">
              Already a user?{" "}
              <a href="/login" className="link link-primary">
                Please sign in.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
