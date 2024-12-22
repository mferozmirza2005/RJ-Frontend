"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <h1>Home</h1>
      <Footer />
    </main>
  );
}

export default Home;