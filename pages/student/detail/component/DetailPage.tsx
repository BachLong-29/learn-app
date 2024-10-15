import About from './About';
import { Box } from 'ui-components/General/Box';
import { Flex } from 'ui-components/General/Flex';
import InformationTab from './InformationTab';
import Skills from './Skills';
import styled from 'styled-components';
import { useState } from 'react';

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

const DetailPage = (props: any) => {
  const { data } = props;
  const [tab, setTab] = useState('intro');

  const handleChangeTab = (tab: string) => {
    setTab(tab);
  };
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
      <Box
        style={{
          width: '30%',
          height: '100%',
          position: 'fixed',
          top: 0,
          right: 0,
        }}
      >
        <Box
          as="img"
          height="100%"
          width="100%"
          src={data?.images?.[0].originImg}
        />
      </Box>
    </Flex>
  );
};

export default DetailPage;
