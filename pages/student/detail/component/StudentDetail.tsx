import { Box } from 'ui-components/General/Box';
import DateBox from './DateBox';
import { Flex } from 'ui-components/General/Flex';
import InvertedBorderCard from 'components/Card/InvertedBorderCard';
import InvertedCard from 'components/Card/InvertedCard';
import { StudentKeyValue } from 'utils/StudentKeyValues';
import { Title } from 'utils/styles/general';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';
import useBreakpoint from 'ui-components/Grid';

interface iStudentDetail {
  data: any;
}

const StudentDetail = (props: iStudentDetail) => {
  const { data } = props;

  const screens = useBreakpoint();
  const fields = [
    {
      key: StudentKeyValue.ADDRESS,
      label: 'Address',
      content: data?.address,
    },
    {
      key: StudentKeyValue.PHONE,
      label: 'Phone',
      content: data?.phone,
    },
    {
      key: StudentKeyValue.MAJOR,
      label: 'Major',
      content: data?.major,
    },
  ];
  return (
    <Box w="100%">
      <Flex position="relative" flexWrap={screens.lg ? 'unset' : 'wrap'}>
        <InvertedBorderCard
          imageString={data?.images?.[0].originImg}
          width={screens.lg ? '70%' : '100%'}
          height="calc(65vh + 60px)"
          hasIcon
        />
        <DateBox dateOfBirth={data?.dob} />
        <DescriptionContainer>
          <Rank fontSize={screens.lg ? '50px' : '40px'}>
            {data?.rank || ''}
            <RankText paddingTop={screens.lg ? '18px' : '10px'}>RANK</RankText>
          </Rank>
          <Box>{`The student ${data?.level || ''}.`}</Box>
          <Name fontSize={screens.lg ? '60px' : '40px'}>
            {data?.name || ''}
          </Name>
          <NickName>({data?.nickname || ''})</NickName>
          <Box
            textAlign="justify"
            as="p"
            display={screens.lg ? 'block' : 'none'}
          >
            {data?.desc || ''}
          </Box>
        </DescriptionContainer>
      </Flex>
      <InvertedCard width="auto" height="auto" hasIcon>
        <Flex w="calc(100% - 220px)" flexDirection="column">
          <Properties>Properties.</Properties>
          <Grid>
            {fields.map((item) => (
              <>
                <Flex justifyContent="end">{`${item.label}:`}</Flex>
                <Box key={item.key}>{item.content}</Box>
              </>
            ))}
          </Grid>
        </Flex>
      </InvertedCard>
    </Box>
  );
};

const Grid = styled.div`
  padding: 8px;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
  height: fit-content;
`;

const Properties = styled(Title)`
  font-weight: 400;
  border-radius: 10px;
  color: ${defaultTheme.colors.dark_blue};
  font-size: 40px;
  text-align: center;
`;

const Rank = styled(Box)`
  background: -webkit-linear-gradient(#ae8625, #f7ef8a);
  font-family: 'Grechen Fuemen', cursive;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  justify-content: center;
  font-weight: 900;
  display: flex;
  -webkit-background-clip: text;
`;
const RankText = styled(Box)`
  font-family: 'Grechen Fuemen', cursive;
  -webkit-text-fill-color: transparent;
  text-transform: capitalize;
  background: ${defaultTheme.colors.black};
  padding-left: 12px;
  font-size: 30px;
  width: 100%;
  -webkit-background-clip: text;
`;

const Name = styled(Box)`
  font-family: 'Rubik Vinyl', cursive;
  letter-spacing: 1px;
  font-weight: 600;
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

const DescriptionContainer = styled(Box)`
  @media only screen and (max-width: 990px) {
    position: absolute;
    width: 330px;
    height: 170px;
    bottom: 10px;
    left: 20px;
    backdrop-filter: blur(28px);
    background: rgba(241, 224, 222, 0.71);
    padding: 10px;
  }
  background: ${defaultTheme.colors.pink};
  width: 30%;
  height: 65vh;
  margin: 15px;
  margin-top: 0;
  margin-left: 0;
  padding: 20px;
  border-radius: 30px;
  border: 10px solid ${defaultTheme.colors.dark_blue};
`;
export default StudentDetail;
