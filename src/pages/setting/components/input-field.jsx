import React from 'react';
import { Input } from 'antd';

import Styles from '../style.less';

function InputField(props) {
  return (
    <div>
      <Input {...props} style={Styles.inputStyle} />
    </div>
  );
}

export default InputField;
