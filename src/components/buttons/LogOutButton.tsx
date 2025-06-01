import React from "react";

const LogOutButton = () => {
  // const handleLogout = () => {
  //   localStorage.clear();
  //   sessionStorage.clear();
  //   window.location.href = "/api/auth/logout?federated";
  // };
  return (
    <button className="font-bold w-full cursor-pointer hover:bg-gray-100 transition">
      Log Out
    </button>
  );
};

export default LogOutButton;
