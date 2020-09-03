import React, { Component } from 'react';
import TransactionPreview from './components/transatcion-preview';

import styles from './style.less';
import AccountPreview from './components/account-preview';
import SpendingPreview from './components/spendings-preview';
import { GridContent } from '@ant-design/pro-layout';
import { Row, Col, Card } from 'antd';
import AvailiableBalance from './components/availiable-balance';

function Dashboard() {
  return (
    <GridContent>
      <React.Fragment>
        <Row gutter={24}>
          {/* Transaction section */}
          <Col
            xl={12}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <TransactionPreview />
          </Col>
          <Col
            xl={12}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            {/* Account and spendings */}
            <Row gutter={12}>
              <Col
                xl={12}
                lg={24}
                md={24}
                sm={24}
                xs={24}
                style={{
                  marginBottom: 24,
                }}
              >
                <AccountPreview />
              </Col>
              <Col
                xl={12}
                lg={24}
                md={24}
                sm={24}
                xs={24}
                style={{
                  marginBottom: 24,
                }}
              >
                <SpendingPreview />
              </Col>
            </Row>
            {/* Availiable Balance */}
            <Col
              xl={24}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              // style={{
              //   marginBottom: 24,
              // }}
            >
              <AvailiableBalance />
            </Col>
          </Col>
        </Row>
      </React.Fragment>
    </GridContent>
  );
}

export default Dashboard;
