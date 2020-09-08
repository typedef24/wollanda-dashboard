import React, { useState } from 'react';
import { Card } from 'antd';

import Styles from '../style.less';

export default function CardBalance() {
  // state data
  const [data, setData] = useState([
    {
      title: 'Card Balance',
      amount: '214.999',
    },
    {
      title: 'Deposit Balance',
      amount: '214.999',
    },
    {
      title: 'E-wallets Balance',
      amount: '214.999',
    },
  ]);
  return (
    <div>
      {data.map((item, index) => (
        <div className={Styles.balanceContainer}>
          <Card>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div>
                <h2>${item.amount}</h2>
                <h3 className={Styles.headerStyle}>{item.title}</h3>
              </div>
              <h4>Charts</h4>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
