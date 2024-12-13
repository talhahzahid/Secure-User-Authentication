import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  // loading
  const [Error, setError] = useState("");
  const [loading, setLoadind] = useState(false);

  const signUpHandler = async (event) => {
    event.preventDefault();
    setLoadind(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/user/signin",
        {
          email: email.current.value,
          password: password.current.value,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Login Successfully", response);
      email.current.value = "";
      password.current.value = "";
      navigate("/");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message) || "wrong";
        console.log(error.response.data.message);
      } else {
        setError("Network Error");
      }
    } finally {
      setLoadind(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-[90vh] p-4">
      <form
        onSubmit={signUpHandler}
        className="flex justify-center items-center flex-col space-y-4 bg-[#153131]  w-full sm:w-[24rem] h-auto p-6 rounded-lg"
      >
        <h1 className="text-xl font-semibold sm:text-2xl text-white">
          Sign In
        </h1>
        {Error && (
          <div className="text-red-500 text-sm mb-2">
            <h1 className="text-xl font-semibold">{Error}</h1>
          </div>
        )}
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
          {loading ? "Signing Up..." : "Signup"}
        </button>
        <Link to="/signup" className="text-blue-700 underline">
          Don't Have An Account Register Now
        </Link>
      </form>
    </div>
  );
};

export default Signup;
