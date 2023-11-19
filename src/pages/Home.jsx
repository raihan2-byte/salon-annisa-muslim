import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Home/Hero";
import Layanan from "../components/Home/Layanan";
import Perawatan from "../components/Home/Perawatan";
import Kontak from "../components/Kontak";
import Testimonial from "../components/Home/Testimonial";

export default function Home() {
  
  return (
    <Layout>
      <Hero />
      <Layanan />
      <Perawatan />
      <Testimonial />
      <Kontak />
    </Layout>
  );
}
