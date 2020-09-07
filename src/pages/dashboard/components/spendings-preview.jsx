import React, { Component } from 'react';
import { DownloadOutlined } from '@ant-design/icons';

// import style
import styles from '../style.less';
import { Card } from 'antd';
import ActiveChart from './ActiveChart';

function SpendingPreview() {
  return (
    <div>
      <Card title="Accounts" bordered={false} bodyStyle={{ textAlign: 'center' }}>
        {/* <Pie percent={68} subTitle="Total" total="68%" height={140} color="#ffab2b" /> */}
        <ActiveChart />
      </Card>
      <div className={styles.downloadSection}>
        <h4 className={styles.textStyle}>View Full report</h4>
        <a href="#">
          <i className={styles.textStyle} style={{ fontSize: '20px' }}>
            <DownloadOutlined />
          </i>
        </a>
      </div>
    </div>
  );
}

export default SpendingPreview;
