<<<<<<< HEAD
import React, { Component } from 'react';
import TransactionPreview from './components/transatcion-preview';

import styles from './style.less';
import AccountPreview from './components/account-preview';
import SpendingPreview from './components/spendings-preview';
import { GridContent } from '@ant-design/pro-layout';
import { Row, Col, Card } from 'antd';
import AvailiableBalance from './components/availiable-balance';
import NoTransactionPreview from './components/no-transaction-preview';

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
        {/* <NoTransactionPreview /> */}
      </React.Fragment>
    </GridContent>
  );
}

export default Dashboard;
=======
import React, { Component } from 'react';
import TransactionPreview from './components/transatcion-preview';

import styles from './style.less';
import AccountPreview from './components/account-preview';
import SpendingPreview from './components/spendings-preview';
import { GridContent } from '@ant-design/pro-layout';
import { Row, Col, Card } from 'antd';
import AvailiableBalance from './components/availiable-balance';
import NoTransactionPreview from './components/no-transaction-preview';

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
        {/* <NoTransactionPreview /> */}
      </React.Fragment>
    </GridContent>
  );
}

export default Dashboard;
>>>>>>> 581cc9a68afcf446e19171458be2654e50515279
