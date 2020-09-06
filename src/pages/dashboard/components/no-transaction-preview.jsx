import React, { Component } from 'react';

import styles from '../style.less';
import image1 from '../image/female-cycling2.png';
import { Button } from 'antd';

function NoTransactionPreview() {
  return (
    <div className={styles.noTransactionStyle}>
      <img src={image1} alt="" className={styles.imgStyle} />
      <h3 style={{ textAlign: 'center', color: '#aeaeaf' }}>
        You don’t have any budget spendings. Create new limits and budget to see your account
        details.
      </h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          size="large"
          style={{
            backgroundColor: '#feae33',
            color: '#FFF',
            border: 'none',
            marginTop: 10,
          }}
        >
          No Transactions Yet
        </Button>
      </div>

      {/* </div> */}
    </div>
  );
}

export default NoTransactionPreview;
