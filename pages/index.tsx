import { useEffect, useState } from 'react';

import Head from 'next/head';
import Todo from 'ui-components/TodoPage/Todo';
import studentApi from './api/studentService';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [productList, setProductList] = useState<any[]>([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await studentApi.getAll();
        setProductList(response?.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };
    fetchProductList();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Todo />
    </div>
  );
}
