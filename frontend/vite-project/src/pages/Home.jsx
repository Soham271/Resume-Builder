import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center pt-16">
      {" "}
      <Header />
      <div className="p-6">Welcome to Home Page</div>
    </div>
  );
};

export default Home;
