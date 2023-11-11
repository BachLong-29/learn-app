import { Box } from 'ui-components/General/Box';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Card = (props: any) => {
  const { data } = props;
  const { images, name, id } = data;
  return (
    <Link href={`/student/detail/${id}`}>
      <Container>
        <Image alt="img-s" as="img" src={images?.[0].originImg} />
        <Description>
          <GroupName>
            <Rank>{data?.rank || ''}</Rank>
            <Name>{name}</Name>
          </GroupName>
          <Line></Line>
          <Desc>
            Erling Braut Haaland (né Håland; born 21 July 2000) is a Norwegian
            professional footballer who plays as a striker for Premier League
            club Manchester City and the Norway national team. Erling Braut
            Haaland (né Håland; born 21 July 2000) is a Norwegian professional
            footballer who plays as a striker for Premier League club Manchester
            City and the Norway national team.
          </Desc>
        </Description>
      </Container>
    </Link>
  );
};

const Rank = styled(Box)`
  background: -webkit-linear-gradient(#ae8625, #f7ef8a);
  font-family: 'Grechen Fuemen', cursive;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  justify-content: center;
  margin-right: 15px;
  font-weight: 900;
  font-size: 50px;
  display: flex;
  -webkit-background-clip: text;
`;

const Image = styled(Box)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 40px;
`;
const GroupName = styled(Box)`
  font-family: 'Luckiest Guy', cursive;
  display: flex;
  font-size: 40px;
  color: #e2edef;
  align-items: center;
  padding-left: 10px;
`;
const Name = styled(Box)`
  font-family: 'Luckiest Guy', cursive;
  font-size: 40px;
  color: #e2edef;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Line = styled(Box)`
  width: 220px;
  height: 1px;
  background: #ee3aa0;
  margin-bottom: 16px;
`;

const Desc = styled(Box)`
  color: #e2edef;
  font-size: 12px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Description = styled(Box)`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  padding: 15px 35px;
  z-index: 3;
  color: #dff;
`;
const Container = styled(Box)`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0;
  padding: 0;
  width: 500px;
  height: 600px;
  border-radius: 40px;
  background: #ccc;
  transition: 0.5s;
  transform: scale(1, 1);
  cursor: pointer;
  &:hover {
    transform: scale(1.2, 1.2);
    z-index: 99999;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
  &:before {
    content: '';
    bottom: -3px;
    background: #000;
    height: 25%;
    width: 100%;
    position: absolute;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    z-index: 2;
    background: linear-gradient(0deg, #000, 65%, transparent);
  }
`;

export default Card;

// <Wrapper>
// <Slider>
//   {dataSource.map((item, key) => {
//     return <Card data={item} key={key} />;
//   })}
// </Slider>
// </Wrapper>
