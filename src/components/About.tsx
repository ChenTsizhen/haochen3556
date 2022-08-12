/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled, { keyframes } from "styled-components";
import me from "../assets/img/me.jpg";

export const About = () => {
  return (
    <Wrapper>
      <Me src={me} alt="NT" height="200px" width="200px" />
      <Greeting>
        <Wave>👋</Wave> Nice to meet you, I'm Hao Chen
      </Greeting>
      <Body>
        I'm a rising junior at Cornell University studying Information Science and minoring in Game Design.
        Currently, I'm assisting research
        at <Link href="https://www.scifilab.org/" bgColour="#cae8dd">Smart Computer Interfaces for Future Interactions (SciFi) Lab </Link> and 
        developing watchfaces at <Link href="https://rebble.io/">Rebble</Link>.
        <br />
        <br />
        I was previously a Business and Design subteam member 
        at <Link href="https://marsrover.engineering.cornell.edu/" bgColour="#cae8dd">Cornell Mars Rover</Link>. 
        I also shot videos for my high school official account.
        <br />
        <br />
        From {" "} <Link href="https://github.com/ChenTsizhen/pngToBit">converting png to bitmap</Link>, 
        to {" "} <Link href="https://github.com/ChenTsizhen/vocalSeg">separating vocal from instrumental</Link>, 
        I'm always looking to tackle interesting challenges, especially in the filmmaking category.
        <br />
        <br />
        Outside school, I'm learning to develop 2D games and 
        make <Link href="https://www.youtube.com/channel/UCWv8waPSuL-CgVRzD9qhv4Q" bgColour="#cae8dd">YouTube</Link> videos. 
        In my free time, you can find me doing choreography, riding a skateboard, reading detective novels, or learning the piano.
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

const Greeting = styled.h1`
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    margin-bottom: 0;
  }
`;

const waveAnimation = keyframes`
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) } 
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) } 
  100% { transform: rotate( 0.0deg) }
`;

const Wave = styled.span`
  animation: ${waveAnimation} 2.5s;
  animation-iteration-count: 3;
  transform-origin: 70% 70%;
  display: inline-block;
`;

export const Link = styled.a<{bgColour?: string}>`
  font-weight: bold;
  text-decoration: none;
  color: black;
  :hover {
    color: #3aa17b;
  };
  background-color: ${props => props.bgColour};
`;

const Body = styled.p`
  font-size: 20px;
  max-width: 1100px;
`;
