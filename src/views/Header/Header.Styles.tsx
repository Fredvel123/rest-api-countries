import styled from "styled-components";

export const HeaderStyles = styled.div`
  height: 15vh;
  background: ${({ color }) => color.secondary};
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
    color: ${({ color }) => color.text};
  }
`;
