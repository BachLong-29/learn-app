import { Box } from "ui-components/General/Box";
import { Flex } from "ui-components/General/Flex";
import defaultTheme from "ui-components/theme/theme";
import styled from "styled-components";

export const Title = styled(Box)`
  padding: 4px 12px;
  font-size: 24px;
`;

export const WrappedTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const FormFooter = styled(Flex)`
  background: ${defaultTheme.colors.white};
  border-end-end-radius: 4px;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 40px;
  border-bottom-right-radius: 30px;
  @media only screen and (max-width: 990px) {
    border-bottom-left-radius: 30px;
  }
`;