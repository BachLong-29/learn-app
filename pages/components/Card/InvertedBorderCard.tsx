import { Box } from 'ui-components/General/Box';
import LeftCircleOutlined from '@ant-design/icons/LeftCircleOutlined';
import React from 'react';
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

  const icons = [
    {
      key: IconKey.BACK,
      content: (
        <LeftCircleOutlined
          style={{
            fontSize: 25,
            cursor: 'pointer',
          }}
        />
      ),
      tooltip: 'Back to Student List',
      callback: () => {
        router.push('/student');
      },
    },
    {
      key: IconKey.SCHEDULE,
      content: (
        <ScheduleOutlined
          style={{
            fontSize: 27,
            cursor: 'pointer',
          }}
        />
      ),
      tooltip: 'See the Schedule',
      callback: () => {},
    },
    {
      key: IconKey.PROFILE,
      content: (
        <UserOutlined
          style={{
            fontSize: 25,
            cursor: 'pointer',
          }}
        />
      ),
      tooltip: 'See the Profile',
      callback: () => {},
    },
    {
      key: IconKey.TRANSCRIPT,
      content: (
        <TableOutlined
          style={{
            fontSize: 25,
            cursor: 'pointer',
          }}
        />
      ),
      tooltip: 'See the Transcript',
      callback: () => {},
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
                  <Box onClick={icon.callback}>{icon.content}</Box>
                </Tooltip>
              ))}
            </IconBox>
          )}
        </Icon>
      </CardBox>
    </>
  );
};

const CardBox = styled(Box)`
  position: relative;
  background: ${defaultTheme.colors.pink_0};
  border-radius: 30px;
  margin: 15px;
`;
const Icon = styled(Box)`
  top: 0;
  position: absolute;
  width: 260px;
  height: 60px;
  background: ${defaultTheme.colors.pink_0};
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
    box-shadow: -5px -5px 0 5px ${defaultTheme.colors.pink_0};
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
    box-shadow: -5px -5px 0 5px ${defaultTheme.colors.pink_0};
  }
`;
const IconBox = styled(Box)`
  position: absolute;
  inset: 10px;
  top: 0;
  background: #fff;
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

export default InvertedBorderCard;
