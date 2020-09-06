import React, { Component, useState } from 'react';

// import style
import styles from '../style.less';
import { Card } from 'antd';

// import images
import visaCardImg from '../image/visa-card.png';

function AvailiableBalance() {
  const [data, setData] = useState([
    {
      id: 1,
      paymentMethod: 'Card number',
      balance: '56.3',
    },
    {
      id: 2,
      paymentMethod: 'Card number',
      balance: '56.3',
    },
    {
      id: 3,
      paymentMethod: 'Card number',
      balance: '56.3',
    },
  ]);

  return (
    <div>
      <Card title="Availiable Balance" bordered={false} bodyStyle={{ textAlign: 'center' }}>
        <div>
          {data.map((item, index) => (
            <div
              style={{
                paddingTop: '5px',
                paddingBottom: '5px',
              }}
            >
              <div className={styles.paymentContainer}>
                <div className={styles.paymentContainer}>
                  <img src={visaCardImg} alt="" />
                  <div style={{ marginLeft: '10px' }}>
                    <h3>1213323***8223</h3>
                    <p>{item.paymentMethod}</p>
                  </div>
                </div>
                <div>
                  <h3>${item.balance}</h3>
                  <p>Balance</p>
                </div>
              </div>
              <div className={styles.dividerStyle} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default AvailiableBalance;
