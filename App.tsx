import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ApexCharts from 'react-apexcharts';
import { fetchFilteredData } from './api'; // API to fetch filtered data
import { TimeSeriesChart, ColumnChart, SparklineChart } from './Charts';

const App = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (startDate && endDate) {
      fetchFilteredData(startDate, endDate).then(response => setData(response));
    }
  }, [startDate, endDate]);

  return (
    <div>
      <h1>Hotel Booking Dashboard</h1>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        placeholderText="End Date"
      />

      <div className="charts">
        <TimeSeriesChart data={data} />
        <ColumnChart data={data} />
        <SparklineChart data={data} type="adults" />
        <SparklineChart data={data} type="children" />
      </div>
    </div>
  );
};

export default App;
