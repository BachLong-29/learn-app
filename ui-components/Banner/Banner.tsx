import styled, { CSSProperties } from 'styled-components';

import { Box } from 'ui-components/General/Box';
import React from 'react';

// import Image from 'next/image';


const Container = styled(Box)`
  position: relative;
  border-right:2px #393d52 solid;
`;
const Image = styled.img`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;

`;
type Iprops = {
  width?: number | string;
  height?: number | string;
  image?: string;
  styles: React.CSSProperties | any;
  chilren?: React.ReactNode;
};

const Banner = (props: Iprops) => {
  const { width, height, image, styles, chilren } = props;
  return (
    <Container w={width} h={height} {...styles}>
      {/* {chilren} */}
      <Image src="/images/background/backgroundform.png" />
    </Container>
  );
};

export default Banner;
