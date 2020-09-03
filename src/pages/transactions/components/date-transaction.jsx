import React, { useState } from 'react';

// import style
import styles from '../style.less';
import { Card } from 'antd';

function DateTransaction() {
  const [data, setData] = useState(['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']);

  return (
    <div>
      <Card title="August 2018" bordered={false}>
        {/* month display */}
        <div className={styles.monthStyle}>
          {data.map((item, index) => (
            <h4 style={{ fontWeight: 'bold', color: '#AAB7C7' }}>{item}</h4>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default DateTransaction;
