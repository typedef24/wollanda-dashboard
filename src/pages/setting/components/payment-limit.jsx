import React from 'react';

// imports
import { Row, Col, Select, Button, Progress } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Option } from 'antd/lib/mentions';

import Styles from '../style.less';

export default function PaymentLimit() {
  // Handle submit button
  function handleSubmit() {
    return alert('This button handles submitted data');
  }

  return (
    <>
      <h2>Payment limits</h2>
      <Row>
        <Col xl={15} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
          <div>
            <h4 className={Styles.transactionStyle}>Cash withdrawals</h4>
            <div className={Styles.dividerStyle} />
            {/* Current limit secction for cash withdrawals*/}
            <Row>
              <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
                <div className={Styles.inputContainer}>
                  <h4>Currrent limit</h4>
                  <Select defaultValue="15.0000" style={{ width: '100%' }}>
                    <Option value="15.000">15.0000 FCFA</Option>
                    <Option value="20.000">20.000 FCFA</Option>
                    <Option value="30.000">30.000 FCFA</Option>
                  </Select>
                </div>
              </Col>
              <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
                {/* Current spending for cash withdrawal */}
                <div className={Styles.inputContainer}>
                  <div className={Styles.spendingStyle}>
                    <h4>Spendings</h4>
                    <h4 style={{ fontWeight: 'bold', color: '#5B5C64' }}>15.000 FCFA</h4>
                  </div>
                  <div className={Styles.progressContainer}>
                    <Progress percent={80} status="active" showInfo={false} strokeColor="#FFAB2B" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <br />
          {/* Current limit for bank transactions */}
          <div>
            <h4 className={Styles.transactionStyle}>Bank transactions</h4>
            <div className={Styles.dividerStyle} />
            {/* Current limit secction for cash withdrawals*/}
            <Row>
              <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
                <div className={Styles.inputContainer}>
                  <h4>Currrent limit</h4>
                  <Select defaultValue="15.0000" style={{ width: '100%' }}>
                    <Option value="15.000">15.0000 FCFA</Option>
                    <Option value="20.000">20.000 FCFA</Option>
                    <Option value="30.000">30.000 FCFA</Option>
                  </Select>
                </div>
              </Col>
              <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
                {/* Current spending for cash withdrawal */}
                <div className={Styles.inputContainer}>
                  <div className={Styles.spendingStyle}>
                    <h4>Spendings</h4>
                    <h4 style={{ fontWeight: 'bold', color: '#5B5C64' }}>15.000 FCFA</h4>
                  </div>
                  <div className={Styles.progressContainer}>
                    <Progress percent={80} status="active" showInfo={false} strokeColor="#FFAB2B" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <br />
          {/* Online payments transactions  */}
          <div>
            <h4 className={Styles.transactionStyle}>Online payments</h4>
            <div className={Styles.dividerStyle} />
            {/* Current limit secction for cash withdrawals*/}
            <Row>
              <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
                <div className={Styles.inputContainer}>
                  <h4>Currrent limit</h4>
                  <Select defaultValue="15.0000" style={{ width: '100%' }}>
                    <Option value="15.000">15.0000 FCFA</Option>
                    <Option value="20.000">20.000 FCFA</Option>
                    <Option value="30.000">30.000 FCFA</Option>
                  </Select>
                </div>
              </Col>
              <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
                {/* Current spending for cash withdrawal */}
                <div className={Styles.inputContainer}>
                  <div className={Styles.spendingStyle}>
                    <h4>Spendings</h4>
                    <h4 style={{ fontWeight: 'bold', color: '#5B5C64' }}>15.000 FCFA</h4>
                  </div>
                  <div className={Styles.progressContainer}>
                    <Progress percent={40} status="active" showInfo={false} strokeColor="#FFAB2B" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* Button */}
          <div className={Styles.btnContainer}>
            <Button
              icon={<CheckOutlined />}
              size="large"
              style={{
                backgroundColor: '#ffba51',
                color: '#FFF',
                border: 'none',
                marginRight: 5,
              }}
              onClick={() => handleSubmit()}
            >
              UPDATE SETTINGS
            </Button>
            <Button
              icon={<CloseOutlined />}
              size="large"
              style={{
                backgroundColor: '#F2F4F6',
                color: '#778CA2',
                border: 'none',
              }}
            >
              CANCEL
            </Button>
          </div>
        </Col>
        <Col xl={9} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}></Col>
      </Row>
    </>
  );
}
