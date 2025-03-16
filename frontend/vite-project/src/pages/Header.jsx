import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { useDispatch } from "react-redux";
import { logout } from "@/Store/UserSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("Logging out...");
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 lg:px-8 border-b border-gray-300 bg-whitez-50">
      <img
        src={logo}
        alt="logo"
        className="w-12 h-auto object-contain cursor-pointer"
        onClick={() => navigate("/home")}
      />
      {/* input type */}
      <input></input>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
