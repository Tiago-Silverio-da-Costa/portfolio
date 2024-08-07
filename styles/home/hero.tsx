"use client";
import styled from "styled-components";

export const HeroContainer = styled.div<{
  $bg: string;
}>`
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  position: relative;
  width: 12rem;
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
  animation: rotation 45s infinite linear;
  border-radius: 50%;
  padding: 8rem;
  border: 1px solid #30363d;
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
    bottom: -3.85rem;
    left: 4rem;
    margin: 45px;
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
  animation: rotation 45s infinite linear;
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
    left: -1.25rem;
    bottom: 8rem;
    margin: 5px;
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
  animation: rotation 45s infinite linear;
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
    margin: 1px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const HTMLChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
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
    right: -1rem;
    top: 7rem;
    margin: 1px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const CSSChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
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
    right: 1rem;
    top: 2rem;
    margin: 1px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const TailwindChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
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
    bottom: 14.5rem;
    left: 3.5rem;
    margin: -10px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const StyledChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
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
    bottom: 4.5rem;
    left: 0.75rem;
    margin: -10px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const NodeChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
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
    right: 1rem;
    top: 12rem;
    margin: 1px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const JavaChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
  border-radius: 50%;
  padding: 12rem;
  border: 1px solid #30363d;

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
    margin: -10px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const TypeChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
  border-radius: 50%;
  padding: 12rem;
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
    bottom: 0rem;
    left: 15rem;
    margin: -10px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const ExpressChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
  border-radius: 50%;
  padding: 12rem;
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
    bottom: 8rem;
    left: 0rem;
    margin: -10px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const PostgresChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
  border-radius: 50%;
  padding: 12rem;
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
    bottom: 11rem;
    left: 23.5rem;
    margin: -10px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const SqliteChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
  border-radius: 50%;
  padding: 12rem;
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
    bottom: 13rem;
    left: -0.5rem;
    margin: -10px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const RedisChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
  border-radius: 50%;
  padding: 12rem;
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
    bottom: 18rem;
    left: 21.5rem;
    margin: -10px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const PrismaChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
  border-radius: 50%;
  padding: 12rem;
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
    bottom: 1rem;
    left: 5.5rem;
    margin: -10px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const PythonChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
  border-radius: 50%;
  padding: 12rem;
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
    bottom: 20.5rem;
    left: 3.5rem;
    margin: -10px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;

export const GoChild = styled.div<{
  $icon: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotation 45s infinite linear;
  border-radius: 50%;
  padding: 12rem;
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
    bottom: 4rem;
    left: 21rem;
    margin: -10px;
  }

  @keyframes rotation {
    0% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`;
