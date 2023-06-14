import { Box } from 'ui-components/General/Box';
import { Flex } from 'ui-components/General/Flex';
import React from 'react';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';

const Footer = () => {
  const title = [
    {
      key: 'about',
      label: 'About us',
      content: ['FAQ', 'Privacy Policy', 'Help', 'Contact'],
    },
    {
      key: 'support',
      label: 'Support',
      content: ['FAQ', 'Privacy Policy', 'Help', 'Contact'],
    },
    {
      key: 'shop',
      label: 'Shop',
      content: ['Men', 'Women', 'Children', 'Shoes'],
    },
  ];
  return (
    <Flex
      w="100%"
      style={{
        position: 'relative',
        bottom: 0,
        height: '180px',
      }}
    >
      <Container>
        {title.map((item) => {
          return (
            <Flex key={item.key} flexDirection="column">
              <Title>{item.label}</Title>
              {item.content.map((value, index) => {
                return <Item key={index}>{value}</Item>;
              })}
            </Flex>
          );
        })}
      </Container>
    </Flex>
  );
};

const Container = styled(Flex)`
  width: 100%;
  background: ${defaultTheme.colors.dark_blue};
  color: ${defaultTheme.colors.pink_0};
  padding: 20px;
  justify-content: center;
  &:not(:last-child) {
    gap: 50px;
  }
`;

const Item = styled(Box)`
  width: 300px;
`;

const Title = styled(Box)`
  width: 300px;
  font-size: 20px;
  margin-bottom: 8px;
`;

export default Footer;
