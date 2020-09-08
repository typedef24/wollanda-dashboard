import { Form, Checkbox, Col, Input, Popover, Progress, Row, Select, message } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link, connect, history, FormattedMessage, formatMessage } from 'umi';
import { GridContent } from '@ant-design/pro-layout';
import styles from './style.less';
import logo from '../../../../public/logo.jpeg';
import loginPageImage from '../../../../public/loginPageImage.jpeg';
import LoginFrom from '../login/components/Login';
const { Submit } = LoginFrom;
const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;
const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      <FormattedMessage id="userandregister.strength.strong" />
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      <FormattedMessage id="userandregister.strength.medium" />
    </div>
  ),
  poor: (
    <div className={styles.error}>
      <FormattedMessage id="userandregister.strength.short" />
    </div>
  ),
};
const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};

const Register = ({ submitting, dispatch, userAndregister }) => {
  const [count, setcount] = useState(0);
  const [visible, setvisible] = useState(false);
  const [prefix, setprefix] = useState('86');
  const [popover, setpopover] = useState(false);
  const [autoLogin, setAutoLogin] = useState(true);
  const confirmDirty = false;
  let interval;
  const [form] = Form.useForm();
  useEffect(() => {
    if (!userAndregister) {
      return;
    }

    const account = form.getFieldValue('mail');

    if (userAndregister.status === 'ok') {
      message.success('注册成功！');
      history.push({
        pathname: '/user/register-result',
        state: {
          account,
        },
      });
    }
  }, [userAndregister]);
  useEffect(
    () => () => {
      clearInterval(interval);
    },
    [],
  );

  const onGetCaptcha = () => {
    let counts = 59;
    setcount(counts);
    interval = window.setInterval(() => {
      counts -= 1;
      setcount(counts);

      if (counts === 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  const getPasswordStatus = () => {
    const value = form.getFieldValue('password');

    if (value && value.length > 9) {
      return 'ok';
    }

    if (value && value.length > 5) {
      return 'pass';
    }

    return 'poor';
  };

  const onFinish = (values) => {
    //Ensure user checked on the terms and conditions of service
    if (autoLogin) {
      alert('Sumitting: ' + JSON.stringify(values));
      // dispatch({
      //   type: 'userAndregister/submit',
      //   payload: { ...values, prefix },
      // });
    } else {
      alert("You must accept our terms and conditions of service to continue!");
    }
  };

  const checkConfirm = (_, value) => {
    const promise = Promise;

    if (value && value !== form.getFieldValue('password')) {
      return promise.reject(
        formatMessage({
          id: 'userandregister.password.twice',
        }),
      );
    }

    return promise.resolve();
  };

  const checkPassword = (_, value) => {
    const promise = Promise; // 没有值的情况

    if (!value) {
      setvisible(!!value);
      return promise.reject(
        formatMessage({
          id: 'userandregister.password.required',
        }),
      );
    } // 有值的情况

    if (!visible) {
      setvisible(!!value);
    }

    setpopover(!popover);

    if (value.length < 6) {
      return promise.reject('');
    }

    if (value && confirmDirty) {
      form.validateFields(['confirm']);
    }

    return promise.resolve();
  };

  const changePrefix = (value) => {
    setprefix(value);
  };

  const renderPasswordProgress = () => {
    const value = form.getFieldValue('password');
    const passwordStatus = getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
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
              <img src={logo} style={{ width: '100px' }} />
              <br />
              <br />
              <div className={styles.other}>
                <h1 className={styles.siteColor}>Create account</h1>
                <p>
                  Please sign up to your personal account if you want to use all our premium
                  products.
                </p>
              </div>

              {/* <h3>
            <FormattedMessage id="userandregister.register.register" />
          </h3> */}
              <Form form={form} name="UserRegister" onFinish={onFinish}>
                <p>Full name</p>
                <FormItem
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: formatMessage({
                        id: 'userandregister.name.required',
                      }),
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder={formatMessage({
                      id: 'userandregister.name.placeholder',
                    })}
                  />
                </FormItem>
                <p>Your email</p>
                <FormItem
                  name="mail"
                  rules={[
                    {
                      required: true,
                      message: formatMessage({
                        id: 'userandregister.email.required',
                      }),
                    },
                    {
                      type: 'email',
                      message: formatMessage({
                        id: 'userandregister.email.wrong-format',
                      }),
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder={formatMessage({
                      id: 'userandregister.email.placeholder',
                    })}
                  />
                </FormItem>
                <Popover
                  getPopupContainer={(node) => {
                    if (node && node.parentNode) {
                      return node.parentNode;
                    }

                    return node;
                  }}
                  content={
                    visible && (
                      <div
                        style={{
                          padding: '4px 0',
                        }}
                      >
                        {passwordStatusMap[getPasswordStatus()]}
                        {renderPasswordProgress()}
                        <div
                          style={{
                            marginTop: 10,
                          }}
                        >
                          <FormattedMessage id="userandregister.strength.msg" />
                        </div>
                      </div>
                    )
                  }
                  overlayStyle={{
                    width: 240,
                  }}
                  placement="right"
                  visible={visible}
                >
                  <p>Password</p>
                  <FormItem
                    name="password"
                    className={
                      form.getFieldValue('password') &&
                      form.getFieldValue('password').length > 0 &&
                      styles.password
                    }
                    rules={[
                      {
                        validator: checkPassword,
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      type="password"
                      placeholder={formatMessage({
                        id: 'userandregister.password.placeholder',
                      })}
                    />
                  </FormItem>
                </Popover>
                <p>Confirm your password</p>
                <FormItem
                  name="confirm"
                  rules={[
                    {
                      required: true,
                      message: formatMessage({
                        id: 'userandregister.confirm-password.required',
                      }),
                    },
                    {
                      validator: checkConfirm,
                    },
                  ]}
                >
                  <Input
                    size="large"
                    type="password"
                    placeholder={formatMessage({
                      id: 'userandregister.confirm-password.placeholder',
                    })}
                  />
                </FormItem>
                <FormItem>
                  <Checkbox checked={autoLogin} onChange={(e) => setAutoLogin(e.target.checked)}>
                    I agree with terms and conditions of service
                  </Checkbox>
                </FormItem>
                <FormItem>
                  <Submit loading={submitting}>
                    <FormattedMessage id="userandregister.register.register" />
                  </Submit>
                </FormItem>
                <br />
                <FormItem>
                  Already have an account?{' '}
                  <Link className={styles.siteColor} to="/user/login">
                    Sign in here
                  </Link>
                </FormItem>
              </Form>
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

export default connect(({ userAndregister, loading }) => ({
  userAndregister,
  submitting: loading.effects['userAndregister/submit'],
}))(Register);
