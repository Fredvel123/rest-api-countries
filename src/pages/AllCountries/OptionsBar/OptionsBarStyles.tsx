import styled from "styled-components";
import { AppProps } from "../../../interfaces/colors.interface";

interface OptionsBarApp {
  filter: boolean;
}

const WIDTH_FILTER = "100%";
const PADDING_FILTER = "2vh 8%";
const BORDER_RADIUS = "5px";

export const OptionsBarStyles = styled.div<OptionsBarApp & AppProps>`
  .icon_close {
    position: absolute;
    top: 2%;
    right: 2%;
    width: 20px;
    cursor: pointer;
  }
  .icon {
    width: 15px;
  }
  .countries-sugestion {
    position: relative;
    z-index: 100;
    margin-top: 2vh;
    max-height: 50vh;
    width: 100%;
    overflow-y: scroll;
    position: absolute;
    background: ${({ colors }) => colors.secondary};
    li {
      cursor: pointer;
      margin: 1vh;
    }
  }
  form {
    background: red;
    width: 35%;
  }
  label {
    position: relative;
    width: 35%;
    input {
      border-radius: ${BORDER_RADIUS};
      color: ${({ colors }) => colors.text};
      background: ${({ colors }) => colors.secondary};
      width: 100%;
      border: none;
      padding: 2vh 5%;
      padding-left: 10%;
      outline: none;
    }
    .icon_search {
      width: 25px;
      top: 10px;
      left: 3%;
      position: absolute;
    }
  }

  /* filter section */
  display: flex;
  justify-content: space-between;
  align-items: center;
  .filter {
    border-radius: ${BORDER_RADIUS};
    background: ${({ colors }) => colors.secondary};
    width: 16%;
    position: relative;
    .bar {
      cursor: pointer;
      display: flex;
      width: ${WIDTH_FILTER};
      padding: ${PADDING_FILTER};
      justify-content: space-between;
    }
    .regions {
      z-index: 50;
      border-radius: ${BORDER_RADIUS};
      background: ${({ colors }) => colors.secondary};
      position: absolute;
      width: 100%;
      padding: 2vh 2%;
      margin-top: 1vh;
      display: ${({ filter }) => (filter ? "block" : "none")};
      p {
        cursor: pointer;
        margin: 1vh;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    label {
      input {
        padding-left: 15%;
      }
      .icon_search {
        top: 30%;
        left: 5%;
        width: 20px;
      }
    }
    /* filter */
    .filter {
      width: 18%;
    }
  }
  @media screen and (max-width: 960px) {
    p {
      font-size: 13px;
    }
    /* filter */
    .filter {
      width: 22%;
    }
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    p {
      font-size: 13px;
    }
    /* filter */
    label {
      width: 100%;
      input {
        padding-left: 10%;
      }
      .icon_search {
        left: 3%;
      }
    }
    .filter {
      margin-top: 3vh;
      width: 50%;
    }
  }
`;
