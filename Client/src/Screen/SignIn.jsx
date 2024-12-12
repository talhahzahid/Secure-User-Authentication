import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const signUpHandler = (event) => {
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    try {
      const response = axios.post("http://localhost:8000/user/signin", {
        email,
        password,
      });
      console.log("Login Successfully", response);
      navigate("/");
    } catch (error) {
      console.log("Issue with send data");
    }
  };

  return (
    <div className="flex justify-center items-center h-[90vh] p-4">
      <form
        onSubmit={signUpHandler}
        className="flex justify-center items-center flex-col space-y-4 bg-slate-300  w-full sm:w-[28rem] h-auto p-6 rounded-lg"
      >
        <h1 className="text-xl font-semibold sm:text-2xl">Sign Up</h1>

        <div className="w-full max-w-xs">
          <label htmlFor="email" className="text-white">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            ref={email}
          />
        </div>

        <div className="w-full max-w-xs">
          <label htmlFor="password" className="text-white">
            Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
            ref={password}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
