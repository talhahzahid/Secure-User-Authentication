import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const Signup = () => {
  // get value from form
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
      console.log(response);
      // Clear form inputs
      fullname.current.value = "";
      email.current.value = "";
      password.current.value = "";

      // If signup is successful, navigate to the login page
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
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
        className="flex justify-center items-center flex-col space-y-4  bg-[#153131] w-full sm:w-[24rem] h-auto p-6 rounded-lg"
      >
        <h1 className="text-xl font-semibold text-white">REGISTER</h1>

        {error && (
          <div className="text-red-500 text-sm mb-2">
            <p>{error}</p>
          </div>
        )}

        <input
          type="text"
          placeholder="Enter your full name"
          className="input input-bordered w-full max-w-xs"
          ref={fullname}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full max-w-xs"
          ref={email}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="input input-bordered w-full max-w-xs"
          ref={password}
        />
        <button type="submit" className="btn btn-primary text-white">
          {loading ? "SIGNUP..." : "SIGNUP"}
        </button>
        <Link to="/signin" className="text-blue-600 underline">
          Already Have An Acoout
        </Link>
      </form>
    </div>
  );
};

export default Signup;
