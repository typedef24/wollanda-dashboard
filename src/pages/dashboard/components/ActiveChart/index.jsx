import React, { Component } from 'react';
import { Statistic } from 'antd';
import { MiniArea } from '../Charts';
import styles from './style.less';

function fixedZero(val) {
  return val * 1 < 12 ? `${val}` : val;
}

function getActiveData() {
  const activeData = [];

  for (let i = 0; i < 12; i += 1) {
    activeData.push({
      x: `${fixedZero(i)}month`,
      y: Math.floor(Math.random() * 200) + i * 50,
    });
  }

  return activeData;
}

export default class ActiveChart extends Component {
  state = {
    activeData: getActiveData(),
  };
  timer = undefined;
  requestRef = undefined;

  componentDidMount() {
    this.loopData();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);

    if (this.requestRef) {
      cancelAnimationFrame(this.requestRef);
    }
  }

  loopData = () => {
    this.requestRef = requestAnimationFrame(() => {
      this.timer = window.setTimeout(() => {
        this.setState(
          {
            activeData: getActiveData(),
          },
          () => {
            this.loopData();
          },
        );
      }, 1000);
    });
  };

  render() {
    const { activeData = [] } = this.state;
    return (
      <div className={styles.activeChart}>
        <Statistic title="Spendings" value="$42.2" />
        <div
          style={{
            marginTop: 32,
          }}
        >
          <MiniArea
            animate={false}
            line
            borderWidth={2}
            height={84}
            scale={{
              y: {
                tickCount: 3,
              },
            }}
            yAxis={{
              tickLine: undefined,
              label: undefined,
              title: undefined,
              line: undefined,
            }}
            data={activeData}
          />
        </div>
        {activeData && (
          <div>
            <div className={styles.activeChartGrid}>
              <p>{[...activeData].sort()[activeData.length - 1].y + 200} month</p>
              <p>${[...activeData].sort()[Math.floor(activeData.length / 2)].y}</p>
            </div>
            <div className={styles.dashedLine}>
              <div className={styles.line} />
            </div>
            <div className={styles.dashedLine}>
              <div className={styles.line} />
            </div>
          </div>
        )}
        {activeData && (
          <div className={styles.activeChartLegend}>
            <span>00:00</span>
            <span>{activeData[Math.floor(activeData.length / 2)].x}</span>
            <span>{activeData[activeData.length - 1].x}</span>
          </div>
        )}
      </div>
    );
  }
}
