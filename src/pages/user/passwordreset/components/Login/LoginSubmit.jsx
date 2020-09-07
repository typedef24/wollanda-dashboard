import { Button, Form } from 'antd';
import React from 'react';
import classNames from 'classnames';
import styles from './index.less';
const FormItem = Form.Item;

const LoginSubmit = ({ className, ...rest }) => {
  const clsString = classNames(styles.submit, className);
  return (
    <FormItem>
      <Button
        size="large"
        className={clsString}
        style={{ backgroundColor: '#ffab2b', border: '0px' }}
        type="primary"
        htmlType="submit"
        {...rest}
      />
    </FormItem>
  );
};

export default LoginSubmit;
