import React, { useState } from 'react';
import { Modal, Card, Select, Row, Col } from 'antd';
import { Option } from 'antd/lib/mentions';
import { UserOutlined } from '@ant-design/icons';

// import image
import image1 from '../image/visa-card.png';
import image2 from '../image/Master-Card.png';
import image3 from '../image/paypal.png';
import image4 from '../image/Google-wallet.png';
import image5 from '../image/payoneer.png';

import Styles from '../style.less';
import InputField from './input-field';

export default function Account() {
  // State for modal visibility
  const [visible, setVisible] = useState(false);

  // Show modal function
  const showModal = () => {
    console.log(visible);
    setVisible(true);
  };

  // Handle cancel
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Card
        title="Your Account"
        extra={
          <a onClick={showModal}>
            <UserOutlined /> New Account
          </a>
        }
      >
        {/* Modal - add new account*/}
        <Modal
          title="Add new account"
          visible={visible}
          onCancel={handleCancel}
          okText="SET SYNCHRONIZATION"
        >
          <AddNewAccount />
        </Modal>

        <h1 className={Styles.headerStyle}>Cards</h1>
        {/* Visa card */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className={Styles.textContainer}>
            <img src={image1} alt="" className={Styles.imgStyle} />
            <div style={{ paddingLeft: '10px' }}>
              <h3>32011***4663</h3>
              <p>Card number</p>
            </div>
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <h3>$88.397</h3>
            <p>Balance</p>
          </div>
        </div>
        <div className={Styles.dividerStyle} />
        {/* Master card */}
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
          <div className={Styles.textContainer}>
            <img src={image2} alt="" className={Styles.imgStyle} />
            <div style={{ paddingLeft: '10px' }}>
              <h3>32011***4663</h3>
              <p>Card number</p>
            </div>
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <h3>$88.397</h3>
            <p>Balance</p>
          </div>
        </div>
        <div className={Styles.dividerStyle} />
        {/* Visa card */}
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
          <div className={Styles.textContainer}>
            <img src={image1} alt="" className={Styles.imgStyle} />
            <div style={{ paddingLeft: '10px' }}>
              <h3>32011***4663</h3>
              <p>Card number</p>
            </div>
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <h3>$88.397</h3>
            <p>Balance</p>
          </div>
        </div>

        {/* Deposit account balance */}
        <div>
          <h1 className={Styles.headerStyle}>Deposits</h1>
          {/* Desposit*/}
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
            <div className={Styles.textContainer}>
              <img src={image1} alt="" className={Styles.imgStyle} />
              <div style={{ paddingLeft: '10px' }}>
                <h3>Cumulative desposit</h3>
                <p>Name</p>
              </div>
            </div>
            <div style={{ paddingLeft: '10px' }}>
              <h3>$88.397.000</h3>
              <p>Balance</p>
            </div>
          </div>
        </div>
        <div className={Styles.dividerStyle} />

        {/* E-Wallet account balance */}
        <div>
          <h1 className={Styles.headerStyle}>E-Wallets</h1>
          {/* E-wallet */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className={Styles.textContainer}>
              <img src={image5} alt="" className={Styles.imgStyle} />
              <div style={{ paddingLeft: '10px' }}>
                <h3>Payoneer</h3>
                <p>Name</p>
              </div>
            </div>
            <div style={{ paddingLeft: '10px' }}>
              <h3>$88.397</h3>
              <p>Amount</p>
            </div>
          </div>
        </div>
        <div className={Styles.dividerStyle} />

        {/* PayPal */}
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '5px' }}>
          <div className={Styles.textContainer}>
            <img src={image3} alt="" className={Styles.imgStyle} />
            <div style={{ paddingLeft: '10px' }}>
              <h3>Paypal</h3>
              <p>Name</p>
            </div>
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <h3>$88.397</h3>
            <p>Amount</p>
          </div>
        </div>
        <div className={Styles.dividerStyle} />

        {/* Google Wallet */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className={Styles.textContainer}>
            <img src={image4} alt="" className={Styles.imgStyle} />
            <div style={{ paddingLeft: '10px' }}>
              <h3>Google wallet</h3>
              <p>Name</p>
            </div>
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <h3>$88.397</h3>
            <p>Amount</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Add account form ( popUp)

function AddNewAccount() {
  return (
    <div>
      {/* Account name */}
      <div className={Styles.inputContainer}>
        <h3>Account name</h3>
        <InputField placeholder="Account name" value="John Doe" />
      </div>
      {/* Account type */}
      <div className={Styles.inputContainer}>
        <h3>Account type</h3>
        <Select style={{ width: '100%' }} placeholder="Select type">
          <Option value="Saving">Saving</Option>
          <Option value="Current">Current</Option>
        </Select>
      </div>
      {/* Select bank */}
      <div className={Styles.inputContainer}>
        <h3>Bank type</h3>
        <Select style={{ width: '100%' }} placeholder="Select bank">
          <Option value="ECOBANK">ECOBANK</Option>
          <Option value="UBA">UBA</Option>
        </Select>
      </div>

      {/* Account number */}
      <div className={Styles.inputContainer}>
        <h3>Account number</h3>
        <InputField placeholder="Account number" type="number" />
      </div>
      <Row>
        <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
          {/* Account number */}
          <div className={Styles.inputContainer}>
            <h3>Amount</h3>
            <InputField
              placeholder="Starting amount"
              type="number"
              style={{ paddingRight: '10px' }}
            />
          </div>
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
          {/* Currency */}
          <div className={Styles.inputContainerTwo} style={{ paddingBottom: 15 }}>
            <h3>Currency</h3>
            <Select defaultValue="CFA" style={{ width: '100%' }}>
              <Option value="CFA">CFA</Option>
              <Option value="USD">USD</Option>
              <Option value="EUR">EUR</Option>
            </Select>
          </div>
        </Col>
      </Row>
    </div>
  );
}

function ExtraContent() {
  return <div>{/* Account name */}</div>;
}
