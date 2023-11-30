import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '23 Nov, 2023',
    price: 7.1,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: '24 Nov, 2023',
    price: 10,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: '25 Nov, 2023',
    price: 11.2,
    // pv: 1398,
    // amt: 2210,
  },
  {
    name: '26 Nov, 2023',
    price: 11,
    // pv: 9800,
    // amt: 2290,
  },
  {
    name: '27 Nov, 2023',
    price: 10.9,
    // pv: 3908,
    // amt: 2000,
  },
  {
    name: '28 Nov, 2023',
    price: 10.7,
    // pv: 4800,
    // amt: 2181,
  },
  {
    name: '29 Nov, 2023',
    price: 9.8,
    // pv: 3800,
    // amt: 2500,
  },
  {
    name: '30 Nov, 2023',
    price: 10,
    // pv: 4300,
    // amt: 2100,
  },
];

export default class SimpleArea extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke="#3B82F6" fill="#93C5FD" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
