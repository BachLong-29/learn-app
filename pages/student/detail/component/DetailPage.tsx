import { Box } from 'ui-components/General/Box';
import Image from 'next/image';
import React from 'react';
import styles from './styles/DetailPage.module.css';

const DetailPage = (props: any) => {
  const { data } = props;
  console.log({ data });
  return (
    <>
      <div className={styles.detail}>
        {/* <div className={styles.ball}></div> */}
        <div className={styles.info}>
          <div className={styles.rank}>
            {data?.rank || ''}
            <div className={styles.abc}>RANK</div>
          </div>
          <div className={styles.level}>{`The student ${
            data?.level || ''
          }.`}</div>
          <div className={styles.name}>{data?.name || ''}</div>
          <div className={styles.nickname}>({data?.nickname || ''})</div>
          <p>
            Erling Braut Haaland (né Håland; born 21 July 2000) is a Norwegian
            professional footballer who plays as a striker for Premier League
            club Manchester City and the Norway national team.
          </p>
          <p>
            Coming through the youth system, Haaland played at senior level for
            Brynes reserve and senior teams. He moved to Molde in 2017 (also
            playing for their reserve team), with whom he spent two seasons.
          </p>
        </div>
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

        {/* <div className={styles.tab}>
    
          <img height={285} width={500} src={data?.images?.[0]} />
          <ul>
            <li className={`${styles.tabs} ${styles.selected}`}>
              Introduction
            </li>
            <li className={styles.tabs}>About</li>
            <li className={styles.tabs}>Status</li>
            <li className={styles.tabs}>Skills</li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default DetailPage;
