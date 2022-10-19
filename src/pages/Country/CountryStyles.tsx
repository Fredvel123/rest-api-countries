import styled from "styled-components";
import { AppProps } from "../../interfaces/colors.interface";

export const CountryStyles = styled.div<AppProps>`
  margin: 2vh 5%;
  margin-top: 10vh;
  font-family: "Nunito sans";
  span {
    font-weight: 700;
  }
  .button {
    cursor: pointer;
    margin-bottom: 10vh;
    span {
      padding: 1vh 5%;
      background: blue;
      border-radius: 8px;
      background: ${({ colors }) => colors.secondary};
    }
  }

  .country-card {
    display: grid;
    grid-template-columns: 50% 50%;

    img {
      width: 80%;
      height: 80%;
    }
    .info {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 20% 50% 8%;
      grid-template-areas: "title title" "info info-sec" "borders borders";
      .title {
        grid-area: title;
      }
      .main-info {
        grid-area: info;
      }
      .secondary-info {
        grid-area: info-sec;
      }
      .borders {
        grid-area: borders;
        display: flex;
        align-items: center;
        .borders-country {
          margin-left: 10px;
          padding: 0.5vh 3%;
          background: ${({ colors }) => colors.secondary};
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .country-card {
      .info {
        grid-template-rows: 25% 80% 25%;
      }
    }
  }
  @media screen and (max-width: 850px) {
    .country-card {
      display: flex;
      flex-direction: column;
      img {
        width: 100%;
        margin-bottom: 5vh;
      }
      .info {
        display: flex;
        flex-direction: column;
        .title {
          margin: 2vh 0;
        }
        .main-info {
          margin: 2vh 0;
        }
        .secondary-info {
          margin: 2vh 0;
        }
        .borders {
          margin: 2vh 0;
          display: flex;
          align-items: center;
          .borders-country {
            margin-left: 10px;
            padding: 0.5vh 3%;
            background: ${({ colors }) => colors.secondary};
          }
        }
      }
    }
  }
`;
