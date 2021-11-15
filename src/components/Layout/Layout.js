import React from "react";
import Courses from "../courses/Courses";
import JhankarVai from "../JhankarVai";
import CoursesInfo from "../CoursesInfo";
import HeroSection from "../HeroSection";
import Projects from "../Projects/Projects";
import Testimonial from "../Testimonial/Testimonial"
import CoursesDetail from "../CoursesDetail"
import QAnswer from "../QAnswer";
const Layout = () => {
  return (
    <>
      <HeroSection />
      <CoursesInfo />
      <Courses />
      <CoursesDetail />
      <QAnswer />
      <Projects />
      <JhankarVai />
      <Testimonial />
    </>
  );
};

export default Layout;
