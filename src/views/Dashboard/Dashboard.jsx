import React from "react";
import { GridHome, About, Contact } from "./components";

/* main */

// import Home from '../../views/Dashboard/components/GridHome/GridHome'
// import About from '../../components/main/About'
// import Projects from '../../components/main/Projects'
// import Contact from '../../components/main/Contact'
// import Footer from '../../components/main/Footer'

const Dashboard = () => {
  return (
    <>
      <GridHome />
      <About />
      <Contact />
    </>
  );
};

export default Dashboard;
