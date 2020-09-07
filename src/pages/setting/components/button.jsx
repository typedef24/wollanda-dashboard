import React from 'react';

import { Button } from 'antd';

function ButtonComponent(props) {
  return (
    <div>
      <Button
        size="large"
        style={{
          backgroundColor: '#feae33',
          color: '#FFF',
          border: 'none',
          marginTop: 10,
        }}
      >
        {props.lable}
      </Button>
    </div>
  );
}

export default ButtonComponent;
