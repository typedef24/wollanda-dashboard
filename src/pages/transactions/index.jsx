import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';
import Account from './components/account';

function Transactions() {
  return (
    <GridContent>
      <React.Fragment>
        <Row gutter={24}>
          <Col
            xl={15}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <Account />
          </Col>
          <Col
            xl={9}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <h1>Hello</h1>
          </Col>
        </Row>
      </React.Fragment>
    </GridContent>
  );
}

export default Transactions;
