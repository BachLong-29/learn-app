import React, { CSSProperties } from 'react';

const SVGIcon = ({
  src,
  w,
  h,
  s,
}: {
  src: string;
  w: number;
  h: number;
  s: CSSProperties;
}) => {
  return <img src={src} width={w} height={h} style={s} />;
};

export default SVGIcon;
