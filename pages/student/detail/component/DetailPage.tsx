import About from './About';
import { Box } from 'ui-components/General/Box';
import { Flex } from 'ui-components/General/Flex';
import InformationTab from './InformationTab';
import Skills from './Skills';
import styled from 'styled-components';
import { useState } from 'react';

const DetailPage = (props: any) => {
  const { data } = props;
  const [tab, setTab] = useState('intro');

  const handleChangeTab = (tab: string) => {
    setTab(tab);
  };
  return (
    <Flex w="100%" h="100%" alignItems="end">
      <Flex
        p="0 70px 100px 100px"
        flexDirection="column"
        justifyContent="space-between"
        zIndex={1}
        w="70%"
        h="70%"
      >
        {tab === 'intro' && (
          <Tab>
            <InformationTab data={data} />
          </Tab>
        )}
        {tab === 'about' && (
          <Tab>
            <About />
          </Tab>
        )}
        {tab === 'skills' && (
          <Tab>
            <Skills />
          </Tab>
        )}
        <Box mt={16}>
          <ListItem
            selected={tab === 'intro'}
            onClick={() => handleChangeTab('intro')}
          >
            Introduction
          </ListItem>
          <ListItem
            selected={tab === 'about'}
            onClick={() => handleChangeTab('about')}
          >
            About
          </ListItem>
          <ListItem
            selected={tab === 'skills'}
            onClick={() => handleChangeTab('skills')}
          >
            Skills
          </ListItem>
        </Box>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="end"
        paddingRight="50px"
        w="30%"
        h="90%"
      >
        <Box
          as="img"
          h="90%"
          w="100%"
          zIndex={1}
          boxSizing="border-box"
          border=" 8px solid #cbcdd15b"
          src={data?.images?.[0].originImg}
        />
      </Flex>
    </Flex>
  );
};

const Tab = styled(Box)`
  transition: 0.2s;
`;
const ListItem = styled(Box)<{ selected?: boolean }>`
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 10px;
  color: ${(props) => (props.selected ? '#000' : '#2c29297a')};
  text-align: left;
  cursor: pointer;
  list-style: none;
  font-size: ${(props) => (props.selected ? '20px' : '14px')};
  font-weight: 600;
  transition: 0.2s;
`;

export default DetailPage;
