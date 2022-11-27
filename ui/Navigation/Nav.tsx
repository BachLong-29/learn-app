import { BoxIcon, Container } from './styles/index';
import React, { useState } from 'react';

import BankOutlined from '@ant-design/icons/BankOutlined';
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const [tab, setTab] = useState('home');

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
    <Container>
      <BoxIcon onClick={goHome} isSelected={tab === 'home'}>
        <HomeOutlined />
      </BoxIcon>
      <BoxIcon onClick={goStudentBoard} isSelected={tab === 'student'}>
        <UserOutlined />
      </BoxIcon>
      <BoxIcon onClick={goClassBoard} isSelected={tab === 'class'}>
        <BankOutlined />
      </BoxIcon>
      <BoxIcon onClick={goExamBoard} isSelected={tab === 'exam'}>
        <CalendarOutlined />
      </BoxIcon>
    </Container>
  );
};

export default Nav;
