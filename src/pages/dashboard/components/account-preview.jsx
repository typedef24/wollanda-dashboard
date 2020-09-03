import React, { Component } from 'react';
import { DownloadOutlined } from '@ant-design/icons';

// import style
import styles from '../style.less';
import { Card } from 'antd';
import { WaterWave } from './charts';

function AccountPreview() {
  return (
    <div>
      <Card
        title="Accounts"
        bordered={false}
        bodyStyle={{ textAlign: 'center', marginTop: '15px' }}
      >
        <WaterWave height={161} title="Total profit" percent={34} unit="k" />
        <h3>VISA CARD 3455***535</h3>
      </Card>
      <div className={styles.downloadSection}>
        <h4 className={styles.textStyle}>Download Statement</h4>
        <a href="#">
          <i className={styles.textStyle} style={{ fontSize: '20px' }}>
            <DownloadOutlined />
          </i>
        </a>
      </div>
    </div>
  );
}

export default AccountPreview;
