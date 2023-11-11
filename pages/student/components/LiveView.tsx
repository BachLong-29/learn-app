import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import Card from './Card';
import styled from 'styled-components';

const LiveView = (props: { dataSource: any }) => {
  const { dataSource } = props;
  return (
    <StyledSwiper
      watchSlidesProgress={true}
      slidesPerView={3}
      className="mySwiper"
    >
      {dataSource.map((item, key) => {
        return (
          <StyledSwiperSlide key={key}>
            <Card data={item} />
          </StyledSwiperSlide>
        );
      })}
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  height: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper-wrapper {
    align-items: center;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  height: 600px;
  width: 600px !important;
  justify-content: center;
  align-items: center;
`;

export default LiveView;
