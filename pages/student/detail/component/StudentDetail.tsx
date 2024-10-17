import { Box } from 'ui-components/General/Box';
import { Flex } from 'ui-components/General/Flex';
import Image from 'next/image';
import InvertedBorderCard from 'components/Card/InvertedBorderCard';
import InvertedCard from 'components/Card/InvertedCard';
import React from 'react';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';

interface iStudentDetail {
  data: any;
}

const StudentDetail = (props: iStudentDetail) => {
  const { data } = props;
  return (
    <Box w="100%">
      <Flex position="relative">
        <InvertedBorderCard
          imageString={data?.images?.[0].originImg}
          width="70%"
          height="calc(65vh + 44px)"
          hasIcon
        />
        <DateBox>
          <Box
            style={{
              background: '#fb4625',
              color: '#fff',
              fontSize: '28px',
              height: 'calc(100% - 20px)',
              padding: '10px',
              borderRadius: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40%',
            }}
          >
            2000
          </Box>
          <Box
            style={{
              color: defaultTheme.colors.pink_0,
              fontSize: '16px',
              marginBottom: '10px',
              marginLeft: '10px',
            }}
          >
            <Box
              style={{
                fontSize: '28px',
                display: 'inline-block',
                marginRight: '4px',
                color: '#fff396',
              }}
            >
              29
            </Box>
            DD
          </Box>
          <Box
            style={{
              color: defaultTheme.colors.pink_0,
              fontSize: '16px',
              marginBottom: '10px',
              marginLeft: '10px',
            }}
          >
            <Box
              style={{
                fontSize: '28px',
                display: 'inline-block',
                marginRight: '4px',
                color: '#fff396',
              }}
            >
              11
            </Box>
            MM
          </Box>
        </DateBox>

        <DescriptionContainer>
          <Rank>
            {data?.rank || ''}
            <RankText>RANK</RankText>
          </Rank>
          <Box>{`The student ${data?.level || ''}.`}</Box>
          <Name>{data?.name || ''}</Name>
          <NickName>({data?.nickname || ''})</NickName>
          <Box as="p">
            Erling Braut Haaland (né Håland; born 21 July 2000) is a Norwegian
            professional footballer who plays as a striker for Premier League
            club Manchester City and the Norway national team. Erling Braut
            Haaland (né Håland; born 21 July 2000) is a Norwegian professional
            footballer who plays as a striker for Premier League club Manchester
            City and the Norway national team.
          </Box>
        </DescriptionContainer>
      </Flex>
      <InvertedCard width="auto" height="15vh" />
      {/* <OtherContainer>Other</OtherContainer> */}
    </Box>
  );
};

const Rank = styled(Box)`
  background: -webkit-linear-gradient(#ae8625, #f7ef8a);
  font-family: 'Grechen Fuemen', cursive;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  justify-content: center;
  font-weight: 900;
  font-size: 50px;
  display: flex;
  -webkit-background-clip: text;
`;
const RankText = styled(Box)`
  font-family: 'Grechen Fuemen', cursive;
  -webkit-text-fill-color: transparent;
  text-transform: capitalize;
  background: ${defaultTheme.colors.black};
  padding-top: 18px;
  padding-left: 12px;
  font-size: 30px;
  width: 100%;
  -webkit-background-clip: text;
`;

const Name = styled(Box)`
  font-family: 'Rubik Vinyl', cursive;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 60px;

  display: -webkit-box;
  max-width: 400px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const NickName = styled(Box)`
  margin-bottom: 20px;
  font-size: 16px;
`;

const DateBox = styled(Box)`
  position: absolute;
  bottom: 40px;
  left: 40px;
  padding: 5px;
  width: 300px;
  height: 80px;
  border-radius: 30px;
  backdrop-filter: blur(10px);
  border: 3px solid ${defaultTheme.colors.pink_0};
  display: flex;
  align-items: end;
`;

const DescriptionContainer = styled(Box)`
  background: ${defaultTheme.colors.pink_0};
  width: 30%;
  height: 65vh;
  margin: 15px;
  padding: 20px;
  border-radius: 30px;
  border: 2px solid ${defaultTheme.colors.dark_blue};
`;
const OtherContainer = styled(Box)`
  background: ${defaultTheme.colors.pink_0};
  height: 15vh;
  margin: 15px;
  padding: 20px;
  border-radius: 30px;
  border: 2px solid ${defaultTheme.colors.dark_blue};
`;

export default StudentDetail;
