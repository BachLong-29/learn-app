import { Button } from "antd";
import defaultTheme from "ui-components/theme/theme";
import styled from "styled-components";

export const CustomButton = styled(Button)<{genre?: string}>`
  width: 150px;
  height: 50px;
  background: ${props => props.genre === 'positive' ?   defaultTheme.colors.pink_0 : defaultTheme.colors.white};
  font-weight: 700;
  transition: 500ms;
  border-radius: 30px;
  &:hover{
    color: ${defaultTheme.colors.dark_blue} !important;
    border-color: ${defaultTheme.colors.dark_blue} !important;
  }
`;