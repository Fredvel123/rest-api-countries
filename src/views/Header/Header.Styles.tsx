import styled from "styled-components";
import { AppProps } from "../../interfaces/colors.interface";

export const HeaderStyles = styled.div<AppProps>`
  height: 15vh;
  background: ${({ colors }) => colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito Sans";
  padding: 0 5%;
  .setTheme_button {
    cursor: pointer;
    display: flex;
    p {
      margin-left: 7px;
    }
  }
  .icon {
    width: 20px;
    color: ${({ colors }) => colors.text};
  }
  @media screen and (max-width: 750px) {
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }
`;
