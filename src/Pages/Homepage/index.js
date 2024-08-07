import React from "react";
import HomSection from "../../componentes/HomeSection";
import Category from "../../componentes/categoryes";
import FamousCourses from "../../componentes/Famous";

export default function HomePage() {
  return (
    <>
      <HomSection />
      <Category />
      <FamousCourses />
    </>
  );
}
