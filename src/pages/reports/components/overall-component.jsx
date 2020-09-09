import React from 'react';
import { TimelineChart } from 'ant-design-pro/lib/Charts';
import { Line} from '@ant-design/charts'

import Style from '../style.less';

export default function OverallComponent() {
  // overall data
  const data = [
    {
      year: '1991',
      value: 3, 
      // valueA: 2,

    },
    {
      year: '1992',
      value: 4,
      // valueA: 3,

    },
    {
      year: '1993',
      value: 3.5,
      // valueA: 4,

    },
    {
      year: '1994',
      value: 5,
      // valueA: 5,
    },
    {
      year: '1995',
      value: 4.9,
      // valueA: 6,
    },
    {
      year: '1996',
      value: 6,
      // valueA: 7,
    },
    {
      year: '1997',
      value: 7,
      // valueA: 8,
    },
    {
      year: '1998',
      value: 9,
      // valueA: 9,
    },
    {
      year: '1999',
      value: 13,
      // valueA: 10,
    },
  ];

  const config = {
    data,
    padding: 'auto',
    forceFit: true,
    xField: 'year',
    yField: 'value',
    xAxis: 'value',
    // yField: 'valueA',
    point: {
      visible: true,
      size: 5,
      shape: 'dot',
      style: {
        fill: 'white',
        stroke: '#FFAB2B',
        lineWidth: 2,
        
      },
    },
    events: {
      onPlotClick: (cfg) => {
        console.log(cfg);
      },
    },
  };

  return (
    <div>
      <div>
        <div className={Style.headerStyle}>
        <h4 className={Style.textStyle}>Income</h4>
        <h4 className={Style.textStyle}>Expenses</h4>
        </div>
      </div>
     <Line {...config} lineStyle={{ color: 'red'}}/>
    </div>
  );
}
