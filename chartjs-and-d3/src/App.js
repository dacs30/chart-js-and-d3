import './App.css';
import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import csv from './data/cars-sample.csv';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

function App() {

  const [bmwData, setBmwData] = useState([{}]);
  const [fordData, setFordData] = useState([{}]);
  const [mercedesData, setMercedesData] = useState([{}]);
  const [toyotaData, setToyotaData] = useState([{}]);
  const [hondaData, setHondaData] = useState([{}]);

  const [bmwRadius, setBmwRadius] = useState([]);
  const [fordRadius, setFordRadius] = useState([]);
  const [mercedesRadius, setMercedesRadius] = useState([]);
  const [toyotaRadius, setToyotaRadius] = useState([]);
  const [hondaRadius, setHondaRadius] = useState([]);

  const [bmwColor, setBmwColor] = useState([]);
  const [fordColor, setFordColor] = useState([]);
  const [mercedesColor, setMercedesColor] = useState([]);
  const [toyotaColor, setToyotaColor] = useState([]);
  const [hondaColor, setHondaColor] = useState([]);

  // const [chartData, setChartData] = useState([{}]);
  // const [chartRadius, setChartRadius] = useState([]); 
  // const [chartColor, setChartColor] = useState([]);

  // d3.csv(csv).then(data => {
  //     setChartData(data.map(d => { return { x: d.Weight, y: d.MPG } }, []));
  //   }
  // );

  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  const Chart = () => {

    d3.csv(csv).then(data => {
      
      // var array = data.map(d => { return { x: d.Weight, y: d.MPG } }, []);

      // var weights = data.map(d => { return d.Weight * 0.002 }, []);

      var array = [];

      var bmwDataSet = [];
      var fordDataSet = [];
      var hondaDataSet = [];
      var merecedesDataSet = [];
      var toyotaDataSet = [];

      var bmwRadius = [];
      var fordRadius = [];
      var hondaRadius = [];
      var merecedesRadius = [];
      var toyotaRadius = [];

      // var weights = [];
      // var colors = [];

      data.forEach((data) => {

        //weights.push(data.Weight * 0.002);
        //array.push({ x: data.Weight, y: data.MPG });
        
        switch (data.Manufacturer) {
          case 'honda':
            hondaDataSet.push({ x: data.Weight, y: data.MPG });
            hondaRadius.push(data.Weight * 0.002);
            //hondaColor.push(data.Color);
            //colors.push('rgba(0, 191, 125, 0.5)');
            break;
          case 'toyota':
            toyotaDataSet.push({ x: data.Weight, y: data.MPG });
            toyotaRadius.push(data.Weight * 0.002);
            //toyotaColor.push(data.Color);
            //colors.push('rgba(231, 107, 243, 0.5)');
            break;
          case 'ford':
            fordDataSet.push({ x: data.Weight, y: data.MPG });
            fordRadius.push(data.Weight * 0.002);
            //fordColor.push(data.Color);
            //colors.push('rgba(163, 165, 0, 0.5)');
            break;
          case 'bmw':
            bmwDataSet.push({ x: data.Weight, y: data.MPG });
            bmwRadius.push(data.Weight * 0.002);
            //bmwColor.push(data.Color);
            //colors.push('rgba(248, 118, 109, 0.5)');
            break;
          case 'mercedes':
            merecedesDataSet.push({ x: data.Weight, y: data.MPG });
            merecedesRadius.push(data.Weight * 0.002);
            //merecedesColor.push(data.Color);
            //colors.push('rgba(0, 176, 246, 0.5)');
            break;
        }

      });

      console.log("data", data);

      setBmwData(bmwDataSet);
      setFordData(fordDataSet);
      setHondaData(hondaDataSet);
      setMercedesData(merecedesDataSet);
      setToyotaData(toyotaDataSet);

      setBmwRadius(bmwRadius);
      setFordRadius(fordRadius);
      setHondaRadius(hondaRadius);
      setMercedesRadius(merecedesRadius);
      setToyotaRadius(toyotaRadius);

      // setChartData(array);

      // setChartRadius(weights);

      // setChartColor(colors);

    }).catch(err => {
      console.log(err);
    });

  };

  const options = {
    responsive: true,
    mantainAspectRatio: true,
    scales: {
      y: {
        title: {
          text: 'MPG',
          display: true,
          color: 'white',
          font: {
            size: 20,
          }
        },
        grace: 0.05,
        beginAtZero: false,
        grid: {
          color: 'rgb(242, 242, 242)',
        },
        ticks: {
          color: 'rgb(242, 242, 242)',
        }
      },
      x: {
        title: {
          text: 'Weight',
          display: true,
          color: 'white',
          font: {
            size: 20,
          }
        },
        grid: {
          color: 'rgb(242, 242, 242)',
        },
        ticks: {
          color: 'rgb(242, 242, 242)',
        }
      },
    },
    legend: {
      labels: {
        font: {
          size: 40,
        }
      }
    }
  };



  const data = {
    datasets: [
      {
        label: ['Honda'],
        data: hondaData,
        radius: hondaRadius,
        backgroundColor: 'rgba(0, 191, 125, 0.5)',
        borderColor: 'rgba(0, 191, 125, 0.5)',
      },
      {
        label: ['Toyota'],
        data: toyotaData,
        radius: toyotaRadius,
        backgroundColor: 'rgba(231, 107, 243, 0.5)',
        borderColor: 'rgba(231, 107, 243, 0.5)',
      },
      {
        label: ['Ford'],
        data: fordData,
        radius: fordRadius,
        backgroundColor: 'rgba(163, 165, 0, 0.5)',
        borderColor: 'rgba(163, 165, 0, 0.5)',
      },
      {
        label: ['BMW'],
        data: bmwData,
        radius: bmwRadius,
        backgroundColor: 'rgba(248, 118, 109, 0.5)',
        borderColor: 'rgba(248, 118, 109, 0.5)',
      },
      {
        label: ['Mercedes'],
        data: mercedesData,
        radius: mercedesRadius,
        backgroundColor: 'rgba(0, 176, 246, 0.5)',
        borderColor: 'rgba(0, 176, 246, 0.5)',
      }
    ],
  };

  useEffect(() => {
    Chart();
  }, []);

  return (
    <div className="App">
      <h1>Chart JS</h1>
      <div className="chart">
        <Scatter data={data} options={options} />
      </div>
      <h1>D3 Chart</h1>
      <div className="chart">
        some d3 here 
      </div>
    </div>
  );
}

export default App;
