import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Row, Col, Card, Tabs } from 'antd';
import { DndProvider, DragSource, DropTarget } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Account from './components/account';
import CardTransactionDetails from './components/card-transaction-detail';
import CardBalance from './components/card-balance';

const { TabPane } = Tabs;

class TabNode extends Component {
  render() {
    const { connectDragSource, connectDropTarget, children } = this.props;

    return connectDragSource(connectDropTarget(children));
  }
}

const cardTarget = {
  drop(props, monitor) {
    const dragKey = monitor.getItem().index;
    const hoverKey = props.index;

    if (dragKey === hoverKey) {
      return;
    }

    props.moveTabNode(dragKey, hoverKey);
    monitor.getItem().index = hoverKey;
  },
};

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const WrapTabNode = DropTarget('DND_NODE', cardTarget, (connect) => ({
  connectDropTarget: connect.dropTarget(),
}))(
  DragSource('DND_NODE', cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }))(TabNode),
);

class DraggableTabs extends React.Component {
  state = {
    order: [],
  };

  moveTabNode = (dragKey, hoverKey) => {
    const newOrder = this.state.order.slice();
    const { children } = this.props;

    React.Children.forEach(children, (c) => {
      if (newOrder.indexOf(c.key) === -1) {
        newOrder.push(c.key);
      }
    });

    const dragIndex = newOrder.indexOf(dragKey);
    const hoverIndex = newOrder.indexOf(hoverKey);

    newOrder.splice(dragIndex, 1);
    newOrder.splice(hoverIndex, 0, dragKey);

    this.setState({
      order: newOrder,
    });
  };

  renderTabBar = (props, DefaultTabBar) => (
    <DefaultTabBar {...props}>
      {(node) => (
        <WrapTabNode key={node.key} index={node.key} moveTabNode={this.moveTabNode}>
          {node}
        </WrapTabNode>
      )}
    </DefaultTabBar>
  );

  render() {
    const { order } = this.state;
    const { children } = this.props;

    const tabs = [];
    React.Children.forEach(children, (c) => {
      tabs.push(c);
    });

    const orderTabs = tabs.slice().sort((a, b) => {
      const orderA = order.indexOf(a.key);
      const orderB = order.indexOf(b.key);

      if (orderA !== -1 && orderB !== -1) {
        return orderA - orderB;
      }
      if (orderA !== -1) {
        return -1;
      }
      if (orderB !== -1) {
        return 1;
      }

      const ia = tabs.indexOf(a);
      const ib = tabs.indexOf(b);

      return ia - ib;
    });

    return (
      <DndProvider backend={HTML5Backend} >
        <Tabs
          renderTabBar={this.renderTabBar}
          {...this.props}
          tabPosition="top"
          tabBarExtraContent="Your income and your expenses"
        >
          {orderTabs}
        </Tabs>
      </DndProvider>
    );
  }
}

class Transactions extends Component {
  render() {
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
              <Card style={{ height: 'auto' }}>
                <DraggableTabs tabBarExtraContent={this.extraLinks}>
                  <TabPane tab="Cards" key="1">
                    <CardTransactionDetails />
                  </TabPane>
                  <TabPane tab="Deposits" key="2">
                    <CardTransactionDetails />
                  </TabPane>
                  <TabPane tab="E-wallets" key="3">
                    <CardTransactionDetails />
                  </TabPane>
                </DraggableTabs>
              </Card>
              {/* Card balance */}
              <CardBalance />
            </Col>
          </Row>
        </React.Fragment>
      </GridContent>
    );
  }
}

export default Transactions;
