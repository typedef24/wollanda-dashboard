import React, { Component } from 'react';
import { DollarCircleOutlined } from '@ant-design/icons';
// import styles from './style.less';
import styles from '../style.less';

import image1 from '../image/female.png';
import { Card, Skeleton } from 'antd';

function TransactionPreview() {
  return (
    <div>
      <Card title="Latest Transactions" bordered={false}>
        <img src={image1} alt="Your transaction" className={styles.imgStyle} />
        <h2 style={{ textAlign: 'center', paddingTop: '0px' }}>
          Your transactions will appear here
        </h2>
        <div className={styles.preloaderStyle}>
          <Skeleton loading={true} avatar active>
            {/* <Meta avatar={/> */}
          </Skeleton>
          <Skeleton loading={true} avatar active />
        </div>
      </Card>
    </div>
  );
}

export default TransactionPreview;
