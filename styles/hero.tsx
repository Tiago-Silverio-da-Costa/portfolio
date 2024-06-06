"use client"
import styled from "styled-components"

export const HeroContainer = styled.div<{
  $bg: string;
}>`
background-image: url(${({ $bg }) => $bg});
	background-size: cover;
	position: relative;
      width: 10rem;
  height: 10rem;
  border-radius: 50%;
  position: relative;
`;


export const ReactChild = styled.div<{
  $icon: string;
}>`

  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 8s infinite linear;
  border-radius: 50%;
  padding: 8rem;
  border: 1px solid #c0c0c029;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:before {
content: "";
display: block;
    background-image: url(${({ $icon }) => $icon});
	background-size: cover;
  width: 2rem;
  height: 2rem;
  position: absolute;
  bottom: -2rem;
  left: 9rem;
  border-radius: 50%;
  margin: 45px;
  background-color: #000;
  }

  @keyframes rotation {
  0% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
`;


export const NextChild = styled.div<{
  $icon: string;
}>`

  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 8s infinite linear;
  border-radius: 50%;
  padding: 8rem;
  
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:before {
content: "";
display: block;
    background-image: url(${({ $icon }) => $icon});
	background-size: cover;
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: -20px;
  right: -20px;
  border-radius: 50%;
  margin: 5px;
  background-color: #000;
  }

  @keyframes rotation {
  0% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
`;

export const JSChild = styled.div<{
  $icon: string;
}>`

  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 8s infinite linear;
  border-radius: 50%;
  padding: 8rem;
  
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:before {
content: "";
display: block;
    background-image: url(${({ $icon }) => $icon});
	background-size: cover;
  width: 2rem;
  height: 2rem;
  position: absolute;
  bottom: -20px;
  top: -20px;
  border-radius: 50%;
  background-color: #000;
  margin: 1px;
  }

  @keyframes rotation {
  0% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
`;