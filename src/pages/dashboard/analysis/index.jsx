import { EllipsisOutlined, DownloadOutlined } from '@ant-design/icons';
import { Col, Dropdown, Menu, Row, Progress } from 'antd';
import React, { Component, Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Pie } from 'ant-design-pro/lib/Charts';
import { connect } from 'umi';
import PageLoading from './components/PageLoading';
import { getTimeDistance } from './utils/utils';
import styles from './style.less';
const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));
const SalesCard = React.lazy(() => import('./components/SalesCard'));
const TopSearch = React.lazy(() => import('./components/TopSearch'));
const ProportionSales = React.lazy(() => import('./components/ProportionSales'));
const OfflineData = React.lazy(() => import('./components/OfflineData'));

// custome images
import transactionsImg from '../analysis/image/female.png';

// payment images
import visaCardImg from '../analysis/image/visa-card.png';

class Analysis extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
  };
  reqRef = 0;
  timeoutId = 0;

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'dashboardAndanalysis/fetch',
      });
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dashboardAndanalysis/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  handleChangeSalesType = (e) => {
    this.setState({
      salesType: e.target.value,
    });
  };
  handleTabChange = (key) => {
    this.setState({
      currentTabKey: key,
    });
  };
  handleRangePickerChange = (rangePickerValue) => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue,
    });
    dispatch({
      type: 'dashboardAndanalysis/fetchSalesData',
    });
  };
  selectDate = (type) => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });
    dispatch({
      type: 'dashboardAndanalysis/fetchSalesData',
    });
  };
  isActive = (type) => {
    const { rangePickerValue } = this.state;

    if (!rangePickerValue) {
      return '';
    }

    const value = getTimeDistance(type);

    if (!value) {
      return '';
    }

    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }

    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return styles.currentDate;
    }

    return '';
  };

  render() {
    const { rangePickerValue, salesType, currentTabKey } = this.state;
    const { dashboardAndanalysis, loading } = this.props;
    const {
      visitData,
      visitData2,
      salesData,
      searchData,
      offlineData,
      offlineChartData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
    } = dashboardAndanalysis;
    let salesPieData;

    if (salesType === 'all') {
      salesPieData = salesTypeData;
    } else {
      salesPieData = salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline;
    }

    const menu = (
      <Menu>
        <Menu.Item>操作一</Menu.Item>
        <Menu.Item>DesB</Menu.Item>
      </Menu>
    );
    const dropdownGroup = (
      <span className={styles.iconGroup}>
        <Dropdown overlay={menu} placement="bottomRight">
          <EllipsisOutlined />
        </Dropdown>
      </span>
    );
    const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);
    return (
      <GridContent>
        {/* Custom design */}
        <div>
          <Row>
            <Col className={styles.sectionOne} span={12}>
              <Row style={{ padding: '20px' }}>
                <Col span={12}>Latest Transactions</Col>
                <Col span={12} style={{ float: 'right' }}></Col>
                {/* <Col span={12}>Hello</Col> */}
              </Row>
              <div>
                <img src={transactionsImg} alt="" className={styles.imgStyle} />
                <h2 style={{ textAlign: 'center' }}>Your transactions will appear here</h2>
              </div>
            </Col>
            {/* Section two */}
            <Col span={12}>
              <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Col span={12} className={styles.sectionTwo}>
                  <h4 className={styles.textStyle}>Account</h4>
                  <div style={{ textAlign: 'center' }}>
                    <Pie percent={68} subTitle="Total" total="68%" height={140} color="#ffab2b" />
                  </div>
                  <h4 className={styles.textStyle} style={{ textAlign: 'center' }}>
                    VISA CARD *** 575675
                  </h4>
                  <div className={styles.containerStyle} style={{ flexDirection: 'row' }}>
                    <h4 className={styles.textStyle}>Download Statement</h4>
                    <a href="#">
                      <i className={styles.textStyle} style={{ fontSize: '20px' }}>
                        <DownloadOutlined />
                      </i>
                    </a>
                  </div>
                </Col>
                <Col span={12} className={styles.sectionTwo}>
                  <h4 className={styles.textStyle}>Spendings</h4>
                </Col>
              </Row>
              <Col
                span={24}
                className={styles.sectionTwo}
                style={{ margin: '5px', height: '50vh' }}
              >
                <h4 className={styles.textStyle}>Available balance</h4>
                <hr className={styles.dividerStyle} />
                <div className={styles.paymentContainer}>
                  <div className={styles.paymentContainer}>
                    <img src={visaCardImg} alt="" />
                    <div style={{ marginLeft: '10px' }}>
                      <h3>1213323***8223</h3>
                      <p>Card number</p>
                    </div>
                  </div>
                  {/* price */}
                  <div>
                    <h3>$88.20</h3>
                    <p>Balance</p>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </div>
      </GridContent>
    );
  }
}

export default connect(({ dashboardAndanalysis, loading }) => ({
  dashboardAndanalysis,
  loading: loading.effects['dashboardAndanalysis/fetch'],
}))(Analysis);
