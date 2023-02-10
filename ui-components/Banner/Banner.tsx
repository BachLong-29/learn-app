import styled, { CSSProperties } from 'styled-components';

import { Box } from 'ui-components/General/Box';
import React from 'react';

const Container = styled(Box)``;

type Iprops = {
  width?: number | string;
  height?: number | string;
  image?: string;
  styles: CSSProperties | any;
  chilren: React.ReactNode;
};

const Banner = (props: Iprops) => {
  const { width, height, image, styles, chilren } = props;
  return (
    <Box w={width} h={height} {...styles}>
      {chilren}
    </Box>
  );
};

export default Banner;
