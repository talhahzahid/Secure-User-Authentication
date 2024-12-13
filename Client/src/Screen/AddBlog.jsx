import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/user/protected", {
      method: "GET",
      credentials: "include",
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("No valid session. Redirecting to signin...");
        navigate("/signin");
      }
    });
    // .then((data) => {
    //   console.log("Protected Data:", data);
    // })
    // .catch((error) => {
    //   console.error("Error:", error);
    // });
  }, [navigate]);
  return (
    <>
      <h1 className="text-center mt-7 font-semibold text-xl">ADD BLOG HERE</h1>
    </>
  );
};

export default AddBlog;
