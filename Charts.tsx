import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const TimeSeriesChart = ({ data }) => {
  const series = [{ name: "Visitors", data: data.map(item => item.totalVisitors) }];
  const options = { chart: { id: 'timeSeries' }, xaxis: { type: 'datetime' } };

  return <ReactApexChart options={options} series={series} type="line" />;
};

export const ColumnChart = ({ data }) => {
  const series = [{ name: "Visitors", data: data.map(item => item.visitorsPerCountry) }];
  const options = { chart: { id: 'columnChart' }, xaxis: { categories: data.map(item => item.country) } };

  return <ReactApexChart options={options} series={series} type="bar" />;
};

export const SparklineChart = ({ data, type }) => {
  const series = [{ name: type, data: data.map(item => item[type]) }];
  const options = { chart: { id: `${type}Sparkline`, sparkline: { enabled: true } } };

  return <ReactApexChart options={options} series={series} type="line" />;
};
