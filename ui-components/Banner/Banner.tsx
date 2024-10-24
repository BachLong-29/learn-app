import { Box } from 'ui-components/General/Box';
import React from 'react';
import styled from 'styled-components';

const Container = styled(Box)`
  position: relative;
  border-right: 2px #393d52 solid;
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
};

const Banner = (props: Iprops) => {
  const { width, height, image, styles } = props;
  return (
    <Container w={width} h={height} style={{ ...styles }}>
      {image ? (
        <Box
          as="img"
          src={image}
          h="100%"
          w="100%"
          style={{
            borderTopLeftRadius: '30px',
            borderBottomLeftRadius: '30px',
          }}
        />
      ) : (
        <Image alt="img-student" src="/images/background/backgroundform.png" />
      )}
    </Container>
  );
};

export default Banner;
