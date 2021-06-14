import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import Plot from 'react-plotly.js';


const DonutChartAttemptCount = () => (

    

<Plot
data={[
    {
        values:[12,5],
        type: 'pie',
        label: ["Yes", "No"]
            }
   
 
]}
layout={ { 
  height: 400,
  width: 500
,title: 'Box plots of average and max grades'} }
/>

);

export default DonutChartAttemptCount;

