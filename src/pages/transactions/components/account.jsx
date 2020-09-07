import React from 'react';
import { Card } from 'antd';

// import image
import image1 from '../image/visa-card.png';

export default function Account() {
  return (
    <div>
      <Card title="Your Account">
        <h1>Cards</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src={image1} alt="" />
          <div style={{ paddingLeft: '10px' }}>
            <h3>32011***4663</h3>
            <p>Card number</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ExtraContent() {
  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
}
