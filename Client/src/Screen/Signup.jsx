import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const Signup = () => {
  const fullname = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const signUpHandler = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/user/signup", {
        fullname: fullname.current.value,
        email: email.current.value,
        password: password.current.value,
      });
      console.log("oki");
      // if (response.status === 200) {
      //   // Successfully signed up, navigate to login page
      //   navigate("/login");
      // }
    } catch (error) {
      // Handle errors (e.g., bad request, server error)
      if (error.response) {
        setError(error.response.data.message || "Something went wrong!");
      } else {
        setError("Network error, please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-[90vh] bg-slate-200">
      <form
        onSubmit={signUpHandler}
        className="flex justify-center items-center flex-col space-y-4 bg-white p-8 rounded-lg shadow-md"
      >
        <h1 className="text-xl font-semibold">REGISTER</h1>

        {error && (
          <div className="text-red-500 text-sm mb-2">
            <p>{error}</p>
          </div>
        )}

        <input
          type="text"
          placeholder="Enter your full name"
          className="input input-bordered w-[100%] max-w-xs"
          ref={fullname}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-[100%] max-w-xs"
          ref={email}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="input input-bordered w-[100%] max-w-xs"
          ref={password}
        />
        <button
          type="submit"
          className={`btn ${
            loading ? "btn-disabled" : "btn-primary"
          } w-[100%] max-w-xs`}
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
