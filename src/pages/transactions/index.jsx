import React, { Component } from 'react';

import styles from './style.less';
import { GridContent } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';
import TransactionSearch from './components/transaction-search';
import DateTransaction from './components/date-transaction';

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
            <TransactionSearch />
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
            <DateTransaction />
          </Col>
        </Row>
      </React.Fragment>
    </GridContent>
  );
}

export default Transactions;
