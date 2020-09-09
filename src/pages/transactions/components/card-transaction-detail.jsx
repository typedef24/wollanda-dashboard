import React from 'react';
import { Bar } from 'ant-design-pro/lib/Charts';

export default function CardTransactionDetails() {
  const salesData = [];

  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];

  for (let i = 0; i < 12; i += 1) {
    salesData.push({
      x: `${i + 1} ` + 'Month',
      y: Math.floor(Math.random() * 1000) + 200,
    });
  }

  return (
    <div>
      <div>
        <h2>Balance</h2>
      </div>
      <Bar height={300} title="Total Balance" data={salesData} color="#f7902a" />
    </div>
  );
}
