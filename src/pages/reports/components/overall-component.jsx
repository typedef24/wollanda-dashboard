import React from 'react';
import { TimelineChart } from 'ant-design-pro/lib/Charts';

export default function OverallComponent() {
  // overall data
  const overallData = [];

  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];

  const config = {
    data,
    padding: 'auto',
    forceFit: true,
    xField: 'year',
    yField: 'value',
    point: {
      visible: true,
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
    events: {
      onPlotClick: (cfg) => {
        console.log(cfg);
      },
    },
  };

  for (let i = 0; i < 20; i++) {
    overallData.push({
      x: new Date().getTime() + 1000 * 60 * 30 * i,
      y1: Math.floor(Math.random() * 100) + 1000,
      y2: Math.floor(Math.random() * 100) + 10,
    });
  }

  return (
    <div>
      <TimelineChart height={200} data={overallData} />
      {/* <Line */}
    </div>
  );
}
