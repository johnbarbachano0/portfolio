import React, { useEffect } from "react";
import AppearanceButton from "../components/AppearanceButton";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Contacts from "../components/contacts/Contacts";
import Skills2 from "../components/skills/Skills2";
import Experience2 from "../components/experience/Experience2";
import Testimonials from "../components/testimonials/Testimonials";
import Portfolio from "../components/portfolio/Portfolio";
import Footer from "../components/footer/Footer";
import FloatingNav from "../components/FloatingNav";
import { Paper } from "@mui/material";
import { setMaintenance } from "../features/Maintenance";
import { useDispatch } from "react-redux";
import { useGetMaintenanceQuery } from "../services/MaintenanceService";

const Homepage = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetMaintenanceQuery({ query: "" });

  useEffect(() => {
    data && !isLoading && dispatch(setMaintenance(data));
  }, [data, dispatch, isLoading]);

  return (
    <Paper>
      <AppearanceButton />
      <FloatingNav />

      <Header />
      <About />
      <Skills2 />
      <Experience2 />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </Paper>
  );
};

export default Homepage;
