import React, { useState } from 'react';

import { Box } from 'ui-components/General/Box';
import LeftCircleOutlined from '@ant-design/icons/LeftCircleOutlined';
import ScheduleOutlined from '@ant-design/icons/ScheduleOutlined';
import TableOutlined from '@ant-design/icons/TableOutlined';
import { Tooltip } from 'antd';
import UserOutlined from '@ant-design/icons/UserOutlined';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface iInvertedBorderCard {
  hasIcon?: boolean;
  imageString: string;
  width: number | string;
  height: number | string;
}
enum IconKey {
  BACK = 'back',
  SCHEDULE = 'schedule',
  PROFILE = 'profile',
  TRANSCRIPT = 'transcript',
}

const InvertedBorderCard = (props: iInvertedBorderCard) => {
  const { hasIcon, imageString, height, width } = props;
  const router = useRouter();
  const [selected, setSelected] = useState(IconKey.PROFILE);
  const icons = [
    {
      key: IconKey.BACK,
      position: 18,
      content: (
        <LeftCircleOutlined
          style={{
            fontSize: 25,
            cursor: 'pointer',
            color: defaultTheme.colors.pink,
          }}
        />
      ),
      tooltip: 'Back to Student List',
      callback: () => {
        router.push('/student');
      },
    },
    {
      key: IconKey.PROFILE,
      position: 73,
      content: (
        <UserOutlined
          style={{
            fontSize: 25,
            cursor: 'pointer',
          }}
        />
      ),
      tooltip: 'See the Profile',
      callback: () => {
        setSelected(IconKey.PROFILE);
      },
    },
    {
      key: IconKey.SCHEDULE,
      position: 131,
      content: (
        <ScheduleOutlined
          style={{
            fontSize: 27,
            cursor: 'pointer',
          }}
        />
      ),
      tooltip: 'See the Schedule',
      callback: () => {
        setSelected(IconKey.SCHEDULE);
      },
    },

    {
      key: IconKey.TRANSCRIPT,
      position: 190,
      content: (
        <TableOutlined
          style={{
            fontSize: 25,
            cursor: 'pointer',
          }}
        />
      ),
      tooltip: 'See the Transcript',
      callback: () => {
        setSelected(IconKey.TRANSCRIPT);
      },
    },
  ];
  return (
    <>
      <CardBox w={width} h={height}>
        <Image as="img" src={imageString} alt="image" />
        <Icon>
          {hasIcon && (
            <IconBox>
              {icons.map((icon) => (
                <Tooltip key={icon.key} title={icon.tooltip}>
                  <Box
                    onClick={icon.callback}
                    zIndex={1}
                    color={
                      selected === icon.key
                        ? defaultTheme.colors.dark_blue
                        : defaultTheme.colors.pink
                    }
                  >
                    {icon.content}
                  </Box>
                </Tooltip>
              ))}
              <WrapperIcon
                left={icons.find((icon) => icon.key === selected)?.position}
              />
            </IconBox>
          )}
        </Icon>
      </CardBox>
    </>
  );
};

const CardBox = styled(Box)`
  position: relative;
  background: ${defaultTheme.colors.pink};
  border-radius: 30px;
  margin: 15px;
  margin-top: 0;
`;
const Icon = styled(Box)`
  top: 0;
  position: absolute;
  width: 260px;
  height: 60px;
  background: ${defaultTheme.colors.pink};
  border-bottom-right-radius: 36px;
  transition: 0.5s;
  &::before {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 0;
    width: 30px;
    height: 30px;
    background: transparent;
    border-top-left-radius: 30px;
    box-shadow: -5px -5px 0 5px ${defaultTheme.colors.pink};
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -30px;
    width: 30px;
    height: 30px;
    background: transparent;
    border-top-left-radius: 50px;
    box-shadow: -5px -5px 0 5px ${defaultTheme.colors.pink};
  }
`;
const IconBox = styled(Box)`
  position: absolute;
  inset: 10px;
  top: 0;
  background: ${defaultTheme.colors.dark_blue};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 30px;
`;
const Image = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;

const WrapperIcon = styled(Box)<{ left?: number }>`
  position: absolute;
  top: 7px;
  background: ${defaultTheme.colors.pink};
  padding: 2px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: 0.2s;
`;

export default InvertedBorderCard;
