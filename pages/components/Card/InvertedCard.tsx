import { Box } from 'ui-components/General/Box';
import React from 'react';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';

interface iInvertedCard {
  hasIcon?: boolean;
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
}

const InvertedCard = (props: iInvertedCard) => {
  const { hasIcon, width = 300, height = 400, children } = props;

  return (
    <Card w={width} h={height}>
      <CardBox>
        {children}
        <Icon>
          {hasIcon && (
            <IconBox>
              <Box as="img" alt="next" src="/animate/next.gif" w={70} h={70} />
            </IconBox>
          )}
        </Icon>
      </CardBox>
    </Card>
  );
};

const Card = styled(Box)`
  position: relative;
  background: ${defaultTheme.colors.dark_blue};
  border-radius: 30px;
  border-bottom-right-radius: 70px;
  overflow: hidden;
  margin: 15px;
  margin-top: 0;
  padding: 20px;
`;

const CardBox = styled(Box)`
  position: absolute;
  inset: 10px;
  background: ${defaultTheme.colors.pink_0};
  border-radius: 25px;
  padding: 20px;
`;
const Icon = styled(Box)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background: ${defaultTheme.colors.dark_blue};
  border-top-left-radius: 50%;
  transition: 0.5s;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -30px;
    width: 30px;
    height: 30px;
    background: transparent;
    border-bottom-right-radius: 30px;
    box-shadow: 5px 5px 0 5px ${defaultTheme.colors.dark_blue};
  }
  &::after {
    content: '';
    position: absolute;
    top: -30px;
    right: 0;
    width: 30px;
    height: 30px;
    background: transparent;
    border-bottom-right-radius: 30px;
    box-shadow: 5px 5px 0 5px ${defaultTheme.colors.dark_blue};
  }
`;
const IconBox = styled(Box)`
  position: absolute;
  inset: 10px;
  background: ${defaultTheme.colors.pink_0};
  border-radius: 50%;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;
`;

export default InvertedCard;
