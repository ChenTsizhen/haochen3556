import React from "react";
import styled from "styled-components";

interface Props {
  color: string;
  children: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
}

// const onClick = () => {
//   clicksRef.current = clicksRef.current + 1;
//   let clicks = clicksRef.current;
//   if (clicks > 12){
//     window.localStorage.setItem("jasonSecretRevealed", "true");
//     setDisplaySecret("true");
//     alert("look what you did... you broke the button...")
//   }
//   else if (clicks > 8){
//     setMessage("STOP!!!")
//   }
//   else if (clicks > 4){
//     setMessage("stop!!!")
//   }
//   else if (clicks > 0){
//     setMessage("no really!! stop clicking!!!")
//   }
//   // console.log(clicks)
// }

export const Button: React.FC<Props> = ({ 
    color,
    children,
    height,
    onClick, 
    width
  }) => { 
  return (
    <Wrapper>
      <button 
        onClick={onClick}
        style={{
          backgroundColor: color,
          height,
          width
        }}
      >
      {children}
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  padding: 1px;
  border: 1px solid;
  border-radius: 5%;
  margin-top: 80px;
  transition: transform 250ms;
  :hover {
    transform: translateY(-4px);
    cursor: pointer;
  }
`;