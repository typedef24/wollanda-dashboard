import { Alert, Checkbox, Row, Col } from 'antd';
import React, { useState } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Link, connect } from 'umi';
import styles from './style.less';
import LoginFrom from './components/Login';
import logo from '../../../../public/logo.jpeg';
import loginPageImage from '../../../../public/loginPageImage.jpeg';
const { UserName, Password, Submit } = LoginFrom;

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = (props) => {
  const { userAndpasswordreset = {}, submitting } = props;
  const { status, type: loginType } = userAndpasswordreset;
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState('account');

  const handleSubmit = (values) => {
    const { dispatch } = props;
    alert("Sumitting: " + JSON.stringify(values));
    // dispatch({
    //   type: 'userAndpasswordreset/login',
    //   payload: { ...values, type },
    // });
  };

  return (
    <div className={styles.main}>
      <GridContent>
        <React.Fragment>
          <Row>
            <Col
              xs={{ span: 24 }}
              md={{ span: 5, offset: 6 }}
              style={{
                marginBottom: 30,
              }}
            >
              <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
                <img src={logo} style={{ width: '100px' }} />
                <br />
                <br />
                <div className={styles.other}>
                  <h1 className={styles.siteColor}>Recover password</h1>
                  <p>
                    Enter the email address associated with your account so we can help you recover
                    your password.
                  </p>
                </div>
                {status === 'error' && loginType === 'account' && !submitting && (
                  <LoginMessage content='No account with email "youremail@host.com" on our system!' />
                )}

                <UserName
                  name="email"
                  placeholder="Enter your email"
                  rules={[
                    {
                      required: true,
                      message: 'Email is required!',
                    },
                    {
                      type: 'email',
                      message: "The email address is in the wrong format!",
                    },
                  ]}
                />
                <Submit loading={submitting}>SEND PASSWORD RECOVERY LINK</Submit>
                <br />
                <br />
                <div className={styles.other}>
                  Don't have an account?{' '}
                  <Link className={styles.siteColor} to="/user/register">
                    Sign up here
                  </Link>
                </div>
              </LoginFrom>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 9, offset: 2 }}>
              <img
                src={loginPageImage}
                style={{ width: '100%', height: 'auto', minHeight: '75vh' }}
              />
            </Col>
          </Row>
        </React.Fragment>
      </GridContent>
    </div>
  );
};

export default connect(({ userAndpasswordreset, loading }) => ({
  userAndpasswordreset,
  submitting: loading.effects['userAndpasswordreset/login'],
}))(Login);
