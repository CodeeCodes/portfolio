import React from "react";
import arrow from "../assets/svg/down-arrow.svg";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

export default function DownArrow() {
  const Bounce = styled.div`
    animation: 3s ${keyframes`${bounce}`} infinite;
  `;
  return (
    <Bounce className="arrow">
      <img src={arrow} alt="arrow" className="arrow__image" />
    </Bounce>
  );
}
