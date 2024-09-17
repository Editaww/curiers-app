import React from "react";

import LoginForm from "../../Components/LoginForm/LoginForm";
import Header from "../../Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

const LoginPage = () => {
  return (
    <div>
      <Header logo={"Curiers App"} />
      <h1 style={{ textAlign: "center", margin: "5rem" }}>
        Login to Curiers App
      </h1>
      <LoginForm />
      <Footer copyrightTitle="© 2024 Curriers App. All rights reserved." />
    </div>
  );
};

export default LoginPage;
