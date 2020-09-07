import { Form, Steps, Col, Input, Popover, Progress, Row, Select, message, Button } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Link, connect, history, FormattedMessage, formatMessage } from 'umi';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import styles from './style.less';
import logo from '../../../../public/logo.jpeg';
import RegistrationDoneImage from '../../../../public/RegistrationDone.png';
import LoginFrom from '../login/components/Login';
const { Submit } = LoginFrom;
const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;
const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      <FormattedMessage id="userAndcreateaccount.strength.strong" />
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      <FormattedMessage id="userAndcreateaccount.strength.medium" />
    </div>
  ),
  poor: (
    <div className={styles.error}>
      <FormattedMessage id="userAndcreateaccount.strength.short" />
    </div>
  ),
};
const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};

const Register = ({ submitting, dispatch, userAndcreateaccount }) => {
  const [count, setcount] = useState(0);
  const [visible, setvisible] = useState(false);
  const [prefix, setprefix] = useState('86');
  const [popover, setpopover] = useState(false);
  const [autoLogin, setAutoLogin] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [plan, setPlan] = useState('Small Business');
  const [primaryAccount, setPrimaryAccount] = useState('Visa');
  const [phoneNumber, setPhoneNumber] = useState();
  const { Step } = Steps;
  const confirmDirty = false;
  let interval;
  const [form] = Form.useForm();
  useEffect(() => {
    if (!userAndcreateaccount) {
      return;
    }

    const account = form.getFieldValue('mail');

    if (userAndcreateaccount.status === 'ok') {
      message.success('注册成功！');
      history.push({
        pathname: '/user/register-result',
        state: {
          account,
        },
      });
    }
  }, [userAndcreateaccount]);
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
    dispatch({
      type: 'userAndcreateaccount/submit',
      payload: { ...values, prefix },
    });
  };

  const checkConfirm = (_, value) => {
    const promise = Promise;

    if (value && value !== form.getFieldValue('password')) {
      return promise.reject(
        formatMessage({
          id: 'userAndcreateaccount.password.twice',
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
          id: 'userAndcreateaccount.password.required',
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

  const handleChange = (selectedOption) => {
    setPrimaryAccount(selectedOption);
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
            <Col xs={{ span: 24 }} md={{ span: 12, offset: 6 }}>
              <p style={{ textAlign: 'center' }}>
                <img src={logo} style={{ width: '100px' }} />
              </p>
              <br />
              <div className={styles.formContainer}>
                <Form form={form} name="UserRegister" onFinish={onFinish}>
                  {currentStep == 0 && (
                    <div>
                      <div className={styles.other} style={{ textAlign: 'center' }}>
                        <h1 className={styles.siteColor}>Register new account</h1>
                        <p>Please create your account to get started.</p>
                      </div>

                      <p>Your account number</p>
                      <FormItem
                        name="accountNumber"
                        rules={[
                          {
                            required: true,
                            message: formatMessage({
                              id: 'userAndcreateaccount.accountNumber.required',
                            }),
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder={formatMessage({
                            id: 'userAndcreateaccount.accountNumber.placeholder',
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
                              id: 'userAndcreateaccount.email.required',
                            }),
                          },
                          {
                            type: 'email',
                            message: formatMessage({
                              id: 'userAndcreateaccount.email.wrong-format',
                            }),
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder={formatMessage({
                            id: 'userAndcreateaccount.email.placeholder',
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
                                <FormattedMessage id="userAndcreateaccount.strength.msg" />
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
                              id: 'userAndcreateaccount.password.placeholder',
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
                              id: 'userAndcreateaccount.confirm-password.required',
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
                            id: 'userAndcreateaccount.confirm-password.placeholder',
                          })}
                        />
                      </FormItem>
                    </div>
                  )}
                  {currentStep == 1 && (
                    <div>
                      <div className={styles.other} style={{ textAlign: 'center' }}>
                        <h1 className={styles.siteColor}>Personal details</h1>
                        <p>Please create your account to get started.</p>
                      </div>
                      <p>Address line</p>
                      <FormItem
                        name="addressline"
                        rules={[
                          {
                            required: true,
                            message: formatMessage({
                              id: 'userAndcreateaccount.addressline.required',
                            }),
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder={formatMessage({
                            id: 'userAndcreateaccount.addressline.placeholder',
                          })}
                        />
                      </FormItem>
                      <Row>
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 11 }}>
                          <p>City</p>
                          <FormItem
                            name="city"
                            rules={[
                              {
                                required: true,
                                message: formatMessage({
                                  id: 'userAndcreateaccount.city.required',
                                }),
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              placeholder={formatMessage({
                                id: 'userAndcreateaccount.city.placeholder',
                              })}
                            />
                          </FormItem>
                        </Col>
                        <Col
                          xs={{ span: 24 }}
                          sm={{ span: 11, offset: 1 }}
                          md={{ span: 11, offset: 2 }}
                        >
                          <p>Zip code</p>
                          <FormItem
                            name="zipcode"
                            rules={[
                              {
                                required: true,
                                message: formatMessage({
                                  id: 'userAndcreateaccount.zipcode.required',
                                }),
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              placeholder={formatMessage({
                                id: 'userAndcreateaccount.zipcode.placeholder',
                              })}
                            />
                          </FormItem>
                        </Col>
                      </Row>
                      <p>State</p>
                      <FormItem
                        name="state"
                        rules={[
                          {
                            required: true,
                            message: formatMessage({
                              id: 'userAndcreateaccount.state.required',
                            }),
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder={formatMessage({
                            id: 'userAndcreateaccount.state.placeholder',
                          })}
                        />
                      </FormItem>
                    </div>
                  )}
                  {currentStep == 2 && (
                    <div>
                      <p>Select your plan</p>
                      <Row>
                        <Col
                          xs={{ span: 24 }}
                          sm={{ span: 7 }}
                          style={{
                            marginBottom: 15,
                          }}
                        >
                          <Button
                            onClick={() => setPlan('Individual')}
                            style={
                              plan == 'Individual'
                                ? { backgroundColor: '#ffab2b', border: '0px' }
                                : { }
                            }
                            type={plan == 'Individual' ? 'primary' : 'default'}
                            size="large"
                            block
                          >
                            Individual
                          </Button>
                        </Col>
                        <Col
                          xs={{ span: 24 }}
                          sm={{ span: 8, offset: 1 }}
                          style={{
                            marginBottom: 15,
                          }}
                        >
                          <Button
                            onClick={() => setPlan('Small Business')}
                            style={
                              plan == 'Small Business'
                                ? { backgroundColor: '#ffab2b', border: '0px' }
                                : { }
                            }
                            type={plan == 'Small Business' ? 'primary' : 'default'}
                            size="large"
                            block
                          >
                            Small Business
                          </Button>
                        </Col>
                        <Col
                          xs={{ span: 24 }}
                          sm={{ span: 7, offset: 1 }}
                          style={{
                            marginBottom: 15,
                          }}
                        >
                          <Button
                            onClick={() => setPlan('Corporate')}
                            style={
                              plan == 'Corporate'
                                ? { backgroundColor: '#ffab2b', border: '0px' }
                                : { }
                            }
                            type={plan == 'Corporate' ? 'primary' : 'default'}
                            size="large"
                            block
                          >
                            Corporate
                          </Button>
                        </Col>
                      </Row>
                      <p>Select primary account</p>
                      <Select
                        style={{ width: '100%' }}
                        placeholder="Select primary account"
                        defaultValue={[primaryAccount]}
                        onChange={handleChange}
                        optionLabelProp="Select primary account"
                      >
                        <Option value="Visa" label="Visa">
                          <div className="demo-option-label-item">
                            <span role="img" aria-label="Visa">
                              🇨🇳
                            </span>
                            Visa
                          </div>
                        </Option>
                        <Option value="Mastercard" label="Mastercard">
                          <div className="demo-option-label-item">
                            <span role="img" aria-label="Mastercard">
                              <img src={logo} style={{ width: '100px' }} />
                            </span>
                            Mastercard
                          </div>
                        </Option>
                      </Select>
                      <br />
                      <br />
                      <p>
                        {formatMessage({
                          id: 'userandregister.phoneNumber.placeholder',
                        })}
                      </p>
                      <FormItem
                        name="phoneNumber"
                        rules={[
                          {
                            required: true,
                            message: formatMessage({
                              id: 'userandregister.phoneNumber.required',
                            }),
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder={formatMessage({
                            id: 'userandregister.phoneNumber.placeholder',
                          })}
                        />
                      </FormItem>
                    </div>
                  )}
                  {currentStep == 3 && (
                    <div>
                      <div className={styles.other} style={{ textAlign: 'center' }}>
                        <img src={RegistrationDoneImage} style={{ width: '50%' }} />
                        <h1 className={styles.siteColor}>Registration Complete</h1>
                        <p>Please create your account to get started.</p>
                        <br />
                        <Button
                          onClick={() => alert('Going to dashboard')}
                          type="link"
                          style={{ color: '#ffab2b' }}
                        >
                          GO TO DASHBOARD
                        </Button>
                      </div>
                    </div>
                  )}
                  <FormItem>
                    {currentStep != 3 && (
                      <div>
                        {currentStep == 0 ? (
                          <Button disabled type="link" style={{ float: 'left' }}>
                            <ArrowLeftOutlined /> Back
                          </Button>
                        ) : (
                          <Button
                            type="link"
                            style={{ color: 'black', float: 'left' }}
                            onClick={() => setCurrentStep(currentStep - 1)}
                          >
                            <ArrowLeftOutlined /> Back
                          </Button>
                        )}
                        {currentStep == 2 ? (
                          // <Submit
                          //   type="link"
                          //   loading={submitting}
                          //   style={{ color: '#ffab2b', float: 'right' }}
                          // >
                          //   FINISH
                          // </Submit>
                          <Button
                            type="link"
                            style={{ color: '#ffab2b', float: 'right' }}
                            onClick={() => setCurrentStep(currentStep + 1)}
                          >
                            FINISH
                          </Button>
                        ) : (
                          <Button
                            type="link"
                            style={{ color: '#ffab2b', float: 'right' }}
                            onClick={() => setCurrentStep(currentStep + 1)}
                          >
                            PROCEED FURTHER <ArrowRightOutlined />
                          </Button>
                        )}
                      </div>
                    )}
                  </FormItem>
                </Form>
                <Steps current={currentStep}>
                  <Step />
                  <Step />
                  <Step />
                  <Step />
                </Steps>
              </div>
            </Col>
          </Row>
        </React.Fragment>
      </GridContent>
    </div>
  );
};

export default connect(({ userAndcreateaccount, loading }) => ({
  userAndcreateaccount,
  submitting: loading.effects['userAndcreateaccount/submit'],
}))(Register);
