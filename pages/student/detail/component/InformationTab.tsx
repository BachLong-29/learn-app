import { Box } from 'ui-components/General/Box';
import styled from 'styled-components';

const InformationTab = (props: any) => {
  const { data } = props;
  return (
    <Box>
      <Rank>
        {data?.rank || ''}
        <RankText>RANK</RankText>
      </Rank>
      <Box>{`The student ${data?.level || ''}.`}</Box>
      <Name>{data?.name || ''}</Name>
      <NickName>({data?.nickname || ''})</NickName>
      <Box>
        Erling Braut Haaland (né Håland; born 21 July 2000) is a Norwegian
        professional footballer who plays as a striker for Premier League club
        Manchester City and the Norway national team. Erling Braut Haaland (né
        Håland; born 21 July 2000) is a Norwegian professional footballer who
        plays as a striker for Premier League club Manchester City and the
        Norway national team.
      </Box>
      <Box>
        Coming through the youth system, Haaland played at senior level for
        Brynes reserve and senior teams. He moved to Molde in 2017 (also playing
        for their reserve team), with whom he spent two seasons. Coming through
        the youth system, Haaland played at senior level for Brynes reserve and
        senior teams. He moved to Molde in 2017 (also playing for their reserve
        team), with whom he spent two seasons.
      </Box>
    </Box>
  );
};

const Rank = styled(Box)`
  background: -webkit-linear-gradient(#ae8625, #f7ef8a);
  font-family: 'Grechen Fuemen', cursive;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  justify-content: center;
  margin-bottom: 15px;
  font-weight: 900;
  font-size: 50px;
  display: flex;
  -webkit-background-clip: text;
`;
const RankText = styled(Box)`
  font-family: 'Grechen Fuemen', cursive;
  -webkit-text-fill-color: transparent;
  text-transform: capitalize;
  background: #000;
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
  font-size: 80px;
`;
const NickName = styled(Box)`
  margin-bottom: 20px;
  font-size: 16px;
`;

export default InformationTab;
