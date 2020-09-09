import React, { useState } from 'react';
import { MiniArea } from 'ant-design-pro/lib/Charts';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import { Card } from 'antd';
import numeral from 'numeral';
import moment from 'moment';

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

  // balance data
  const visitData = [];
  const beginDay = new Date().getTime();
  for (let i = 0; i < 3; i += 1) {
    visitData.push({
      x: `${i + 1}`,
      y: Math.floor(Math.random() * 100),
    });
  }

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
              <div style={{ width: '50%' }}>
                <MiniArea line height={45} data={visitData} color="#FFF5E7" borderColor="#FFAB2B" />
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
