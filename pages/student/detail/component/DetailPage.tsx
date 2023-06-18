import { Box } from 'ui-components/General/Box';
import { Flex } from 'ui-components/General/Flex';
import InformationTab from './InformationTab';
import styled from 'styled-components';

const DetailPage = (props: any) => {
  const { data } = props;
  return (
    <Flex w="100%" h="100%" alignItems="end">
      <Flex
        p="0 100px 100px 100px"
        flexDirection="column"
        justifyContent="space-between"
        boxSizing="border-box"
        style={{
          width: '70%',
          height: '90%',
        }}
      >
        <InformationTab data={data} />
        <Box mt={16}>
          <ListItem>Introduction</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Status</ListItem>
          <ListItem>Skills</ListItem>
        </Box>
      </Flex>
      <Box
        style={{
          width: '30%',
          height: '100%',
          position: 'fixed',
          top: 0,
          right: 0,
        }}
      >
        <img height="100%" width="100%" src={data?.images?.[0]} />
      </Box>
    </Flex>
  );
};
const ListItem = styled(Box)`
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 10px;
  color: #2c29297a;
  text-align: left;
  cursor: pointer;
  list-style: none;
  font-size: 14px;
  transition: 0.2s;
`;

export default DetailPage;
