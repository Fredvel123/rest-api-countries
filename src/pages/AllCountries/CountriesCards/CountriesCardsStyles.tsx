import styled from "styled-components";
import { AppProps } from "../../../interfaces/colors.interface";

export const Card = styled.div<AppProps>`
  width: 310px;
  min-height: 350px;
  cursor: pointer;
  background: ${({ colors }) => colors.secondary};
  margin-bottom: 5vh;
  border-radius: 7px;
  box-shadow: -1px 6px 27px -2px rgba(0, 0, 0, 0.57);
  -webkit-box-shadow: -1px 6px 27px -2px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: -1px 6px 27px -2px rgba(0, 0, 0, 0.57);
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  .info {
    h2 {
      font-size: 22px;
      margin-bottom: 2vh;
    }
    li {
      font-size: 15px;
      margin-top: 0.5vh;
    }
    margin: auto;
    margin-top: 3vh;
    width: 85%;
    display: block;
    /* background: red; */
  }
  @media screen and (max-width: 800px) {
    width: 250px;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
    height: 400px;
    img {
      height: 210px;
    }
  }
`;

export const MainCard = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* gap: 2rem; */
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;
