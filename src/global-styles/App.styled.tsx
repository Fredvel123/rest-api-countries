import styled from "styled-components";

export const AppStyles = styled.div`
  background: ${({ colors }) => colors.primary};
  color: ${({ colors }) => colors.text};
  min-height: 100vh;
`;
