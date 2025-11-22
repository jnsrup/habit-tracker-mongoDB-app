import React, { use, useState } from "react";
// import { auth } from '../firebase.init';
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router";


import { AuthContext } from "../../Context/AuthContext";
import GoogleSignIn from "../GoogleSignIn";

const Login = () => {
  const { createUser, setUser } = use(AuthContext);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();
    console.log(event.target);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ name, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        setUser(user);
        setSuccess(true);
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage, errorCode);
        setError(error.message);
      });

    //Reset  status : success or error
    setSuccess(false);
    setError("");

    console.log("form submit", email, password);
    const lengthPattern = /^.{8,}$/;
    const characterPattern = /^(?=.*[a-z])(?=.*[A-Z].+)/;
    const spacialCharacterPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

    if (!lengthPattern.test(password)) {
      console.log("Password didn't match");
      setError("Password Must be 8 character or longer");
      return;
    } else if (!characterPattern.test(password)) {
      console.log("must have 1 upper case & 1 lower case");
      setError("Password must have 1 lower case & 1 upper case");
      return;
    } else if (!spacialCharacterPattern.test(password)) {
      console.log();
      setError("Password must contain one special character");
      return;
    }
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left"></div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                
                <h1 className="text-3xl font-bold">Login</h1>

                <fieldset className="fieldset">
                  {/* Name */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="your name"
                    required
                  />
                  {/* Email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
                  <div className="relative">
                    {/* Password */}
                    <label className="label">Password</label>
                    <input
                      type={showPassword ? "text" : "Password"}
                      name="password"
                      className="input"
                      placeholder="Password"
                      required
                    />

                    <button
                      onClick={handleTogglePasswordShow}
                      className="btn btn-xs absolute top-7 right-6">
                      {showPassword ? <FaEyeSlash /> : <FaRegEye></FaRegEye>}{" "}
                    </button>
                  </div>

                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <div>
                    <p>
                      Don't have an Account? Please{" "}
                      <Link to="/Register" className="text-blue-500 underline">
                        {" "}
                        Register
                      </Link>{" "}
                    </p>
                  </div>
                  <button className="btn btn-neutral mt-4  ">Login</button>
                  <div className="flex justify-center ">
                  {" "}
                  <GoogleSignIn></GoogleSignIn>{" "}
                </div>
                </fieldset>
                {success && (
                  <p className="text-green-400"> Login successfully!!</p>
                )}
                {error && <p className="text-red-400 font-bold">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
