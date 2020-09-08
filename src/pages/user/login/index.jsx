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
  const { userAndlogin = {}, submitting } = props;
  const { status, type: loginType } = userAndlogin;
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState('account');

  const handleSubmit = (values) => {
    values.autoLogin = autoLogin;
    const { dispatch } = props;
    alert("Sumitting: " + JSON.stringify(values));
    // dispatch({
    //   type: 'userAndlogin/login',
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
                  <h1 className={styles.siteColor}>Sign in</h1>
                  <p>
                    Please sign in to your personal account if you want to use all our premium
                    products.
                  </p>
                </div>
                {status === 'error' && loginType === 'account' && !submitting && (
                  <LoginMessage content="Incorrect account or password" />
                )}

                <p>Your email</p>
                <UserName
                  name="userName"
                  placeholder="Enter your email"
                  rules={[
                    {
                      required: true,
                      message: 'Email required!',
                    },
                    {
                      type: 'email',
                      message: "The email address is in the wrong format!",
                    },
                  ]}
                  // onChange={(text) => setEmail(text)}
                />
                <p>Password</p>
                <Password
                  name="password"
                  placeholder="Enter your password"
                  rules={[
                    {
                      required: true,
                      message: 'Password required!',
                    },
                  ]}
                  // onChange={(pass) => setPassword(pass)}
                />
                <div className={styles.other}>
                  <Checkbox checked={autoLogin} onChange={(e) => setAutoLogin(e.target.checked)}>
                    Remember me
                  </Checkbox>
                  <Link className={styles.register} to="/user/passwordreset">
                    Forgot your password?
                  </Link>
                </div>
                <Submit loading={submitting}>SIGN IN</Submit>
                {/* <Link to="/user/create-account">SIGN IN</Link> */}
                <br />
                <br />
                <div className={styles.other}>
                  Don't have an account?
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

export default connect(({ userAndlogin, loading }) => ({
  userAndlogin,
  submitting: loading.effects['userAndlogin/login'],
}))(Login);
