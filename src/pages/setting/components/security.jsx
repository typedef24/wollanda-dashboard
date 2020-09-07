import React from 'react';

// imports
import { Row, Col, Input, Select, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Option } from 'antd/lib/mentions';

import InputField from './input-field';

import Styles from '../style.less';

function Security() {
  // Handle submit button
  function handleSubmit() {
    return alert('This button handles submitted data');
  }
  return (
    <>
      <h2>Security</h2>
      <Row>
        <Col xl={15} lg={24} md={24} sm={24} xs={24}>
          <div>
            <h4>Change password</h4>
            <div className={Styles.dividerStyle} />
            {/* Password Form */}
            <Row>
              <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
                {/* Current password */}
                <div className={Styles.inputContainer}>
                  <h4>Current password</h4>
                  <Input.Password
                    placeholder="Enter your password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </div>
              </Col>
              <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
                {/* New password */}
                <div className={Styles.inputContainer}>
                  <h4>New password</h4>
                  <Input.Password
                    placeholder="Enter new password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <br />
          {/* Questions section */}
          <div>
            <h4>Security questions</h4>
            <div className={Styles.dividerStyle} />
            {/* Question Form */}
            <Row>
              <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
                {/* Question #1 */}
                <div className={Styles.inputContainer}>
                  <h4>Question #1</h4>
                  <Select defaultValue="Whar's your friend's name?" style={{ width: '100%' }}>
                    <Option value="Whar's your friend's name">Whar's your friend's name</Option>
                    <Option value="Favourite meal">Favourite meal</Option>
                    <Option value="Best football team">Best football team</Option>
                  </Select>
                </div>
                {/* Question #2 */}
                <div className={Styles.inputContainer}>
                  <h4>Question #2</h4>
                  <Select defaultValue="Whar's your friend's name?" style={{ width: '100%' }}>
                    <Option value="Whar's your friend's name">Whar's your friend's name</Option>
                    <Option value="Favourite meal">Favourite meal</Option>
                    <Option value="Best football team">Best football team</Option>
                  </Select>
                </div>
              </Col>
              <br />
              <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
                {/* Answer #1 */}
                <div className={Styles.inputContainer}>
                  <h4>Answer</h4>
                  <InputField placeholder="Enter answer" />
                </div>

                {/* Answer #2 */}
                <div className={Styles.inputContainer}>
                  <h4>Answer</h4>
                  <InputField placeholder="Enter answer" />
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
        <Col xl={9} lg={24} md={24} sm={24} xs={24}>
          <></>
        </Col>
      </Row>
    </>
  );
}

export default Security;
