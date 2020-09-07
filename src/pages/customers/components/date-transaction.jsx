import React, { useState } from 'react';

// import style
import styles from '../style.less';
import { Card, Calendar, Badge, Progress } from 'antd';

// get list data
function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [{ id: 1, type: 'success' }];
      break;
    case 10:
      listData = [{ id: 2, type: 'error' }];
    case 12:
      listData = [{ id: 3, type: 'processing' }];
    default:
      break;
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.id}>
          <Badge status={item.type} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

// money spent on each card
function moneySpent() {
  return (
    <div>
      <div className={styles.cardType}>
        <p>Debitt cards</p>
        <h3>432.usd</h3>
      </div>
    </div>
  );
}

function DateTransaction() {
  const [data, setData] = useState(['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']);

  return (
    <div>
      <Card title="August 2018" bordered={false}>
        {/* Calendar */}
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} mode="month" />
        <h3 className={styles.textStyle}>Spent this month</h3>
        {/* debit card */}
        <div>
          <div className={styles.cardType}>
            <p>Debitt cards</p>
            <h3>432.usd</h3>
          </div>
          <Progress percent={60} status="active" showInfo={false} strokeColor="#FEAE33" />
        </div>

        {/* credit cards */}
        <div>
          <div className={styles.cardType}>
            <p>Debitt cards</p>
            <h3>432.usd</h3>
          </div>
          <Progress percent={70} status="active" showInfo={false} strokeColor="#6DD230" />
        </div>

        {/* cash */}
        <div>
          <div className={styles.cardType}>
            <p>Debitt cards</p>
            <h3>432.usd</h3>
          </div>
          <Progress percent={100} status="active" showInfo={false} strokeColor="#4D7CFE" />
        </div>
      </Card>
    </div>
  );
}

export default DateTransaction;
