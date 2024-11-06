import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Chart.css';

function Chart() {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Guest',
        data: [200, 300, 400, 500],
        backgroundColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'User',
        data: [100, 200, 300, 400],
        backgroundColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  return (
    <div className="chart">
      <Bar data={data} />
    </div>
  );
}

export default Chart;
