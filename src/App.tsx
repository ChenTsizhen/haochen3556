import React from "react";

import styled from "styled-components";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import "./fonts/fonts.css";

export const App = () => {
  return (
    <Container>
      <Header />
      <About />
      <Projects />
      {/* <Button 
      color="white"
      height = "50px"
      onClick={() => console.log("clicked")}
      width = "200px"
      children = "Shhh...Don't Click"
      /> */}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 48px 16px;
  font-family: "Mada", sans-serif;

  @media only screen and (max-width: 600px) {
    padding: 32px 32px 8px;
  }
`;
