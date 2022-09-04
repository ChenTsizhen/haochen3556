import React from "react";
import styled from "styled-components";
import me from "../assets/img/me.jpg";

export const Secret = () => {
  return (
    <Wrapper>
      <Me src={me} alt="NT" height="200px" width="200px" />
      <Body>
        Thank you so much for reading through my story.
        This page is about part of my secret journey.
        <br />
        <br />
        My first "job" was a junior dancer and actress. 
        I was lucky enough to skip class and had good times on the stage.
        <br />
        <br />
        My favicon is a little mouse because my name "Hao" is similar to 
        the pronounciation of mouse (小耗子) in Chinese. It's composed of "7+2=9".
        <br />
        <br />
        Over 90% of my clothes are in black, white or blue.
        <br />
        <br />
        I like to collect cute items and weird tech products.
        <br />
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Me = styled.img`
  border-radius: 50%;
`;

const Body = styled.p`
  font-size: 20px;
  max-width: 1100px;
`;