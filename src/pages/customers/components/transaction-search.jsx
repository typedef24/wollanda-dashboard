import React, { useState } from 'react';

// import style
import styles from '../style.less';
import { Card } from 'antd';
import image1 from '../image/visa-card.png';

function TransactionSearch() {
  // data in state
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Dining',
      companyName: 'McDonald LLC',
      balance: '334',
    },
    {
      id: 2,
      name: 'Dining',
      companyName: 'McDonald LLC',
      balance: '334',
    },
    {
      id: 3,
      name: 'Dining',
      companyName: 'McDonald LLC',
      balance: '334',
    },
  ]);

  return (
    <div>
      <Card title="Transactions" bordered={false} style={{ height: '115vh' }}>
        {data.map((item, index) => (
          <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            <div className={styles.transactionContainer}>
              <div className={styles.containerStyle}>
                <img src={image1} alt="" className={styles.imgStyle} />
                <div style={{ paddingLeft: '10px' }}>
                  <h3 className={styles.boldText}>{item.name}</h3>
                  <p>{item.companyName}</p>
                </div>
              </div>
              <div>
                <h4 className={styles.boldText}>${item.balance}</h4>
                <p>4 Aug 1:00 PM</p>
              </div>
            </div>
            <div className={styles.dividerStyle} />
          </div>
        ))}
      </Card>
    </div>
  );
}

export default TransactionSearch;
