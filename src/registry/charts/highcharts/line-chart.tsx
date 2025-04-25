import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  title: {
    text: 'Sample Line Chart'
  },
  subtitle: {
    text: 'An example of a line chart with Highcharts and React'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  },
  yAxis: {
    title: {
      text: 'Values'
    }
  },
  tooltip: {
    shared: true,
    valueSuffix: ' units'
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
  },
  series: [
    {
      name: 'Series 1',
      data: [1, 3, 2, 4, 5, 6, 7],
      dataLabels: {
        enabled: true
      }
    },
    {
      name: 'Series 2',
      data: [2, 2, 3, 5, 3, 2, 4],
      dataLabels: {
        enabled: true
      }
    }
  ]
};

export const LineChart = () => (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  </div>
);

