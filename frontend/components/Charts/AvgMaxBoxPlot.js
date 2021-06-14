

import React from 'react';
import Plot from 'react-plotly.js';

class AvgMaxBoxPlot extends React.Component {
  render() {
    return (
      <Plot
        data={[
            {
                x:[15,50,76,80,80,95,77,71,85,100,100],
                type: 'box',
                jitter: 0.3,
                boxpoints: 'all',
                name: 'Max'
            },
            {
                x: [20,18,100,85,85,85,76,84,92,75,76],
                type: 'box',
                jitter: 0.3,
                boxpoints: 'all',
                name: 'Avg'

            }
         
        ]}
        layout={ { title: 'Box plots of average and max grades'} }
      />
    );
  }
}


export default AvgMaxBoxPlot;






















// import React, { Component } from 'react';
// import {VictoryBoxPlot, VictoryTheme, VictoryContainer, VictoryChart} from 'victory';

// const AvgMaxBoxPlot = () => (
//     <VictoryChart 
//         domainPadding={30}
//         containerComponent={<VictoryContainer responsive={false}/>}
//     >
//         <VictoryBoxPlot horizontal
//         boxWidth={50}
//         labels
//         whiskerWidth={25}
//         containerComponent={<VictoryContainer responsive={false}/>}
//             data={[
//                 { x: 'Max', y: [15,50,76,80,80,95,77,71,85,100,100]},
//                 { x: 'Avg', y: [20,18,100,85,85,85,76,84,92,75,76]}
//             ]}

//             name="Average and Max Grades Box Plot"
//             theme={VictoryTheme.material}
        
//             style={{
//         min: { stroke: "tomato" },
//         q1: { fill: "tomato" }
//             }}

//             />
//         </VictoryChart>
// )

// export default AvgMaxBoxPlot;