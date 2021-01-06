import React from "react";

const home = ({handlelogout}) => {
  
  return (
    <section className="hero">
      <nav>
        <h2>Shopping Page</h2>
        <button onClick={handlelogout}>Logout</button>
      </nav>
    </section>
  );
};

export default home;
