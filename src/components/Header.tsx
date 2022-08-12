import React from "react";
import styled from "styled-components";
import initials from "../assets/img/initials.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  return (
    <Wrapper>
      <a href="/">
        <Initials src={initials} alt="HC" />
      </a>
      <Icons>
        <a href="https://github.com/ChenTsizhen">
          <Icon icon={faGithub} size="lg" color="black" />
        </a>
        <a href="https://www.linkedin.com/in/hao-chen-718529218/">
          <Icon icon={faLinkedinIn} size="lg" color="black" />
        </a>
      </Icons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Icons = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: space-between;
`;

const Icon = styled(FontAwesomeIcon)`
  :hover {
    color: #808080;
  }
`;

const Initials = styled.img`
  height: 40px;

  @media only screen and (max-width: 600px) {
    height: 30px;
  }
  transition: transform 250ms;
  :hover {
    transform: translateY(-6px);
  }
`;
