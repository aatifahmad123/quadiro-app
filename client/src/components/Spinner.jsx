import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

const Spinner = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate("/login", {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location]);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-skinn">
        <h1 className="text-center">Getting back in {count} seconds 😇</h1>
        <InfinitySpin
  visible={true}
  width="200"
  color="#db7c26"
  ariaLabel="infinity-spin-loading"
  />
      </div>
    </>
  );
};

export default Spinner;
