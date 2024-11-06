import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Card from './components/Card';
import Chart from './components/Chart';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <div className="cards">
            <Card title="Total Revenue" value="$2,129,430" />
            <Card title="Total Transactions" value="1,520" />
            <Card title="Total Likes" value="9,721" />
            <Card title="Total Users" value="9,721" />
          </div>
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default App;
