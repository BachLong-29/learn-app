import { BoxIcon, Container } from './styles/index';
import React, { useState } from 'react';

import BankOutlined from '@ant-design/icons/BankOutlined';
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import CaretRightOutlined from '@ant-design/icons/CaretRightOutlined';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const [tab, setTab] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const goHome = () => {
    setTab('home');
    router.push('/');
  };
  const goStudentBoard = () => {
    setTab('student');
    router.push('/student');
  };
  const goClassBoard = () => {
    setTab('class');
    router.push('/class');
  };
  const goExamBoard = () => {
    setTab('exam');
    router.push('/exam');
  };

  return (
    <Container isOpen={isOpen}>
      <BoxIcon
        style={{
          color: tab === 'home' ? '#00f' : '#fff',
        }}
        onClick={goHome}
        isSelected={tab === 'home'}
        isOpen={isOpen}
      >
        <HomeOutlined
          style={{
            fontSize: '16px',
            marginRight: isOpen ? '12px' : '0px',
          }}
        />
        {isOpen && <div style={{ fontSize: '12px' }}>Home</div>}
      </BoxIcon>
      <BoxIcon
        onClick={goStudentBoard}
        isSelected={tab === 'student'}
        isOpen={isOpen}
        style={{ color: tab === 'student' ? '#00f' : '#fff' }}
      >
        <UserOutlined
          style={{
            fontSize: '16px',
            marginRight: isOpen ? '12px' : '0px',
          }}
        />
        {isOpen && <div style={{ fontSize: '12px' }}>Student</div>}
      </BoxIcon>
      <BoxIcon
        onClick={goClassBoard}
        isSelected={tab === 'class'}
        isOpen={isOpen}
        style={{ color: tab === 'class' ? '#00f' : '#fff' }}
      >
        <BankOutlined
          style={{
            fontSize: '16px',
            marginRight: isOpen ? '12px' : '0px',
          }}
        />
        {isOpen && <div style={{ fontSize: '12px' }}>Class</div>}
      </BoxIcon>
      <BoxIcon
        onClick={goExamBoard}
        isSelected={tab === 'exam'}
        isOpen={isOpen}
        style={{ color: tab === 'exam' ? '#00f' : '#fff' }}
      >
        <CalendarOutlined
          style={{
            fontSize: '16px',
            marginRight: isOpen ? '12px' : '0px',
          }}
        />
        {isOpen && <div style={{ fontSize: '12px' }}>Exam</div>}
      </BoxIcon>
      <BoxIcon onClick={() => setIsOpen(!isOpen)}>
        <CaretRightOutlined
          style={{
            fontSize: '16px',
            color: '#fff',
          }}
        />
      </BoxIcon>
    </Container>
  );
};

export default Nav;
