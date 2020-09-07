import React from 'react';
import { Row, Col, Switch, Button } from 'antd';

import Styles from '../style.less';

export default function Notifications() {
  // switch value
  function onChange(checked) {
    console.log(`Switch to ${checked}`);
  }

  // Handle submit button
  function handleSubmit() {
    return alert('This button handles submitted data');
  }

  return (
    <>
      <h2>Notifications</h2>
      <Row>
        <Col xl={15} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
          <div>
            <Row>
              <Col xl={24} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
                {/* product updates */}
                <div className={Styles.headerContainer}>
                  <div>
                    <h4 className={Styles.textStyle}>Product updates</h4>
                    <p className={Styles.transactionStyle}>
                      Stair lifts feel The Freedom Of Your Home
                    </p>
                  </div>
                  <Switch defaultChecked onChange={onChange} style={{ color: '#FFAB2B' }} />
                </div>
                <div className={Styles.dividerStyle} />
                <br />
                {/* Offers updates */}
                <div className={Styles.headerContainer}>
                  <div>
                    <h4 className={Styles.textStyle}>Offers updates</h4>
                    <p className={Styles.transactionStyle}>
                      A Right Media Mix Can Make The Difference
                    </p>
                  </div>
                  <Switch onChange={onChange} style={{ color: '#FFAB2B' }} />
                </div>
                <div className={Styles.dividerStyle} />
                <br />
                {/* Comments togle  */}
                <div className={Styles.headerContainer}>
                  <div>
                    <h4 className={Styles.textStyle}>Comments</h4>
                    <p className={Styles.transactionStyle}>
                      Advertising Relationships Vs Business Decisions
                    </p>
                  </div>
                  <Switch defaultChecked onChange={onChange} style={{ color: '#FFAB2B' }} />
                </div>
                <div className={Styles.dividerStyle} />
                <br />
                {/* Notifications */}
                <div className={Styles.headerContainer}>
                  <div>
                    <h4 className={Styles.textStyle}>Notifications</h4>
                    <p className={Styles.transactionStyle}>
                      Creating Remarkable Poster Prints Through 4 Color Poster Printing{' '}
                    </p>
                  </div>
                  <Switch defaultChecked onChange={onChange} style={{ color: '#FFAB2B' }} />
                </div>
              </Col>
            </Row>
          </div>

          {/* Button */}
          <div className={Styles.btnContainer}>
            <Button
              size="large"
              style={{
                backgroundColor: '#feae33',
                color: '#FFF',
                border: 'none',
                marginRight: 5,
              }}
              onClick={() => handleSubmit()}
            >
              UPDATE SETTINGS
            </Button>
            <Button
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
        <Col xl={9} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }} />
      </Row>
    </>
  );
}
