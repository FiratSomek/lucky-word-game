import React from "react";

const LogOutButton = () => {
  // const handleLogout = () => {
  //   localStorage.clear();
  //   sessionStorage.clear();
  //   window.location.href = "/api/auth/logout?federated";
  // };
  return (
    <div>
      <button className="font-bold px-4 py-2 w-full cursor-pointer hover:bg-gray-100 transition">
        Log Out
      </button>
    </div>
  );
};

export default LogOutButton;
