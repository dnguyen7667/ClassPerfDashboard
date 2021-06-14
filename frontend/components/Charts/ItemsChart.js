import React from 'react';
import { Bar } from 'react-chartjs-2';
const arbitraryStackKey = "stack1";
const data = {
  labels: ['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9'],
  datasets: [
    // These two will be in the same stack.
    {
      stack: arbitraryStackKey,
      label: 'Correct %',
      data: [0.44,0.2,0.5,0.4,0.5,0.2,0.7,0.8,0.75].map(x=>x*100),
      backgroundColor: 'green'
    },
    {
      stack: arbitraryStackKey,
      label: 'Incorrect %',
      data: [0.54,0.8,0.5,0.6,0.5,0.8,0.3,0.2,0.25].map(x=>x*100),
      backgroundColor: 'red'
    }
  ]
}

const options = {
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins:{
        title: {
            display: true,
            text: 'Average % of correct/incorrect answer per question',
            color: 'maroon',
         
          },
          legend: {
            position: 'top'
          }
    }

};


const ItemsChart = () => (

    <Bar data={data} options={options} />

);

export default ItemsChart;