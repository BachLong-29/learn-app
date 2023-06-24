import React, { CSSProperties } from 'react';
import { Box } from 'ui-components/General/Box';

const SVGIcon = ({
  src,
  size,
  s,
}: {
  src: string;
  size: number;
  s: CSSProperties;
}) => {
  return <Box as="img" src={src} width={size} height={size} style={s} />;
};

export default SVGIcon;
