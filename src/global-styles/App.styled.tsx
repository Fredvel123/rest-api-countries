import styled from "styled-components";
import { AppProps } from "../interfaces/colors.interface";

export const AppStyles = styled.div<AppProps>`
  background: ${({ colors }) => colors.primary};
  color: ${({ colors }) => colors.text};
  min-height: 100vh;
`;
